import Button from '../../components/ui/Button';
import Form from '../../components/ui/Form';
import FormRow from '../../components/ui/FormRow';
import Input from '../../components/ui/Input';

function EditCategory() {
  return (
    <Form>
      <FormRow label="Category Name *" type="bookFormStyle">
        <Input type="text" name="title" className="h-[40px]" />
      </FormRow>
      <FormRow
        type="hasbuttons"
        customeClasses="flex justify-end gap-[10px] items-center"
      >
        <Button variant="third">Cancle</Button>
        <Button variant="formbutton">Edit Category</Button>
      </FormRow>
    </Form>
  );
}

export default EditCategory;
