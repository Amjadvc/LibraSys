import { LuSave } from 'react-icons/lu';
import Button from '../components/ui/Button';
import PageTitle from '../components/ui/PageTitle';
import SettingsForm from '../features/Settings/SettingsForm';

function Settings() {
  return (
    <>
      <PageTitle title="System Settings" />

      <SettingsForm />
      <div className="flex w-full items-start justify-end">
        <Button
          type="submit"
          variant="formbutton"
          customStyle="px-6 py-2.5 rounded-xl flex items-center gap-2 transition-all disabled:opacity-70 w-fit"
        >
          <LuSave />
          Save Changes
        </Button>
      </div>
    </>
  );
}

export default Settings;
