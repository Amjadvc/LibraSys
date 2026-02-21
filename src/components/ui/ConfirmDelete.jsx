import Button from './Button';
import SpinnerMini from './SpinnerMini';

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-2xl font-semibold leading-[1] text-text-900">
        Delete {resourceName}
      </h3>

      <p className="text-text-700">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-5 max-sm:justify-center">
        <Button variant="third" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>

        <Button variant="danger" onClick={onConfirm} disabled={disabled}>
          {disabled ? <SpinnerMini /> : 'Delete'}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
