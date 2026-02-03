import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import CreateCategoryForm from './CreateCategoryForm';

function AddCategory() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="category">
          <Button variant="formbutton" customStyle="py-3">
            Add New Category
          </Button>
        </Modal.Open>
        <Modal.Window name="category" type="smallForm">
          <CreateCategoryForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCategory;
