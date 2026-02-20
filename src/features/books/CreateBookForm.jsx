import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Input from '../../components/ui/Input';
import FileInput from '../../components/ui/FileInput';
import Button from '../../components/ui/Button';
import Select from 'react-select';
import { customStyles } from '../../styles/CustomeStye';
import { useDarkMode } from '../../context/DarkModeContext';
import { Controller, useForm } from 'react-hook-form';
import { useCreateBook } from './useCreateBook';

const categories = [
  { value: 1, label: 'Fiction' },
  { value: 2, label: 'Non-Fiction' },
  { value: 3, label: 'Science' },
  { value: 4, label: 'History' },
];
const authors = [
  {
    id: 1,
    name: 'Robert C. Martin',
    birth_date: '1952-12-05',
    country: 'Canada',
  },
  {
    id: 2,
    name: 'Andrew Hunt',
    birth_date: '1964-01-01',
    country: 'United States',
  },
  {
    id: 3,
    name: 'David Thomas',
    birth_date: '1956-01-01',
    country: 'Australia',
  },
  {
    id: 4,
    name: 'Donald Knuth',
    birth_date: '1938-01-10',
    country: 'Finland',
  },
  {
    id: 5,
    name: 'Fyodor Dostoevsky',
    birth_date: '1821-11-11',
    country: 'Russia',
  },
  {
    id: 6,
    name: 'Daniel Kahneman',
    birth_date: '1934-03-05',
    country: 'Syria',
  },
];

const authorOptions = authors.map((author) => ({
  value: author.id,
  label: author.name,
}));

function CreateBookForm({ onCloseModal }) {
  const { isDarkMode } = useDarkMode();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const { createBook } = useCreateBook();

  async function onSubmit(data) {
    const formattedData = {
      ...data,
      category_id: data.category_id.value,
      authors: data.authors.map((author) => author.value),
      cover: data.cover[0],
      total_copies: 0,
      remaining_copies: 0,
    };

    createBook(formattedData, {
      onSuccess: (data) => {
        reset();
        onCloseModal?.();
      },
    });
    console.log(formattedData);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* ISBN */}
      <FormRow label="ISBN" type="bookFormStyle" error={errors?.ISBN?.message}>
        <Input
          type="text"
          placeholder="13-digit ISBN"
          maxLength={13}
          className="h-[44px]"
          {...register('ISBN', {
            required: 'ISBN is required',
            pattern: {
              value: /^[0-9]{13}$/,
              message: 'ISBN must be exactly 13 digits',
            },
          })}
        />
      </FormRow>

      {/* book title */}
      <FormRow
        label="Title"
        type="bookFormStyle"
        error={errors?.title?.message}
      >
        <Input
          type="text"
          placeholder="Enter book title"
          className="h-[44px]"
          {...register('title', {
            required: 'Title is required',
            minLength: {
              value: 3,
              message: 'Title must be at least 3 characters',
            },
          })}
        />
      </FormRow>

      {/* Price */}
      <FormRow
        label="Price"
        type="bookFormStyle"
        error={errors?.price?.message}
      >
        <Input
          type="number"
          step="0.01"
          placeholder="Enter price (e.g. 19.99)"
          className="h-[44px]"
          {...register('price', {
            required: 'Price is required',
            min: {
              value: 0,
              message: 'Price cannot be negative',
            },
            valueAsNumber: true,
          })}
        />
      </FormRow>

      {/* Mortgage */}
      <FormRow
        label="Mortgage"
        type="bookFormStyle"
        error={errors?.mortgage?.message}
      >
        <Input
          type="number"
          step="0.01"
          placeholder="Enter mortgage (e.g. 19.99)"
          className="h-[44px]"
          {...register('mortgage', {
            required: 'Mortgage is required',
            min: {
              value: 0,
              message: 'Mortgage cannot be negative',
            },
            valueAsNumber: true,
          })}
        />
      </FormRow>

      {/* Pages */}
      <FormRow
        label="Pages"
        type="bookFormStyle"
        error={errors?.pages?.message}
      >
        <Input
          type="number"
          step="1"
          placeholder="Enter pages number"
          className="h-[44px]"
          {...register('pages', {
            required: 'Pages number is required',
            min: {
              value: 1,
              message: 'Pages must be at least 1',
            },
            valueAsNumber: true,
          })}
        />
      </FormRow>

      {/* Borrow Duration */}
      <FormRow
        label=" Borrow Duration"
        type="bookFormStyle"
        error={errors?.borrow_duration?.message}
      >
        <Input
          type="number"
          step="1"
          placeholder="Enter borrow duration"
          className="h-[44px]"
          {...register('borrow_duration', {
            required: ' borrow duration number is required',
            min: {
              value: 1,
              message: ' borrow duration must be at least 1',
            },
            valueAsNumber: true,
          })}
        />
      </FormRow>

      {/* Authorship Date */}
      <FormRow
        label="Authorship Date"
        type="bookFormStyle"
        error={errors?.authorship_date?.message}
      >
        <Input
          type="date"
          placeholder="Select authorship date"
          className="h-[44px]"
          isDarkMode={isDarkMode}
          {...register('authorship_date', {
            required: 'Authorship date is required',
          })}
        />
      </FormRow>

      {/* Category */}
      <FormRow
        label="Category"
        type="bookFormStyle"
        error={errors?.category_id?.message}
      >
        <Controller
          name="category_id"
          control={control}
          rules={{ required: 'Category is required' }}
          render={({ field }) => (
            <Select
              {...field}
              options={categories}
              styles={customStyles}
              placeholder="Select Category..."
              value={field.value}
              onChange={(option) => field.onChange(option)}
            />
          )}
        />
      </FormRow>

      {/* Authors */}
      <FormRow
        label="Authors"
        type="bookFormStyle"
        error={errors?.authors?.message}
      >
        <Controller
          name="authors"
          control={control}
          rules={{ required: 'At least one author is required' }}
          render={({ field }) => (
            <Select
              {...field}
              options={authorOptions}
              isMulti
              styles={customStyles}
              placeholder="Select authors..."
              value={field.value}
              onChange={(options) => field.onChange(options)}
            />
          )}
        />
      </FormRow>

      {/* Book Cover */}
      <FormRow
        type="bookFormStyle"
        label="Book Cover"
        error={errors?.cover?.message}
      >
        <FileInput
          type="file"
          accept="image/*"
          {...register('cover', {
            required: 'Cover image is required',
          })}
        />
      </FormRow>

      {/* buttons  */}
      <FormRow
        type="hasbuttons"
        customeClasses="flex justify-end gap-[10px] items-center"
      >
        <Button variant="third" type="button" onClick={() => reset()}>
          Reset
        </Button>
        <Button variant="formbutton">Add new book</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookForm;
