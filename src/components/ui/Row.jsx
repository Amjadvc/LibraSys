import clsx from 'clsx';

function Row({ children, type = 'virtical', columnBreakpoint = 'md' }) {
  return (
    <div
      className={clsx(
        'flex',
        type === 'virtical' && 'flex-col gap-6',
        type === 'virtical-sm' && 'flex-col gap-2',

        type === 'horizontal' && 'items-center justify-between',

        columnBreakpoint === 'md' && 'max-md:flex-col max-md:gap-8',
        columnBreakpoint === 'lg' && 'max-lg:flex-col max-lg:gap-8',
        columnBreakpoint === 'xl' && 'max-xl:flex-col max-xl:gap-8',
      )}
    >
      {children}
    </div>
  );
}

export default Row;
