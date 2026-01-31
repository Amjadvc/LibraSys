import Menus from "../../components/ui/Menus";
import Pagination from "../../components/ui/Pagination";
import ScrollWrapper from "../../components/ui/ScrollWrapper";
import Table from "../../components/ui/Table";
import BookRow from "./BookRow";
import { books } from "./data/books";

function BookTable() {
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
            <Pagination count={100} />
          </Table.Footer>
        </Table>
      </ScrollWrapper>
    </Menus>
  );
}

export default BookTable;
