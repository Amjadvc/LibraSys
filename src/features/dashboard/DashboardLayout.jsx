import { books } from './data/dashboard.mock';
import { members } from './data/dashboard.mock';
import Stats from './Stats';

function DashboardLayout() {
  return (
    <div className="mt-4 flex flex-col gap-6">
      <Stats books={books} members={members} />
    </div>
  );
}

export default DashboardLayout;
