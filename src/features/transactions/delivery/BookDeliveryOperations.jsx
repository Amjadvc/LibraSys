import Filter from '../../../components/ui/Filter';
import TableOperations from '../../../components/ui/TableOperations';

function BookDeliveryOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'reserved', label: 'Reserved' },
          { value: 'collected', label: 'Collected' },
        ]}
      />
    </TableOperations>
  );
}

export default BookDeliveryOperations;
