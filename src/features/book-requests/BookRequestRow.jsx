import Table from '../../components/ui/Table';
import { format } from 'date-fns';
import Modal from '../../components/ui/Modal';
import Button from '../../components/ui/Button';
import { GoClock } from 'react-icons/go';
import ReviewRequest from './ReviewRequest';

function BookRequestRow({ request }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-600';
      case 'read':
        return 'bg-yellow-100 text-yellow-600';
      case 'processed':
        return 'bg-green-100 text-green-600';
      case 'rejected':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <Table.Row className="hover:bg-background-50">
      <div className="flex flex-col">
        <span className="font-bold text-text-800">{request.book_title}</span>
        <span className="text-xs text-text-500">{request.author_name}</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-accent-500">
          {request.customer_name.charAt(0)}
        </div>
        <span className="text-sm font-medium text-text-800">
          {request.customer_name}
        </span>
      </div>

      <div className="text-sm font-medium text-text-700">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${getStatusColor(request.status)}`}
        >
          {request.status === 'new' && (
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00a6f4] opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00a6f4]"></span>
            </span>
          )}

          {request.status}
        </span>
      </div>

      <div className="flex items-center gap-1.5 text-slate-500">
        <GoClock className="h-full w-5" />

        <span className="text-sm">
          {format(new Date(request.created_at), 'MMM dd, yyyy')}
        </span>
      </div>

      <Modal>
        <Modal.Open opens="review">
          <Button variant="review">Review</Button>
        </Modal.Open>

        <Modal.Window name="review" type="reviewRequest">
          <ReviewRequest request={request} />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookRequestRow;
