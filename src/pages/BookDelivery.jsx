import PageTitle from '../components/ui/PageTitle';
import Row from '../components/ui/Row';
import AddTransactionDelivery from '../features/transactions/delivery/AddTransactionDelivery';
import BookDeliveryOperations from '../features/transactions/delivery/BookDeliveryOperations';
import BookDeliveryTable from '../features/transactions/delivery/BookDeliveryTable';

function BookDelivery() {
  return (
    <>
      <Row type="horizontal" columnBreakpoint="lg">
        <Row type="virtical-sm" columnBreakpoint="sm">
          <PageTitle title="Book Delivery" />
          <p className="font-medium text-text-600">
            Manage reserved and direct borrow transactions
          </p>
        </Row>
        <BookDeliveryOperations />
      </Row>
      <BookDeliveryTable />
      <AddTransactionDelivery />
    </>
  );
}

export default BookDelivery;
