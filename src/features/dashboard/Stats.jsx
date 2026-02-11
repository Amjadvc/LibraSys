import Stat from './Stat';
import {
  HiBookOpen,
  HiUsers,
  HiClock,
  HiExclamationCircle,
} from 'react-icons/hi2';

function Stats({ books, members }) {
  const totalBooks = books.length;
  const activeMembers = members.filter((member) => member.active).length;
  const overdueBooks = books.filter((book) => book.status === 'overdue').length;
  const borrowedBooks = books.filter(
    (book) => book.status === 'borrowed',
  ).length;

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4">
      <Stat
        title="Total Books"
        value={totalBooks}
        color="bg-blue-500 text-blue-500"
        icon={HiBookOpen}
      />
      <Stat
        title="Active Members"
        value={activeMembers}
        color="bg-emerald-500 text-emerald-500"
        icon={HiUsers}
      />
      <Stat
        title="Borrowed Books"
        value={borrowedBooks}
        color="bg-amber-500 text-amber-500"
        icon={HiClock}
      />
      <Stat
        title="Overdue Books"
        value={overdueBooks}
        color="bg-red-500 text-red-500"
        icon={HiExclamationCircle}
      />
    </div>
  );
}

export default Stats;
