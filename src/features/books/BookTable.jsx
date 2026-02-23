import { useQueryClient } from '@tanstack/react-query';
import Empty from '../../components/ui/Empty';
import Menus from '../../components/ui/Menus';
import Pagination from '../../components/ui/Pagination';
import ScrollWrapper from '../../components/ui/ScrollWrapper';
import Spinner from '../../components/ui/Spinner';
import Table from '../../components/ui/Table';
import BookRow from './BookRow';
import { useBooks } from './useBooks';
import { useEffect } from 'react';
import { getAuthors } from '../../services/apiAuthors';
import { getCategories } from '../../services/apiCategories';

function BookTable() {
  const queryClient = useQueryClient();
  const { books, isLoading, pagination } = useBooks();

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['authors'],
      queryFn: getAuthors,
    });

    queryClient.prefetchQuery({
      queryKey: ['categories'],
      queryFn: getCategories,
    });
  }, [queryClient]);

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
            <Pagination pagination={pagination} />
          </Table.Footer>
        </Table>
      </ScrollWrapper>
    </Menus>
  );
}

export default BookTable;
