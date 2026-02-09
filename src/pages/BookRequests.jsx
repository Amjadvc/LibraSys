import PageTitle from '../components/ui/PageTitle';
import Row from '../components/ui/Row';
import BookRequestsOperations from '../features/book-requests/BookRequestsOperations';
import BookRequestsTable from '../features/book-requests/BookRequestsTable';

function BookRequests() {
  return (
    <>
      <Row type="horizontal">
        <Row type="virtical-sm">
          <PageTitle title="Book Requests" />
          <p className="font-medium text-text-600">
            Manage book requests from your customers
          </p>
        </Row>
        <BookRequestsOperations />
      </Row>
      <BookRequestsTable />
    </>
  );
}

export default BookRequests;
