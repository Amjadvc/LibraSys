import PageTitle from '../components/ui/PageTitle';
import Row from '../components/ui/Row';
import UserTable from '../features/users/UserTable';
import UserTableOperations from '../features/users/UserTableOperations';

function Users() {
  return (
    <>
      <Row type="horizontal">
        <Row type="virtical-sm">
          <PageTitle title="Users" />
          <p className="font-medium text-text-600">
            Manage and monitor registered users
          </p>
        </Row>
        <UserTableOperations />
      </Row>
      <UserTable />
    </>
  );
}

export default Users;
