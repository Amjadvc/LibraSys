import { LuSave } from 'react-icons/lu';
import Button from '../components/ui/Button';
import PageTitle from '../components/ui/PageTitle';
import Row from '../components/ui/Row';
import SettingsForm from '../features/Settings/SettingsForm';

function Settings() {
  return (
    <>
      <Row type="horizontal">
        <Row type="virtical-sm">
          <PageTitle title="System Settings" />
          <p className="font-medium text-text-600">
            Manage library rules, financial ratios, and system configurations.
          </p>
        </Row>

        <Button
          type="submit"
          variant="formbutton"
          customStyle="  px-6 py-2.5 rounded-xl  flex items-center gap-2  transition-all  disabled:opacity-70 w-fit"
        >
          <LuSave />
          Save Changes
        </Button>
      </Row>

      <SettingsForm />
    </>
  );
}

export default Settings;
