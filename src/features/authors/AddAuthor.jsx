import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import CreateAuthorForm from './CreateAuthorForm';

function AddAuthor() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="author">
          <Button variant="formbutton" customStyle="py-3 text-sm">
            Add Author
          </Button>
        </Modal.Open>
        <Modal.Window name="author" type="form">
          <CreateAuthorForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddAuthor;
