import { createContext, useContext } from "react";

const TableContext = createContext();

function Table({ columns, minWidth = 800, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        style={{ minWidth }}
        className="w-full min-w-[800px] overflow-hidden rounded-[7px] border border-gray-200 bg-white text-[14px]"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function TableHeader({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      style={{ gridTemplateColumns: columns }}
      className="grid items-center gap-x-6 border-b border-gray-200 bg-[#e2d7c8] px-6 py-4 text-[14px] font-semibold uppercase tracking-wide text-[#4b5563]"
    >
      {children}
    </div>
  );
}

function TableRow({ children }) {
  const { columns } = useContext(TableContext);

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

function TableBody({ data, render }) {
  if (!data.length) {
    return (
      <p className="my-6 text-center text-base font-medium text-gray-500">
        No data to show at the moment
      </p>
    );
  }

  return <div className="my-1">{data.map(render)}</div>;
}

function TableFooter({ children }) {
  if (!children) return null;

  return (
    <footer className="flex justify-center bg-[#e2d7c8] px-4 py-3">
      {children}
    </footer>
  );
}
Table.Header = TableHeader;
Table.Row = TableRow;
Table.Body = TableBody;
Table.Footer = TableFooter;

export default Table;
