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
import { Controller, useForm } from 'react-hook-form';

function InventoryOperationForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      book: null,
      inventoryOperation: 'add',
      quantity: 1,
      price: '',
      operationDate: '',
    },
  });

  const watchType = watch('inventoryOperation', 'add');

  const bookOptions = books.map((book) => ({
    value: book.id,
    label: book.title,
    cover: book.cover,
    remaining: book.remainingCopies,
  }));

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Reset form after submission if needed
    reset();
  };

  return (
    <Form varinet="inventoryModal" onSubmit={handleSubmit(onSubmit)}>
      {/* Book select */}
      <FormRow
        label="Book"
        type="createBookFormStyle"
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
              styles={customStyles}
              placeholder="Select a book..."
              value={field.value}
              onChange={(option) => field.onChange(option)}
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
          )}
        />
      </FormRow>

      {/* inventoryOperation */}
      <FormRow
        label="Operation"
        type="createBookFormStyle"
        error={errors?.inventoryOperation?.message}
      >
        <Controller
          name="inventoryOperation"
          control={control}
          rules={{ required: 'Please select operation type' }}
          render={({ field }) => (
            <SegmentedRadioGroup
              {...field}
              value={field.value}
              onChange={(value) => {
                field.onChange(value);
              }}
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
          )}
        />
      </FormRow>

      {/* Quantity  */}
      <FormRow
        label="Quantity"
        type="createBookFormStyle"
        error={errors?.quantity?.message}
      >
        <Input
          type="number"
          min="1"
          className="h-[44px]"
          {...register('quantity', {
            required: 'Quantity is required',
            min: { value: 1, message: 'Quantity must be at least 1' },
            valueAsNumber: true,
          })}
        />
      </FormRow>

      {/* Price per copy (only for add operation) */}
      {watchType === 'add' && (
        <FormRow
          label="Price per copy"
          type="createBookFormStyle"
          error={errors?.price?.message}
        >
          <Input
            type="number"
            step="0.01"
            className="h-[44px]"
            {...register('price', {
              required: 'Price is required when adding copies',
              min: { value: 0, message: 'Price cannot be negative' },
              valueAsNumber: true,
            })}
          />
        </FormRow>
      )}

      {/* Operation date */}
      <FormRow
        label="Operation Date & Time"
        type="createBookFormStyle"
        error={errors?.operationDate?.message}
      >
        <Input
          type="date"
          className="h-[44px]"
          {...register('operationDate', {
            required: 'Operation date is required',
          })}
        />
      </FormRow>

      {/* Buttons */}
      <FormRow
        type="hasbuttons"
        customeClasses="flex justify-end gap-[10px] items-center"
      >
        <Button type="button" variant="third" onClick={() => reset()}>
          Reset
        </Button>
        <Button type="submit" variant="formbutton">
          Confirm
        </Button>
      </FormRow>
    </Form>
  );
}

export default InventoryOperationForm;
