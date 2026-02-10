import { mockCustomers } from '../../users/data/users';
import { books } from '../../books/data/books';
import { customStyles } from '../../../styles/CustomeStye';
import { useState } from 'react';
import { HiBanknotes, HiCreditCard } from 'react-icons/hi2';
import FormRow from '../../../components/ui/FormRow';
import Form from '../../../components/ui/Form';
import Button from '../../../components/ui/Button';
import PriceSummary from './PriceSummary';
import Select from 'react-select';
import SegmentedRadioGroup from '../../../components/ui/SegmentedRadioGroup';

const bookOptions = books.map((book) => ({
  value: book.id,
  label: `${book.title} — ${book.ISBN}`,
  cover: book.cover,
  isDisabled: book.remainingCopies === 0,
  book,
}));

const customerOptions = mockCustomers.map((customer) => ({
  value: customer.id,
  label: `${customer.name}`,
  customer,
}));

function CreateTransactionDeliveryForm() {
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const selectedBook = books[0];
  const maxQty = selectedBook?.remainingCopies ?? 1;

  const bookPrice = selectedBook ? selectedBook.price * quantity : 0;
  const mortgagePrice = selectedBook ? selectedBook.mortgage * quantity : 0;
  const totalPrice = bookPrice + mortgagePrice;

  return (
    <Form varinet="regular">
      {/* Book Selection */}
      <FormRow label="Select Book" type="deliveryFormStyle">
        <Select
          options={bookOptions}
          placeholder="Select a book..."
          styles={customStyles}
          formatOptionLabel={(option) => (
            <div className="flex items-center gap-2">
              <img
                src={option.cover}
                alt={option.label}
                className="h-8 w-6 rounded object-cover"
              />
              <span>
                {option.label} ({option.remaining} available)
              </span>
            </div>
          )}
        />
      </FormRow>

      {/* Customer Selection */}
      <FormRow label="Select Customer" type="deliveryFormStyle">
        <Select
          options={customerOptions}
          placeholder="Select a customer..."
          styles={customStyles}
        />
      </FormRow>

      <FormRow label="Quantity" htmlFor="quantity" type="deliveryFormStyle">
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="quantity"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            -
          </Button>

          <input
            id="quantity"
            type="text"
            value={quantity}
            readOnly
            className="w-[70px] rounded bg-background-50 text-center text-lg font-medium outline-none"
          />

          <Button
            type="button"
            variant="quantity"
            onClick={() => setQuantity((q) => Math.min(maxQty, q + 1))}
            disabled={quantity >= maxQty}
            aria-label="Increase quantity"
          >
            +
          </Button>
        </div>
      </FormRow>

      <FormRow label="Payment Method" type="deliveryFormStyle">
        <SegmentedRadioGroup
          name="paymentMethod"
          value={paymentMethod}
          onChange={setPaymentMethod}
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

      <FormRow
        type="hasbuttons"
        customeClasses="flex justify-end gap-[10px] items-center"
      >
        <Button variant="third">Cancel</Button>
        <Button variant="formbutton">Confirm Delivery</Button>
      </FormRow>
    </Form>
  );
}

export default CreateTransactionDeliveryForm;
