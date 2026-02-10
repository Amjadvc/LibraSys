import Table from '../../components/ui/Table';
import StatusBadge from '../books/StatusBadge';
import GenderBadge from '../../components/ui/GenderBadge';
import Avatar from '../../components/ui/Avatar';

function UserRow({ user }) {
  return (
    <Table.Row className="hover:bg-50">
      <div className="flex items-center gap-3">
        <Avatar src={user.avatar} alt={user.name} />
        <div>
          <p className="font-medium text-text-950">{user.name}</p>
          <p className="text-slate-500">{user.email}</p>
        </div>
      </div>

      <div className="text-text-600">{user.phone}</div>
      <GenderBadge gender={user.gender} />
      <div className="text-slate-600 dark:text-secondary-800">{user.dob}</div>
      <div className="text-slate-600 dark:text-secondary-800">
        {user.joinDate}
      </div>

      <StatusBadge status={user.status.toLowerCase()} />
    </Table.Row>
  );
}

export default UserRow;
