import Table from '../../../components/ui/Table';
import Modal from '../../../components/ui/Modal';
import Button from '../../../components/ui/Button';
import ConfirmTransaction from '../../../components/ui/ConfirmTransaction';
import StatusBadge from '../../../components/ui/StatusBadge';

function BookDeliveryRow({ transaction }) {
  const {
    id,
    book,
    customer,
    status,
    quantity,
    dueDate,
    price: transactionPrice,
    mortgage: transactionMortgage,
    extraPrice,
    extensionCount,
  } = transaction;

  const isCollected = status === 'collected';

  // حساب المبلغ الإجمالي
  const totalPrice = (transactionPrice || book.price || 0) * quantity;
  const totalMortgage = (transactionMortgage || book.mortgage || 0) * quantity;

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

      {/* PRICE/MORT*/}
      <div className="space-y-0.5 text-sm">
        <div className="font-medium text-text-800">
          ${totalPrice.toFixed(2)}
        </div>
        <div className="text-xs text-text-500">
          Mort: ${totalMortgage.toFixed(2)}
        </div>
      </div>

      {/* Due Date */}
      <div className="text-sm text-text-600">{dueDate}</div>

      {/* Actions */}
      <Modal>
        {!isCollected ? (
          <Modal.Open opens="delivery">
            <Button variant="delivery">Deliver</Button>
          </Modal.Open>
        ) : (
          <Button variant="collected" disabled={isCollected}>
            Collected
          </Button>
        )}

        <Modal.Window name="delivery" type="select">
          <ConfirmTransaction actionType="Delivery" targetStatus="Collected" />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookDeliveryRow;
