import clsx from 'clsx';
import Table from '../../components/ui/Table';

function UserRow({ user }) {
  return (
    <Table.Row className="hover:bg-50">
      <div className="px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-10 w-10 rounded-full bg-slate-100 object-cover"
          />
          <div>
            <p className="font-medium text-slate-900">{user.name}</p>
            <p className="text-slate-500">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 text-slate-600">{user.phone}</div>
      <div className="px-6 py-4 text-slate-600">
        <span
          className={clsx(
            'inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium',
            user.gender === 'M'
              ? 'bg-blue-100 text-blue-700'
              : 'bg-pink-100 text-pink-700',
          )}
        >
          {user.gender}
        </span>
      </div>
      <div className="px-6 py-4 text-slate-600">{user.dob}</div>
      <div className="px-6 py-4 text-slate-600">{user.joinDate}</div>

      <div className="px-6 py-4">
        <span
          className={clsx(
            'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
            user.status === 'Active'
              ? 'bg-green-100 text-green-700'
              : 'bg-slate-100 text-slate-700',
          )}
        >
          {user.status}
        </span>
      </div>
    </Table.Row>
  );
}

export default UserRow;
