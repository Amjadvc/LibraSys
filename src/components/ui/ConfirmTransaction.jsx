import Button from './Button';

function ConfirmTransaction() {
  return (
    <div className="space-y-4 p-6">
      <h3 className="text-lg font-semibold text-text-800">Confirm Delivery</h3>
      <p className="text-text-600">
        Mark this transaction as <strong>Collected</strong>?
      </p>

      <div className="flex justify-end gap-3">
        <Button variant="third">Cancel</Button>

        <Button variant="danger" onClick={onConfirm} disabled={disabled}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmTransaction;
