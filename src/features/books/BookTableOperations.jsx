import Filter from '../../components/ui/Filter';
import SearchInput from '../../components/ui/SearchInput';
import TableOperations from '../../components/ui/TableOperations';

function BookTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'available', label: 'Available' },
          { value: 'borrowed', label: 'Borrowed' },
        ]}
      />

      <SearchInput placeholder="Search books..." />
    </TableOperations>
  );
}

export default BookTableOperations;
