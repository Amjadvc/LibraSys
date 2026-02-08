import Button from './Button';

function ConfirmTransaction({
  actionType = 'Delivery',
  targetStatus = 'Collected',
  onConfirm,
  onCancel,
  disabled = false,
}) {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-2xl font-semibold leading-[1] text-text-900">
        Confirm {actionType}
      </h3>

      <div className="space-y-3">
        <p className="text-text-700">
          Are you sure you want to mark this transaction as{' '}
          <strong className="font-semibold text-accent-600">
            {targetStatus}
          </strong>
          ?
        </p>
      </div>

      <div className="flex justify-end gap-5 max-sm:justify-center">
        <Button variant="third" onClick={onCancel} disabled={disabled}>
          Cancel
        </Button>

        <Button variant="formbutton" onClick={onConfirm} disabled={disabled}>
          Confirm {actionType}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmTransaction;
