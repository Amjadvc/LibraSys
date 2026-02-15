import Button from '../../../components/ui/Button';

function ConfirmTerminateTransaction({ transaction }) {
  if (!transaction) return null;

  // const returnAmount = transaction.mortgage - transaction.extraPrice;
  const dueDate = new Date(transaction.dueDate);
  const today = new Date();
  const isOverdue = dueDate < today;
  const daysOverdue = isOverdue
    ? Math.ceil((today.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold leading-[1] text-text-900">
        Terminate Transaction
      </h3>

      <div className="rounded-xl border border-red-500 bg-gradient-to-br from-primary-50 to-primary-100 p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <svg
              className="mt-0.5 h-5 w-5 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.22 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <div>
            <p className="font-medium text-red-700">Overdue Return</p>
            <p className="text-sm text-red-600">
              This book is {daysOverdue} day{daysOverdue > 1 ? 's' : ''}{' '}
              overdue. Extra charges have been applied.
            </p>
          </div>
        </div>
      </div>
      {/* Book & Customer Info */}
      <div className="rounded-xl border border-background-200 bg-background-50 p-4">
        <div className="flex items-center gap-4">
          <img
            src={transaction.book.cover}
            alt={transaction.book.title}
            className="h-20 w-16 rounded-lg border border-background-300 object-cover shadow-md"
          />
          <div>
            <h3 className="text-lg font-bold text-text-800">
              {transaction.book.title}
            </h3>
            <p className="mt-1 text-sm text-text-600">
              Customer: {transaction.customer.name}
            </p>
            <p className="text-sm font-medium text-primary-600">
              TR-ID: {`#${transaction.id}`}
            </p>
          </div>
        </div>
      </div>

      {/* Transaction Status */}
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border border-background-300 bg-background-50 p-3">
          <span className="text-text-800">Total Paid</span>
          <span className="font-bold text-text-900">
            $
            {(
              transaction.price +
              transaction.mortgage +
              transaction.extraPrice
            ).toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-background-300 bg-background-50 p-3">
          <span className="text-text-800">Book Not Returned</span>
          <span className="font-medium text-red-600">Yes</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-5 max-sm:justify-center">
        <Button variant="third" customStyle="w-1/2">
          Cancel
        </Button>

        <Button variant="confirmTerminate">Terminate</Button>
      </div>
    </div>
  );
}

export default ConfirmTerminateTransaction;
