import Button from '../../components/ui/Button';
import FileInput from '../../components/ui/FileInput';
import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Input from '../../components/ui/Input';
import Select from 'react-select';
import { customStyles } from '../../styles/CustomeStye';
import { useDarkMode } from '../../context/DarkModeContext';

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

function EditBookForm() {
  const { isDarkMode } = useDarkMode();
  return (
    <Form>
      <FormRow label="Title" type="bookFormStyle">
        <Input type="text" name="title" className="h-[40px]" />
      </FormRow>
      <FormRow label="Price" type="bookFormStyle">
        <Input type="number" step="0.01" name="price" className="h-[40px]" />
      </FormRow>

      <FormRow label="Mortgage" type="bookFormStyle">
        <Input type="number" step="0.01" name="mortgage" className="h-[40px]" />
      </FormRow>

      <FormRow label="Authorship Date" type="bookFormStyle">
        <Input
          type="date"
          name="authorship_date"
          className="h-[40px]"
          isDarkMode={isDarkMode}
        />
      </FormRow>

      <FormRow label="Category" type="bookFormStyle">
        <Select
          options={categories}
          styles={customStyles}
          placeholder="Select Category..."
        />
      </FormRow>

      <FormRow label="Authors" type="bookFormStyle">
        <Select
          options={authorOptions}
          styles={customStyles}
          placeholder="Select author..."
          isMulti
        />
      </FormRow>

      <FormRow label="Book Cover" type="bookFormStyle">
        <FileInput name="cover" disabled={false} accept="image/*" />
      </FormRow>

      <FormRow
        type="hasbuttons"
        customeClasses="flex justify-end gap-[10px] items-center"
      >
        <Button variant="third">Cancle</Button>
        <Button variant="formbutton">Edit book</Button>
      </FormRow>
    </Form>
  );
}

export default EditBookForm;
