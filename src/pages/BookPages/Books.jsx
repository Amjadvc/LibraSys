import PageTitle from "../../components/ui/PageTitle";
import BooksTable from "../../features/books/BooksTable";

function Books() {
  return (
    <>
      <PageTitle title="All books" />
      <BooksTable />
    </>
  );
}

export default Books;
