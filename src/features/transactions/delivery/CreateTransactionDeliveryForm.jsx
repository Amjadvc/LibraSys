import { mockCustomers } from '../../users/data/users';
import { books } from '../../books/data/books';
import { customStyles } from '../../../styles/CustomeStye';
import { HiBanknotes, HiCreditCard } from 'react-icons/hi2';
import FormRow from '../../../components/ui/FormRow';
import Form from '../../../components/ui/Form';
import Button from '../../../components/ui/Button';
import PriceSummary from './PriceSummary';
import Select from 'react-select';
import SegmentedRadioGroup from '../../../components/ui/SegmentedRadioGroup';
import { Controller, useForm } from 'react-hook-form';

const bookOptions = books.map((book) => ({
  value: book.id,
  label: `${book.title} — ${book.ISBN}`,
  cover: book.cover,
  isDisabled: book.remainingCopies === 0,
  book,
}));

const customerOptions = mockCustomers.map((customer) => ({
  value: customer.id,
  label: customer.name,
  customer,
}));

function CreateTransactionDeliveryForm() {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      book: null,
      customer: null,
      quantity: 1,
      paymentMethod: 'cash',
    },
  });

  const selectedBook = watch('book')?.book;
  const quantity = watch('quantity');
  const paymentMethod = watch('paymentMethod');

  const maxQty = selectedBook?.remainingCopies ?? 1;

  const bookPrice = selectedBook ? selectedBook.price * quantity : 0;
  const mortgagePrice = selectedBook ? selectedBook.mortgage * quantity : 0;
  const totalPrice = bookPrice + mortgagePrice;

  const onSubmit = (data) => {
    console.log('Delivery data:', data);
  };

  return (
    <Form varinet="regular" onSubmit={handleSubmit(onSubmit)}>
      {/* Book Selection */}
      <FormRow
        label="Select Book"
        type="deliveryFormStyle"
        error={errors?.book?.message}
      >
        <Controller
          name="book"
          control={control}
          rules={{ required: 'Please select a book' }}
          render={({ field }) => (
            <Select
              {...field}
              options={bookOptions}
              placeholder="Select a book..."
              styles={customStyles}
              value={field.value}
              onChange={(option) => {
                field.onChange(option);
                setValue('quantity', 1); // reset quantity when book changes
              }}
              formatOptionLabel={(option) => (
                <div className="flex items-center gap-2">
                  <img
                    src={option.cover}
                    alt={option.label}
                    className="h-8 w-6 rounded object-cover"
                  />
                  <span>{option.label}</span>
                </div>
              )}
            />
          )}
        />
      </FormRow>

      {/* Customer Selection */}
      <FormRow
        label="Select Customer"
        type="deliveryFormStyle"
        error={errors?.customer?.message}
      >
        <Controller
          name="customer"
          control={control}
          rules={{ required: 'Please select a customer' }}
          render={({ field }) => (
            <Select
              {...field}
              options={customerOptions}
              placeholder="Select a customer..."
              styles={customStyles}
            />
          )}
        />
      </FormRow>

      {/* Quantity */}
      <FormRow
        label="Quantity"
        type="deliveryFormStyle"
        error={errors?.quantity?.message}
      >
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="quantity"
            onClick={() => setValue('quantity', Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
          >
            -
          </Button>

          <input
            type="text"
            value={quantity}
            readOnly
            className="w-[70px] rounded bg-background-50 text-center text-lg font-medium outline-none"
          />

          <Button
            type="button"
            variant="quantity"
            onClick={() => setValue('quantity', Math.min(maxQty, quantity + 1))}
            disabled={quantity >= maxQty}
          >
            +
          </Button>
        </div>
      </FormRow>

      {/* Payment Method */}
      <FormRow label="Payment Method" type="deliveryFormStyle">
        <Controller
          name="paymentMethod"
          control={control}
          render={({ field }) => (
            <SegmentedRadioGroup
              {...field}
              value={paymentMethod}
              onChange={(value) => field.onChange(value)}
              options={[
                {
                  value: 'cash',
                  label: 'Cash',
                  icon: HiBanknotes,
                  activeClass: 'border-lime-500 bg-lime-100 text-lime-800',
                },
                {
                  value: 'online',
                  label: 'Online',
                  icon: HiCreditCard,
                  activeClass: 'border-cyan-400 bg-cyan-50 text-cyan-800',
                },
              ]}
            />
          )}
        />
      </FormRow>

      {/* Price Summary */}
      <FormRow
        type="catergoryFormStyle"
        customeClasses="pt-6 border-t border-background-200"
      >
        <PriceSummary
          bookPrice={bookPrice}
          mortgagePrice={mortgagePrice}
          totalPrice={totalPrice}
        />
      </FormRow>

      {/* Buttons */}
      <FormRow
        type="hasbuttons"
        customeClasses="flex justify-end gap-[10px] items-center"
      >
        <Button type="button" variant="third">
          Cancel
        </Button>
        <Button type="submit" variant="formbutton">
          Confirm Delivery
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateTransactionDeliveryForm;
