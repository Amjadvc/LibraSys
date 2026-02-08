import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import CreateBookForm from './CreateBookForm';

function AddBook() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="addBook">
          <Button variant="formbutton" customStyle="py-3 text-sm">
            Add Book
          </Button>
        </Modal.Open>
        <Modal.Window name="addBook" type="form">
          <CreateBookForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBook;
