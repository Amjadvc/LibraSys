import { createContext, useContext } from 'react';

const TableContext = createContext();

function Table({ columns, minWidth = 800, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        style={{ minWidth }}
        className="border-background-200 bg-background-50 w-full min-w-[800px] overflow-hidden rounded-[7px] border text-[14px]"
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
      className="bg-background-100 border-background-200 text-text-700 grid items-center gap-x-6 border-b px-6 py-4 text-[14px] font-semibold uppercase tracking-wide"
    >
      {children}
    </div>
  );
}

function TableRow({ children, className }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      role="row"
      style={{ gridTemplateColumns: columns }}
      className={`border-background-200 hover:bg-background-100 grid cursor-pointer items-center gap-x-6 border-b px-6 py-3 transition-colors duration-200 last:border-b-0 ${className}`}
    >
      {children}
    </div>
  );
}

function TableBody({ data, render }) {
  if (!data.length) {
    return (
      <p className="text-text-500 my-6 text-center text-base font-medium">
        No data to show at the moment
      </p>
    );
  }

  return <div className="my-1">{data.map(render)}</div>;
}

function TableFooter({ children }) {
  if (!children) return null;

  return (
    <footer className="bg-background-100 flex justify-center px-4 py-3">
      {children}
    </footer>
  );
}
Table.Header = TableHeader;
Table.Row = TableRow;
Table.Body = TableBody;
Table.Footer = TableFooter;

export default Table;
