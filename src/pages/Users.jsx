import PageTitle from '../components/ui/PageTitle';
import Row from '../components/ui/Row';
import UserTable from '../features/users/UserTable';
import UserTableOperations from '../features/users/UserTableOperations';

function Users() {
  return (
    <>
      <Row type="horizontal">
        <PageTitle title="Users" />
        <UserTableOperations />
      </Row>
      <UserTable />
    </>
  );
}

export default Users;
