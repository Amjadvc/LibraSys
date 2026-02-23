import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import { useCountry } from '../../hooks/useCountry';
import CreateAuthorForm from './CreateAuthorForm';

function AddAuthor() {
  const { countries } = useCountry();
  return (
    <div>
      <Modal>
        <Modal.Open opens="author">
          <Button variant="formbutton" customStyle="py-3 text-sm">
            Add Author
          </Button>
        </Modal.Open>
        <Modal.Window name="author" type="form">
          <CreateAuthorForm countries={countries} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddAuthor;
