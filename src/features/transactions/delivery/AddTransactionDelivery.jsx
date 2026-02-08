import Button from '../../../components/ui/Button';
import Modal from '../../../components/ui/Modal';
import CreateTransactionDeliveryForm from './CreateTransactionDeliveryForm';

function AddTransactionDelivery() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="addTransactionDeliver">
          <Button variant="formbutton" customStyle="py-3 text-sm">
            Add Transaction Delivery
          </Button>
        </Modal.Open>
        <Modal.Window name="addTransactionDeliver" type="form">
          <CreateTransactionDeliveryForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddTransactionDelivery;
