import PageTitle from "../../components/ui/PageTitle";
import Row from "../../components/ui/Row";
import BookTable from "../../features/books/BookTable";
import BookTableOperations from "../../features/books/BookTableOperations";

function Books() {
  return (
    <>
      <Row type="horizontal">
        <PageTitle title="All books" />
        <BookTableOperations />
      </Row>

      <BookTable />
    </>
  );
}

export default Books;
