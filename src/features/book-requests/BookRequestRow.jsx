import Table from '../../components/ui/Table';
import { format } from 'date-fns';
import Modal from '../../components/ui/Modal';
import Button from '../../components/ui/Button';
import { GoClock } from 'react-icons/go';
import ReviewRequest from './ReviewRequest';
import StatusBadge from '../books/StatusBadge';

function BookRequestRow({ request }) {
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

      {/* Status */}
      <div className="flex items-center text-sm font-medium text-text-700">
        <StatusBadge status={request.status} />
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
