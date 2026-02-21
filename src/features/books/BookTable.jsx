import Empty from '../../components/ui/Empty';
import Menus from '../../components/ui/Menus';
import Pagination from '../../components/ui/Pagination';
import ScrollWrapper from '../../components/ui/ScrollWrapper';
import Spinner from '../../components/ui/Spinner';
import Table from '../../components/ui/Table';
import BookRow from './BookRow';
// import { books } from './data/books';
import { useBooks } from './useBooks';

function BookTable() {
  const { books, isLoading, total } = useBooks();
  console.log(books);

  if (isLoading) return <Spinner title="books" />;

  if (!books.length) return <Empty resourceName="books" />;

  return (
    <Menus>
      <ScrollWrapper>
        <Table columns="100px 3fr 1.5fr 1fr 1fr 1fr 50px">
          <Table.Header>
            <div>cover</div>
            <div>title</div>
            <div>category</div>
            <div>price</div>
            <div>mortgage</div>
            <div>status</div>
            <div></div>
          </Table.Header>

          <Table.Body
            data={books}
            render={(book) => <BookRow key={book.id} book={book} />}
          />

          <Table.Footer>
            <Pagination count={total} />
          </Table.Footer>
        </Table>
      </ScrollWrapper>
    </Menus>
  );
}

export default BookTable;
