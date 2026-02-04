import ScrollWrapper from '../../components/ui/ScrollWrapper';
import Table from '../../components/ui/Table';
import AuthorRow from './authorRow';
import { authors } from './data/author';

function AuthorTable() {
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
