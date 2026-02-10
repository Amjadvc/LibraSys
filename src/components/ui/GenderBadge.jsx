import clsx from 'clsx';
function GenderBadge({ gender }) {
  return (
    <span
      className={clsx(
        'inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium',
        gender === 'M'
          ? 'bg-blue-100 text-blue-700'
          : 'bg-pink-100 text-pink-700',
      )}
    >
      {gender}
    </span>
  );
}

export default GenderBadge;
