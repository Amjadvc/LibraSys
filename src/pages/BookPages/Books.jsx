import PageTitle from "../../components/ui/PageTitle";
import BookTable from "../../features/books/BookTable";

function Books() {
  return (
    <>
      <PageTitle title="All books" />
      <BookTable />
    </>
  );
}

export default Books;
