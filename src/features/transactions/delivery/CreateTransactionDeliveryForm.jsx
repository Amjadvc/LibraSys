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
    <Form>
      <FormRow label="Select Book" type="catergoryFormStyle">
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

      <FormRow label="Select Customer" type="catergoryFormStyle">
        <Select
          options={customerOptions}
          placeholder="Select a customer..."
          styles={customStyles}
        />
      </FormRow>

      <FormRow label="Quantity" htmlFor="quantity" type="catergoryFormStyle">
        <div className="flex items-center justify-start gap-3">
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

      <FormRow label="Payment Method" type="catergoryFormStyle">
        <div className="flex gap-4">
          {/* Cash */}
          <Button
            type="button"
            variant="payment"
            onClick={() => setPaymentMethod('cash')}
            customStyle={`
              ${
                paymentMethod === 'cash'
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-background-200 bg-background-50 text-text-700 hover:bg-background-100'
              }
            `}
          >
            <HiBanknotes className="text-2xl" />
            <div className="flex flex-col text-left">
              <span className="font-medium">Cash</span>
            </div>
          </Button>

          {/* Online */}
          <Button
            type="button"
            variant="payment"
            onClick={() => setPaymentMethod('online')}
            customStyle={`
              ${
                paymentMethod === 'online'
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-background-200 bg-background-50 text-text-700 hover:bg-background-100'
              }
            `}
          >
            <HiCreditCard className="text-2xl" />
            <div className="flex flex-col text-left">
              <span className="font-medium">Online</span>
            </div>
          </Button>
        </div>
      </FormRow>

      <FormRow type="catergoryFormStyle">
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
