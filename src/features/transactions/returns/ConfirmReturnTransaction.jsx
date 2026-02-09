import Button from '../../../components/ui/Button';

function ConfirmReturnTransaction({ transaction }) {
  if (!transaction) return null;

  const returnAmount = transaction.mortgage - transaction.extraPrice;
  const dueDate = new Date(transaction.dueDate);
  const today = new Date();
  const isOverdue = dueDate < today;
  const daysOverdue = isOverdue
    ? Math.ceil((today.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold leading-[1] text-text-900">
        Confirm Return
      </h3>
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

      {/* Transaction Details */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-primary-200 bg-gradient-to-br from-primary-50 to-primary-100 p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-primary-600">
            Original Mortgage
          </p>
          <p className="text-xl font-bold text-primary-700">
            ${transaction.mortgage.toFixed(2)}
          </p>
        </div>

        <div
          className={`rounded-xl border p-4 ${transaction.extraPrice > 0 ? 'border-amber-200 bg-amber-50' : 'border-background-200 bg-background-50'}`}
        >
          <p
            className={`mb-1 text-xs font-medium uppercase tracking-wide ${transaction.extraPrice > 0 ? 'text-amber-600' : 'text-text-500'}`}
          >
            Extra Charges
          </p>
          <p
            className={`text-xl font-bold ${transaction.extraPrice > 0 ? 'text-amber-700' : 'text-text-600'}`}
          >
            -${transaction.extraPrice.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Overdue Warning */}
      {isOverdue && (
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
      )}

      {/* Return Amount */}
      <div className="rounded-xl border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-5">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-green-600">
                Amount to Return to Customer
              </p>
              <p className="text-2xl font-bold text-green-700">
                ${returnAmount.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs text-green-600">
          Calculated as: Mortgage (${transaction.mortgage.toFixed(2)}) - Extra
          Charges (${transaction.extraPrice.toFixed(2)})
        </p>
      </div>

      {/* Action Buttons */}

      <div className="flex justify-end gap-5 max-sm:justify-center">
        <Button variant="third" customStyle="w-1/2">
          Cancel
        </Button>

        <Button variant="confirmReturn">Confirm Return</Button>
      </div>
    </div>
  );
}

export default ConfirmReturnTransaction;
