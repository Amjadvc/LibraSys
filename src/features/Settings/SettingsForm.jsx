import Form from '../../components/ui/Form';
import { FiBookOpen, FiDollarSign } from 'react-icons/fi';
import Input from '../../components/ui/Input';
import SettingsSection from './SettingsSection';
import FormSettingField from './FormSettingField';

const baseInputStyles =
  'h-[48px] w-full rounded-lg border border-background-200 text-text-800 ' +
  'focus:border-primary-500 focus:ring-primary-500 ' +
  'dark:border-background-400 dark:text-text-900';

function SettingsForm() {
  return (
    <Form varinet="settingModal">
      <div className="flex gap-6">
        <SettingsSection
          icon={FiBookOpen}
          title="Borrowing Rules"
          iconStyle="bg-primary-100 text-primary-600 dark:bg-primary-800 dark:text-primary-200"
        >
          <FormSettingField
            label="Maximum Borrow Limit"
            hint="Max number of books a customer can have at once."
          >
            <Input type="number" className={baseInputStyles} />
          </FormSettingField>

          <FormSettingField
            label="Pages per Day Ratio"
            hint="Determines borrowing duration based on book length."
          >
            <Input type="number" className={baseInputStyles} />
          </FormSettingField>
        </SettingsSection>

        <SettingsSection
          icon={FiDollarSign}
          title="Financial Ratios"
          iconStyle="bg-accent-100 text-accent-600 dark:bg-accent-800 dark:text-accent-200"
        >
          <FormSettingField
            label="Price-to-Mortgage Ratio"
            hint="The percentage of the book's price used for mortgage calculation."
          >
            <Input
              type="number"
              step="0.1"
              className={`${baseInputStyles} focus:border-accent-500 focus:ring-accent-500`}
            />
          </FormSettingField>

          <FormSettingField label="Late Fee per Day">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-400 dark:text-text-600">
                $
              </span>

              <Input
                type="number"
                className={`${baseInputStyles} pl-8 focus:border-accent-500 focus:ring-accent-500`}
              />
            </div>
          </FormSettingField>
        </SettingsSection>
      </div>
    </Form>
  );
}

export default SettingsForm;
