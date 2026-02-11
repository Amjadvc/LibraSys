import DashboardFilter from '../features/dashboard/DashboardFilter';
import DashboardLayout from '../features/dashboard/DashboardLayout';
import PageTitle from '../components/ui/PageTitle';
import Row from '../components/ui/Row';

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <PageTitle title="Dashboard" />
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
