import Form from '../../components/ui/Form';
import { FiBookOpen, FiDollarSign } from 'react-icons/fi';
import Input from '../../components/ui/Input';

function SettingsForm() {
  return (
    <Form varinet="settingModal" className="flex gap-6">
      {/* Borrowing Rules */}
      <section className="w-1/2 rounded-2xl border border-background-200 bg-background-50 p-6 shadow-sm dark:border-background-300">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-800 dark:text-primary-200">
            <FiBookOpen />
          </div>
          <h2 className="text-lg font-bold text-text-800 dark:text-text-900">
            Borrowing Rules
          </h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-text-700 dark:text-text-800">
              Maximum Borrow Limit
            </label>

            <Input
              type="number"
              className="h-[48px] w-full rounded-lg border border-background-200 text-text-800 focus:border-primary-500 focus:ring-primary-500 dark:border-background-400 dark:text-text-900"
            />

            <p className="mt-2 text-xs text-text-400 dark:text-text-600">
              Max number of books a customer can have at once.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-text-700 dark:text-text-800">
              Pages per Day Ratio
            </label>

            <Input
              type="number"
              className="h-[48px] w-full rounded-lg border border-background-200 text-text-800 focus:border-primary-500 focus:ring-primary-500 dark:border-background-400 dark:text-text-900"
            />

            <p className="mt-2 text-xs text-text-400 dark:text-text-600">
              Determines borrowing duration based on book length.
            </p>
          </div>
        </div>
      </section>

      {/* Financial */}
      <section className="w-1/2 rounded-2xl border border-background-200 bg-background-50 p-6 shadow-sm dark:border-background-300">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-100 text-accent-600 dark:bg-accent-800 dark:text-accent-200">
            <FiDollarSign />
          </div>
          <h2 className="text-lg font-bold text-text-800 dark:text-text-900">
            Financial Ratios
          </h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-text-700 dark:text-text-800">
              Price-to-Mortgage Ratio
            </label>

            <Input
              type="number"
              step="0.1"
              className="h-[48px] w-full rounded-lg border border-background-200 text-text-800 focus:border-accent-500 focus:ring-accent-500 dark:border-background-400 dark:text-text-900"
            />

            <p className="mt-2 text-xs text-text-400 dark:text-text-600">
              The percentage of the book's price used for mortgage calculation.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-text-700 dark:text-text-800">
              Late Fee per Day
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-400 dark:text-text-600">
                $
              </span>

              <Input
                type="number"
                className="h-[48px] w-full rounded-lg border border-background-200 pl-8 text-text-800 focus:border-accent-500 focus:ring-accent-500 dark:border-background-400 dark:text-text-900"
              />
            </div>
          </div>
        </div>
      </section>
    </Form>
  );
}

export default SettingsForm;
