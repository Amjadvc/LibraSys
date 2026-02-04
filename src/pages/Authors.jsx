import PageTitle from '../components/ui/PageTitle';
import AddAuthor from '../features/authors/AddAuthor';
import AuthorTable from '../features/authors/authorTable';

function Authors() {
  return (
    <>
      <PageTitle title="Authors" />
      <AuthorTable />
      <AddAuthor />
    </>
  );
}

export default Authors;
