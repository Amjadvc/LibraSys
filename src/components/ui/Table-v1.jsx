export function Table({ minWidth = 800, children }) {
  return (
    <div
      role="table"
      style={{ minWidth }}
      className="w-full rounded-[7px] border border-gray-200 bg-white text-[14px]"
    >
      {children}
    </div>
  );
}

export function TableHeader({ columns, children }) {
  return (
    <div
      role="row"
      style={{ gridTemplateColumns: columns }}
      className="grid items-center gap-x-6 border-b border-gray-200 bg-gray-50 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-600"
    >
      {children}
    </div>
  );
}

export function TableRow({ columns, children }) {
  return (
    <div
      role="row"
      style={{ gridTemplateColumns: columns }}
      className="grid items-center gap-x-6 border-b border-gray-100 px-6 py-3 last:border-b-0"
    >
      {children}
    </div>
  );
}

export function TableBody({ data, render }) {
  if (!data.length) {
    return (
      <p className="my-6 text-center text-base font-medium text-gray-500">
        No data to show at the moment
      </p>
    );
  }

  return <div className="my-1">{data.map(render)}</div>;
}

export function TableFooter({ children }) {
  if (!children) return null;

  return (
    <footer className="flex justify-center bg-gray-50 px-4 py-3">
      {children}
    </footer>
  );
}

// use it
// <Table minWidth={800}>
//       <TableHeader columns="1fr 2fr 1fr 1fr">
//         <div>ID</div>
//         <div>Name</div>
//         <div>Status</div>
//         <div></div>
//       </TableHeader>

//       <TableBody
//         data={users}
//         render={(user) => (
//           <TableRow key={user.id} columns="1fr 2fr 1fr 1fr">
//             <div>{user.id}</div>
//             <div>{user.name}</div>
//             <div>{user.status}</div>
//           </TableRow>
//         )}
//       />

//       <TableFooter>
//         <span>Pagination here</span>
//       </TableFooter>
//     </Table>
