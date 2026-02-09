import Filter from '../../components/ui/Filter';
import TableOperations from '../../components/ui/TableOperations';

function BookRequestsOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'new', label: 'New' },
          { value: 'read', label: 'Read' },
          { value: 'processed', label: 'Processed' },
          { value: 'rejected', label: 'Rejected' },
        ]}
      />
    </TableOperations>
  );
}

export default BookRequestsOperations;
