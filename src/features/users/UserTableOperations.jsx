import SearchInput from '../../components/ui/SearchInput';
import TableOperations from '../../components/ui/TableOperations';
import SortBy from '../../components/ui/SortBy';

function UserTableOperations() {
  return (
    <TableOperations>
      <SortBy
        options={[
          { value: 'startDate-desc', label: 'Sort by date (recent first)' },
          { value: 'startDate-asc', label: 'Sort by date (earlier first)' },
          {
            value: 'totalPrice-desc',
            label: 'Sort by amount (high first)',
          },
          { value: 'totalPrice-asc', label: 'Sort by amount (low first)' },
        ]}
      />

      <SearchInput placeholder="Search books..." />
    </TableOperations>
  );
}

export default UserTableOperations;
