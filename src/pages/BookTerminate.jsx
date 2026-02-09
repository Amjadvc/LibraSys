import PageTitle from '../components/ui/PageTitle';
import Row from '../components/ui/Row';
import BookTerminateOperations from '../features/transactions/terminate/BookTerminateOperations';
import BookTerminateTable from '../features/transactions/terminate/BookTerminateTable';

function BookTerminate() {
  return (
    <>
      <Row type="horizontal">
        <Row type="virtical-sm">
          <PageTitle title="Terminate Transactions" />
          <p className="font-medium text-text-600">
            End paid transactions for unreturned books
          </p>
        </Row>
        <BookTerminateOperations />
      </Row>
      <BookTerminateTable />
    </>
  );
}

export default BookTerminate;
