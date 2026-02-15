import Pagination from '../../../components/ui/Pagination';
import ScrollWrapper from '../../../components/ui/ScrollWrapper';
import Table from '../../../components/ui/Table';
import BookTerminateRow from './BookTerminateRow';
import { transactions } from './data/fakeTransactions';

function BookTerminateTable() {
  return (
    <ScrollWrapper>
      <Table columns="70px 2.4fr 1.4fr 100px 1fr 1fr 100px" minWidth={1200}>
        <Table.Header>
          <div>Tr-Id</div>
          <div>Book</div>
          <div>Customer</div>
          <div>Status</div>
          <div>PRICE/MORT</div>
          <div>Due Date</div>
          <div>Action</div>
        </Table.Header>

        <Table.Body
          data={transactions}
          render={(transaction) => (
            <BookTerminateRow key={transaction.id} transaction={transaction} />
          )}
        />

        <Table.Footer>
          <Pagination count={100} />
        </Table.Footer>
      </Table>
    </ScrollWrapper>
  );
}

export default BookTerminateTable;
