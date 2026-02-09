import Pagination from '../../../components/ui/Pagination';
import ScrollWrapper from '../../../components/ui/ScrollWrapper';
import Table from '../../../components/ui/Table';
import BookReturnsRow from './BookReturnsRow';
import { transactions } from './data/fakeTransactions';

function BookReturnsTable() {
  return (
    <ScrollWrapper>
      <Table columns="70px 2.4fr 1.4fr 100px 1fr 1fr 100px" minWidth={800}>
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
            <BookReturnsRow key={transaction.id} transaction={transaction} />
          )}
        />

        <Table.Footer>
          <Pagination count={100} />
        </Table.Footer>
      </Table>
    </ScrollWrapper>
  );
}

export default BookReturnsTable;
