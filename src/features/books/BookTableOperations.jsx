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
      {/* <SortBy
        options={[
          { value: 'startDate-desc', label: 'Sort by date (recent first)' },
          { value: 'startDate-asc', label: 'Sort by date (earlier first)' },
          {
            value: 'totalPrice-desc',
            label: 'Sort by amount (high first)',
          },
          { value: 'totalPrice-asc', label: 'Sort by amount (low first)' },
        ]}
      /> */}

      <SearchInput placeholder="Search books..." />
    </TableOperations>
  );
}

export default BookTableOperations;
