import Pagination from '../../components/ui/Pagination';
import ScrollWrapper from '../../components/ui/ScrollWrapper';
import Table from '../../components/ui/Table';
import BookDeliveryRow from './BookDeliveryRow';
import { transactions } from './data/fakeTransactions';

function BookDeliveryTable() {
  return (
    <ScrollWrapper>
      <Table columns="70px 3fr 1.5fr 1fr  2fr 1fr 100px" minWidth={500}>
        <Table.Header>
          <div>Tx ID</div>
          <div>Book</div>
          <div>Customer</div>
          <div>Status</div>
          <div>Created At</div>
          <div>Due Date</div>
          <div>Action</div>
        </Table.Header>

        <Table.Body
          data={transactions}
          render={(transaction) => (
            <BookDeliveryRow key={transaction.id} transaction={transaction} />
          )}
        />

        <Table.Footer>
          <Pagination count={100} />
        </Table.Footer>
      </Table>
    </ScrollWrapper>
  );
}

export default BookDeliveryTable;
