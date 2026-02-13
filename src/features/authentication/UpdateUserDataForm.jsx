import Button from '../../components/ui/Button';
import FileInput from '../../components/ui/FileInput';
import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Input from '../../components/ui/Input';

function UpdateUserDataForm() {
  return (
    <Form varinet="inventoryModal">
      <FormRow label="Email address" type="createBookFormStyle">
        <Input disabled value={'amjadal@gmial.com'} />
      </FormRow>
      <FormRow label="Full name" type="createBookFormStyle">
        <Input type="text" id="fullName" />
      </FormRow>
      <FormRow label="Avatar image" type="createBookFormStyle">
        <FileInput id="avatar" accept="image/*" />
      </FormRow>

      <FormRow type="hasbuttons">
        <Button type="reset" variant="third">
          Cancel
        </Button>
        <Button variant="formbutton">Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
