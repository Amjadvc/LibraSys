import { HiCheckCircle } from 'react-icons/hi2';
import Table from '../../../components/ui/Table';
import Modal from '../../../components/ui/Modal';
import StatusBadge from '../../books/StatusBadge';
import Button from '../../../components/ui/Button';
import ConfirmTransaction from '../../../components/ui/ConfirmTransaction';

function BookDeliveryRow({ transaction }) {
  const { id, book, customer, status, quantity, createdAt, dueDate } =
    transaction;

  const isCollected = status === 'collected';

  return (
    <Table.Row className="hover:bg-background-50">
      {/* Transaction ID */}
      <div className="flex items-center gap-2 text-sm font-semibold text-text-700">
        <span className="rounded-full bg-primary-100 px-2 py-1 text-xs font-semibold text-primary-600">
          #{id}
        </span>
      </div>

      {/* Book */}
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-10 overflow-hidden rounded-xl border border-background-200 bg-background-50">
          <img
            src={book.cover || '/placeholder-book.png'}
            alt={book.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-text-900">{book.title}</p>
          <p className="text-xs text-text-500">Qty: {quantity}</p>
        </div>
      </div>

      {/* Customer */}
      <div className="text-sm font-medium text-text-700">{customer.name}</div>

      {/* Status */}
      <div>
        <StatusBadge status={status} />
      </div>

      {/* Created At */}
      <div className="text-sm text-text-600">{createdAt}</div>

      {/* Due Date */}
      <div className="text-sm text-text-600">{dueDate}</div>

      {/* Actions */}
      <Modal>
        {!isCollected ? (
          <Modal.Open opens="deliver">
            <Button variant="delivery">Deliver</Button>
          </Modal.Open>
        ) : (
          <Button variant="collected" disabled={isCollected}>
            Collected
          </Button>
        )}

        <Modal.Window name="deliver" type="select">
          <ConfirmTransaction actionType="Delivery" targetStatus="Collected" />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookDeliveryRow;
