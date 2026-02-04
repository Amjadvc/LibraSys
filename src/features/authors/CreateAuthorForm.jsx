import Button from '../../components/ui/Button';
import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Input from '../../components/ui/Input';

function CreateAuthorForm() {
  return (
    <Form>
      <FormRow label="Author name" type="bookFormStyle">
        <Input
          type="text"
          name="name"
          placeholder="e.g. Robert C. Martin"
          className="h-[44px]"
        />
      </FormRow>

      <FormRow label="Birth date" type="bookFormStyle">
        <Input type="date" name="birth_date" className="h-[44px]" />
      </FormRow>

      <FormRow label="Country" type="bookFormStyle">
        <Input
          type="text"
          name="country"
          placeholder="e.g. USA"
          className="h-[44px]"
        />
      </FormRow>

      <FormRow
        type="hasbuttons"
        customeClasses="flex justify-end gap-[10px] items-center"
      >
        <Button variant="third">Cancel</Button>
        <Button variant="formbutton">Add Author</Button>
      </FormRow>
    </Form>
  );
}

export default CreateAuthorForm;
