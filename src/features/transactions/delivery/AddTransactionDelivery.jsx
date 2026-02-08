import Button from '../../../components/ui/Button';
import Modal from '../../../components/ui/Modal';

function AddTransactionDelivery() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="addBook">
          <Button variant="formbutton" customStyle="py-2 px-[8px]">
            Add Transaction Delivery
          </Button>
        </Modal.Open>
        <Modal.Window name="addBook" type="form">
          {/* <CreateBookForm /> */}
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddTransactionDelivery;
