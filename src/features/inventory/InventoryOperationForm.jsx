import { useState } from 'react';
import { books } from '../books/data/books';
import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Select from 'react-select';
import { customStyles } from '../../styles/CustomeStye';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import SegmentedRadioGroup from '../../components/ui/SegmentedRadioGroup';
import { BiBookAdd } from 'react-icons/bi';
import { LuBookX } from 'react-icons/lu';

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
    <Form varinet="inventoryModal">
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
        <SegmentedRadioGroup
          name="inventoryOperation"
          value={type}
          onChange={setType}
          options={[
            {
              value: 'add',
              label: 'Add copies',
              icon: BiBookAdd,
              activeClass: 'border-green-500 bg-green-50 text-green-700',
            },
            {
              value: 'destroy',
              label: 'Destroy copies',
              icon: LuBookX,
              activeClass: 'border-red-500 bg-red-50 text-red-700',
            },
          ]}
        />
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

      <FormRow label="Operation Date & Time" type="createBookFormStyle">
        <Input type="date" className="h-[44px]" />
      </FormRow>

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
