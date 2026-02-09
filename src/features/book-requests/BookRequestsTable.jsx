import Pagination from '../../components/ui/Pagination';
import ScrollWrapper from '../../components/ui/ScrollWrapper';
import Table from '../../components/ui/Table';
import BookRequestRow from './BookRequestRow';
import { INITIAL_REQUESTS } from './data/fakeTransactions';

function BookRequestsTable() {
  return (
    <ScrollWrapper>
      <Table columns="1.5fr 1fr 1fr 1fr 0.5fr" minWidth={800}>
        <Table.Header>
          <div>Book / Author</div>
          <div>Customer</div>
          <div>Status</div>
          <div>Requested At</div>
          <div>Action</div>
        </Table.Header>

        <Table.Body
          data={INITIAL_REQUESTS}
          render={(request) => (
            <BookRequestRow key={request.id} request={request} />
          )}
        />

        <Table.Footer>
          <Pagination count={100} />
        </Table.Footer>
      </Table>
    </ScrollWrapper>
  );
}

export default BookRequestsTable;
