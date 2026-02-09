import SearchInput from '../../../components/ui/SearchInput';
import TableOperations from '../../../components/ui/TableOperations';

function BookTerminateOperations() {
  return (
    <TableOperations>
      <SearchInput placeholder="Search by book, customer, or TR-ID..." />
    </TableOperations>
  );
}

export default BookTerminateOperations;
