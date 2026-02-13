import Button from '../../components/ui/Button';
import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Input from '../../components/ui/Input';

function UpdatePasswordForm() {
  return (
    <Form varinet="inventoryModal">
      <FormRow label="New Password (min 8 chars)" type="createBookFormStyle">
        <Input type="password" id="password" autoComplete="current-password" />
      </FormRow>

      <FormRow label="Confirm password" type="createBookFormStyle">
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
        />
      </FormRow>
      <FormRow type="hasbuttons">
        <Button type="reset" variant="third">
          Cancel
        </Button>
        <Button variant="formbutton">Update password</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
