import Pagination from '../../components/ui/Pagination';
import ScrollWrapper from '../../components/ui/ScrollWrapper';
import Table from '../../components/ui/Table';
import { mockCustomers } from './data/users';
import UserRow from './UserRow';

function UserTable() {
  return (
    <ScrollWrapper>
      <Table columns="2.8fr 2fr 1fr 1.5fr 1.5fr 80px" minWidth={950}>
        <Table.Header>
          <div>User</div>
          <div>Phone</div>
          <div>Gender</div>
          <div>Date of Birth</div>
          <div>Joined Date</div>
          <div>Status</div>
        </Table.Header>

        <Table.Body
          data={mockCustomers}
          render={(user) => <UserRow key={user.id} user={user} />}
        />

        <Table.Footer>
          <Pagination count={100} />
        </Table.Footer>
      </Table>
    </ScrollWrapper>
  );
}

export default UserTable;
