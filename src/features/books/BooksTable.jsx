import ScrollWrapper from "../../components/ui/ScrollWrapper";
import Table from "../../components/ui/Table";

const users = [
  {
    id: 1,
    name: "Ahmed Hassan",
    email: "ahmed.hassan@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Sara Ali",
    email: "sara.ali@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Omar Khaled",
    email: "omar.khaled@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 4,
    name: "Lina Mostafa",
    email: "lina.mostafa@example.com",
    role: "User",
    status: "Pending",
  },
  {
    id: 5,
    name: "Youssef Adel",
    email: "youssef.adel@example.com",
    role: "Admin",
    status: "Active",
  },
];

function BooksTable() {
  return (
    <ScrollWrapper>
      <Table columns="80px 1fr 120px 120px">
        <Table.Header>
          <div>ID</div>
          <div>Name</div>
          <div>Role</div>
          <div>Status</div>
        </Table.Header>

        <Table.Body
          data={users}
          render={(user) => (
            <Table.Row key={user.id}>
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.role}</div>
              <div>{user.status}</div>
            </Table.Row>
          )}
        />

        <Table.Footer>Showing {users.length} users</Table.Footer>
      </Table>
    </ScrollWrapper>
  );
}

export default BooksTable;
