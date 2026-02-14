import PageTitle from '../components/ui/PageTitle';
import Row from '../components/ui/Row';
import BookRequestsOperations from '../features/book-requests/BookRequestsOperations';
import BookRequestsTable from '../features/book-requests/BookRequestsTable';

function BookRequests() {
  return (
    <>
      <Row type="horizontal" columnBreakpoint="xl">
        <PageTitle title="Book Requests" />
        <BookRequestsOperations />
      </Row>
      <BookRequestsTable />
    </>
  );
}

export default BookRequests;
