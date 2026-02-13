import PageSupTitle from '../components/ui/PageSupTitle';
import PageTitle from '../components/ui/PageTitle';
import Row from '../components/ui/Row';
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';

function Account() {
  return (
    <>
      <PageTitle title="Update your account" />
      <Row>
        <PageSupTitle title="Update user data" />
        <UpdateUserDataForm />
      </Row>

      <Row>
        <PageSupTitle title="Update password" />
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
