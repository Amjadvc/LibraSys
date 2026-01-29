import Form from "../../components/ui/Form";
import FormRow from "../../components/ui/FormRow";
import Input from "../../components/ui/Input";
import FileInput from "../../components/ui/FileInput";
import Button from "../../components/ui/Button";

const categories = [
  { id: 1, name: "Fiction" },
  { id: 2, name: "Non-Fiction" },
  { id: 3, name: "Science" },
  { id: 4, name: "History" },
];

function CreateBookForm() {
  return (
    <Form>
      <FormRow label="Title" type="createBookFormStyle">
        <Input type="text" name="title" className="h-[40px]" />
      </FormRow>
      <FormRow label="Price" type="createBookFormStyle">
        <Input type="number" step="0.01" name="price" className="h-[40px]" />
      </FormRow>

      <FormRow label="Mortgage" type="createBookFormStyle">
        <Input type="number" step="0.01" name="mortgage" className="h-[40px]" />
      </FormRow>

      <FormRow label="Authorship Date" type="createBookFormStyle">
        <Input type="date" name="authorship_date" className="h-[40px]" />
      </FormRow>

      <FormRow label="Category" type="createBookFormStyle">
        <select
          name="category_id"
          className="h-[40px] rounded-[8px] border border-gray-300 px-3 py-2 text-[14px] text-[#363062] shadow-sm outline-none focus-within:ring-2 focus-within:ring-[#363062]/30"
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
        <Button variant="third">Cancle</Button>
        <Button variant="formbutton">Edit book</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookForm;
