import PageTitle from '../components/ui/PageTitle';
import Row from '../components/ui/Row';
import SettingsForm from '../features/Settings/SettingsForm';

function Settings() {
  return (
    <>
      <Row type="virtical-sm">
        <PageTitle title="System Settings" />
        <p className="font-medium text-text-600">
          Manage library rules, financial ratios, and system configurations.
        </p>
      </Row>

      <SettingsForm />
    </>
  );
}

export default Settings;
