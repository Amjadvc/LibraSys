import PageTitle from '../components/ui/PageTitle';
import Row from '../components/ui/Row';
import BookReturnsOperations from '../features/transactions/returns/BookReturnsOperations';
import BookReturnsTable from '../features/transactions/returns/BookReturnsTable';

function BookReturns() {
  return (
    <>
      <Row type="horizontal">
        <Row type="virtical-sm">
          <PageTitle title="Book Returns" />
          <p className="font-medium text-text-600">
            Process book returns and calculate refunds
          </p>
        </Row>
        <BookReturnsOperations />
      </Row>
      <BookReturnsTable />
    </>
  );
}

export default BookReturns;
