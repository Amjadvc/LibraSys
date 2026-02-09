import Button from '../../components/ui/Button';
import Textarea from '../../components/ui/Textarea';

function ReviewRequest({ request }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold leading-[1] text-text-900">
          Request details
        </h3>
        <p className="text-sm text-text-600">
          View, approve or reject the selected request.
        </p>
      </div>

      {/* Meta */}
      <div className="flex items-center justify-between rounded-lg bg-background-50 px-4 py-2 text-sm">
        <span className="font-medium text-text-700">Request #{request.id}</span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${
            request.status === 'rejected'
              ? 'bg-red-100 text-red-600'
              : request.status === 'processed'
                ? 'bg-green-100 text-green-600'
                : 'bg-blue-100 text-blue-600'
          } `}
        >
          {request.status}
        </span>
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-4 rounded-xl border border-background-200 bg-background-50 p-4 text-sm">
        <div>
          <p className="text-xs uppercase text-text-500">Book</p>
          <p className="font-medium text-text-800">{request.book_title}</p>
        </div>

        <div>
          <p className="text-xs uppercase text-text-500">Author</p>
          <p className="font-medium text-text-800">{request.author_name}</p>
        </div>

        <div>
          <p className="text-xs uppercase text-text-500">Customer</p>
          <p className="font-medium text-text-800">{request.customer_name}</p>
        </div>

        <div>
          <p className="text-xs uppercase text-text-500">Requested at</p>
          <p className="font-medium text-text-800">{request.created_at}</p>
        </div>
      </div>

      {/* Notes */}
      <div className="space-y-3">
        <label className="mb-1 block text-xs font-semibold uppercase text-text-500">
          Admin note
        </label>

        <Textarea
          rows={3}
          placeholder="Visible only to librarians"
          defaultValue={request.admin_note}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 max-sm:flex-col">
        <Button
          variant="formbutton"
          customStyle="bg-green-600 hover:bg-green-700 text-white w-1/2"
        >
          Approve & Notify
        </Button>

        <Button
          variant="formbutton"
          customStyle="bg-red-600 hover:bg-red-700 text-white w-1/2"
        >
          Reject & Notify
        </Button>
      </div>
    </div>
  );
}

export default ReviewRequest;
