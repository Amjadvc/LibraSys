import Empty from '../../components/ui/Empty';
import ScrollWrapper from '../../components/ui/ScrollWrapper';
import Spinner from '../../components/ui/Spinner';
import Table from '../../components/ui/Table';
import AuthorRow from './AuthorRow';
import { useAuthors } from './useAuthors';

function AuthorTable() {
  const { authors, isLoading } = useAuthors();

  if (isLoading) return <Spinner title="authors" />;

  if (!authors.length) return <Empty resourceName="authors" />;

  return (
    <ScrollWrapper>
      <Table columns="2fr 2fr 2fr 1fr" minWidth={700}>
        <Table.Header>
          <div>Name</div>
          <div>Birth Date</div>
          <div>Country</div>
          <div>doing</div>
        </Table.Header>

        <Table.Body
          data={authors}
          render={(author) => <AuthorRow key={author.id} author={author} />}
        />
      </Table>
    </ScrollWrapper>
  );
}

export default AuthorTable;
