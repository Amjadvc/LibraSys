// import Form from '../../components/ui/Form';
// import { FiBookOpen, FiDollarSign } from 'react-icons/fi';
// import Input from '../../components/ui/Input';
// import SettingsSection from './SettingsSection';
// import FormSettingField from './FormSettingField';

// const baseInputStyles =
//   'h-[48px] w-full rounded-lg border border-background-200 text-text-800 ' +
//   'focus:border-primary-500 focus:ring-primary-500 ' +
//   'dark:border-background-400 dark:text-text-900';

// function SettingsForm() {
//   return (
//     <Form varinet="settingModal">
//       <div className="flex flex-col gap-6 lg:flex-row">
//         <SettingsSection
//           icon={FiBookOpen}
//           title="Borrowing Rules"
//           iconStyle="bg-primary-100 text-primary-600 dark:bg-primary-800 dark:text-primary-200"
//         >
//           <FormSettingField
//             label="Maximum Borrow Limit"
//             hint="Max number of books a customer can have at once."
//           >
//             <Input type="number" className={baseInputStyles} />
//           </FormSettingField>

//           <FormSettingField
//             label="Pages per Day Ratio"
//             hint="Determines borrowing duration based on book length."
//           >
//             <Input type="number" className={baseInputStyles} />
//           </FormSettingField>
//         </SettingsSection>

//         <SettingsSection
//           icon={FiDollarSign}
//           title="Financial Ratios"
//           iconStyle="bg-accent-100 text-accent-600 dark:bg-accent-800 dark:text-accent-200"
//         >
//           <FormSettingField
//             label="Price-to-Mortgage Ratio"
//             hint="The percentage of the book's price used for mortgage calculation."
//           >
//             <Input
//               type="number"
//               step="0.1"
//               className={`${baseInputStyles} focus:border-accent-500 focus:ring-accent-500`}
//             />
//           </FormSettingField>

//           <FormSettingField label="Late Fee per Day">
//             <div className="relative">
//               <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-400 dark:text-text-600">
//                 $
//               </span>

//               <Input
//                 type="number"
//                 className={`${baseInputStyles} pl-8 focus:border-accent-500 focus:ring-accent-500`}
//               />
//             </div>
//           </FormSettingField>
//         </SettingsSection>
//       </div>
//     </Form>
//   );
// }

// export default SettingsForm;

import { useForm } from 'react-hook-form';
import Form from '../../components/ui/Form';
import { FiBookOpen, FiDollarSign } from 'react-icons/fi';
import Input from '../../components/ui/Input';
import SettingsSection from './SettingsSection';
import FormSettingField from './FormSettingField';
import Button from '../../components/ui/Button';
import { LuSave } from 'react-icons/lu';

const baseInputStyles =
  'h-[48px] w-full rounded-lg border border-background-200 text-text-800 ' +
  'focus:border-primary-500 focus:ring-primary-500 ' +
  'dark:border-background-400 dark:text-text-900';

function SettingsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Settings updated:', data);
  };

  return (
    <Form varinet="settingModal" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Borrowing Rules */}
        <SettingsSection
          icon={FiBookOpen}
          title="Borrowing Rules"
          iconStyle="bg-primary-100 text-primary-600 dark:bg-primary-800 dark:text-primary-200"
        >
          <FormSettingField
            label="Maximum Borrow Limit"
            hint="Max number of books a customer can have at once."
            error={errors?.maxBorrowLimit?.message}
          >
            <Input
              type="number"
              className={baseInputStyles}
              {...register('maxBorrowLimit', {
                required: 'This field is required',
                min: {
                  value: 1,
                  message: 'Must be at least 1',
                },
              })}
            />
          </FormSettingField>

          <FormSettingField
            label="Pages per Day Ratio"
            hint="Determines borrowing duration based on book length."
            error={errors?.pagesPerDay?.message}
          >
            <Input
              type="number"
              className={baseInputStyles}
              {...register('pagesPerDay', {
                required: 'This field is required',
                min: {
                  value: 1,
                  message: 'Must be greater than 0',
                },
              })}
            />
          </FormSettingField>
        </SettingsSection>

        {/* Financial Ratios */}
        <SettingsSection
          icon={FiDollarSign}
          title="Financial Ratios"
          iconStyle="bg-accent-100 text-accent-600 dark:bg-accent-800 dark:text-accent-200"
        >
          <FormSettingField
            label="Price-to-Mortgage Ratio"
            hint="Percentage of book price used for mortgage."
            error={errors?.priceToMortgage?.message}
          >
            <Input
              type="number"
              step="0.1"
              className={`${baseInputStyles} focus:border-accent-500 focus:ring-accent-500`}
              {...register('priceToMortgage', {
                required: 'This field is required',
                min: {
                  value: 0,
                  message: 'Cannot be negative',
                },
              })}
            />
          </FormSettingField>

          <FormSettingField
            label="Late Fee per Day"
            error={errors?.lateFee?.message}
          >
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-400 dark:text-text-600">
                $
              </span>

              <Input
                type="number"
                className={`${baseInputStyles} pl-8 focus:border-accent-500 focus:ring-accent-500`}
                {...register('lateFee', {
                  required: 'This field is required',
                  min: {
                    value: 0,
                    message: 'Cannot be negative',
                  },
                })}
              />
            </div>
          </FormSettingField>
        </SettingsSection>
      </div>

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
    </Form>
  );
}

export default SettingsForm;
