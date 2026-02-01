import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Input from '../../components/ui/Input';
import FileInput from '../../components/ui/FileInput';
import Button from '../../components/ui/Button';

const categories = [
  { id: 1, name: 'Fiction' },
  { id: 2, name: 'Non-Fiction' },
  { id: 3, name: 'Science' },
  { id: 4, name: 'History' },
];

function CreateBook() {
  return (
    <Form>
      <FormRow label="ISBN" type="createBookFormStyle">
        <Input
          type="text"
          name="ISBN"
          placeholder="13-digit ISBN"
          maxLength={13}
          className="h-[44px]"
        />
      </FormRow>
      <FormRow label="Title" type="createBookFormStyle">
        <Input
          type="text"
          name="title"
          placeholder="Enter book title"
          className="h-[44px]"
        />
      </FormRow>
      <FormRow label="Price" type="createBookFormStyle">
        <Input
          type="number"
          step="0.01"
          name="price"
          placeholder="Enter price (e.g. 19.99)"
          className="h-[44px]"
        />
      </FormRow>

      <FormRow label="Mortgage" type="createBookFormStyle">
        <Input
          type="number"
          step="0.01"
          name="mortgage"
          placeholder="Enter mortgage value"
          className="h-[44px]"
        />
      </FormRow>

      <FormRow label="Authorship Date" type="createBookFormStyle">
        <Input
          type="date"
          name="authorship_date"
          placeholder="Select authorship date"
          className="h-[44px]"
        />
      </FormRow>

      <FormRow label="Category" type="createBookFormStyle">
        <select
          name="category_id"
          // className="h-[44px] rounded-[8px] border border-gray-300 px-3 py-2 text-[14px] text-[#363062] shadow-sm outline-none focus-within:ring-2 focus-within:ring-[#363062]/30"
          className="h-[40px] rounded-[8px] border border-background-300 bg-background-50 px-3 text-[14px] text-text-700 shadow-sm outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-400 dark:border-background-700 dark:bg-background-900 dark:text-text-100"
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </FormRow>

      <FormRow label="Book Cover" type="createBookFormStyle">
        <FileInput name="cover" disabled={false} accept="image/*" />
      </FormRow>

      <FormRow
        type="hasbuttons"
        customeClasses="flex justify-end gap-[10px] items-center"
      >
        <Button variant="third">Cancel</Button>
        <Button variant="formbutton">Add new book</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBook;
