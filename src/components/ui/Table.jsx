import { createContext, useContext } from 'react';

const TableContext = createContext();

function Table({ columns, minWidth = 800, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        style={{ minWidth }}
        className="w-full overflow-hidden rounded-[7px] border border-background-200 bg-white text-[14px] dark:bg-background-50"
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
      className="grid items-center gap-x-6 border-b border-background-200 bg-background-50 px-6 py-6 text-[14px] font-semibold uppercase tracking-wide text-text-700 dark:bg-background-100"
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
      className={`grid items-center gap-x-6 border-b border-background-200 px-6 py-5 transition-colors duration-200 last:border-b-0 ${className}`}
    >
      {children}
    </div>
  );
}

function TableBody({ data, render }) {
  if (!data.length) {
    return (
      <p className="my-6 text-center text-base font-medium text-text-500">
        No data to show at the moment
      </p>
    );
  }

  return <div className="my-1">{data.map(render)}</div>;
}

function TableFooter({ children }) {
  if (!children) return null;

  return (
    <footer className="flex justify-center bg-background-50 px-4 py-5 dark:bg-background-100">
      {children}
    </footer>
  );
}
Table.Header = TableHeader;
Table.Row = TableRow;
Table.Body = TableBody;
Table.Footer = TableFooter;

export default Table;
