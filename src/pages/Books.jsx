import PageTitle from '../components/ui/PageTitle';
import Row from '../components/ui/Row';
import AddBook from '../features/books/AddBook';
import BookTable from '../features/books/BookTable';
import BookTableOperations from '../features/books/BookTableOperations';

function Books() {
  return (
    <>
      <Row type="horizontal">
        <PageTitle title="Books Management" />
        <BookTableOperations />
      </Row>
      <BookTable />
      <AddBook />
    </>
  );
}

export default Books;
