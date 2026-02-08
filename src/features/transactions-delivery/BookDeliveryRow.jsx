import { HiEye, HiCheckCircle } from 'react-icons/hi2';
import Table from '../../components/ui/Table';
import Menus from '../../components/ui/Menus';
import Modal from '../../components/ui/Modal';
import StatusBadge from '../books/StatusBadge';
import Button from '../../components/ui/Button';

function BookDeliveryRow({ transaction }) {
  const { id, book, customer, status, quantity, createdAt, dueDate } =
    transaction;

  const isCollected = status === 'collected';

  return (
    <Table.Row className="hover:bg-background-50">
      {/* Transaction ID */}
      <div className="font-medium text-text-700">#{id}</div>

      {/* Book */}
      <div className="flex items-center gap-3">
        <img
          src={book.cover || '/placeholder-book.png'}
          alt={book.title}
          className="h-12 w-8 rounded border object-cover"
        />
        <div className="flex flex-col">
          <span className="font-medium text-text-800">{book.title}</span>
          <span className="text-sm text-text-500">Qty: {quantity}</span>
        </div>
      </div>

      {/* Customer */}
      <div className="text-text-700">{customer.name}</div>

      {/* Status */}
      <div>
        <StatusBadge status={status} />
      </div>

      {/* Created At */}
      <div className="text-text-600">{createdAt}</div>

      {/* Due Date */}
      <div className="text-text-600">{dueDate}</div>

      {/* Actions */}
      <Modal>
        {!isCollected && (
          <Modal.Open opens="deliver">
            <Button variant="delivery">
              <HiCheckCircle className="text-white" />
              Deliver
            </Button>
          </Modal.Open>
        )}

        <Modal.Window name="deliver" type="select">
          <div className="space-y-4 p-6">
            <h3 className="text-lg font-semibold text-text-800">
              Confirm Delivery
            </h3>
            <p className="text-text-600">
              Mark this transaction as <strong>Collected</strong>?
            </p>

            <div className="flex justify-end gap-3">
              <button className="btn-secondary">Cancel</button>
              <button className="btn-primary">Confirm</button>
            </div>
          </div>
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookDeliveryRow;
