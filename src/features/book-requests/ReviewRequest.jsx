import Button from '../../components/ui/Button';
import StatusBadge from '../../components/ui/StatusBadge';
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
        <StatusBadge status={request.status} />
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-4 rounded-xl border border-background-200 bg-background-50 p-4 text-sm">
        <DetailItem label="Book" value={request.book_title} />
        <DetailItem label="Author" value={request.author_name} />
        <DetailItem label="Customer" value={request.customer_name} />
        <DetailItem label="Requested at" value={request.created_at} />
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

function DetailItem({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase text-text-500">{label}</p>
      <p className="font-medium text-text-800">{value || '—'}</p>
    </div>
  );
}
