import { useState } from 'react';
import { books } from '../books/data/books';
import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Select from 'react-select';
import { customStyles } from '../../styles/CustomeStye';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

function InventoryOperationForm() {
  const [type, setType] = useState('add');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState('');

  const bookOptions = books.map((book) => ({
    value: book.id,
    label: book.title,
    cover: book.cover,
    remaining: book.remainingCopies,
  }));

  return (
    <Form>
      <FormRow label="Book" type="createBookFormStyle">
        <Select
          options={bookOptions}
          styles={customStyles}
          placeholder="Select a book..."
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

      <FormRow label="Operation" type="createBookFormStyle">
        <div className="flex justify-between gap-6 font-semibold">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={type === 'add'}
              onChange={() => setType('add')}
            />
            Add copies
          </label>

          <label className="flex items-center gap-2 text-red-500">
            <input
              type="radio"
              checked={type === 'destroy'}
              onChange={() => setType('destroy')}
            />
            Destroy copies
          </label>
        </div>
      </FormRow>

      <FormRow label="Quantity" type="createBookFormStyle">
        <Input
          type="number"
          min="1"
          value={quantity}
          className="h-[44px]"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </FormRow>

      {type === 'add' && (
        <FormRow label="Price per copy" type="createBookFormStyle">
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="h-[44px]"
          />
        </FormRow>
      )}

      <FormRow
        type="hasbuttons"
        customeClasses="flex justify-end gap-[10px] items-center"
      >
        <Button type="submit" variant="third">
          Rest
        </Button>
        <Button type="submit" variant="formbutton">
          Confirm Operation
        </Button>
      </FormRow>
    </Form>
  );
}

export default InventoryOperationForm;
