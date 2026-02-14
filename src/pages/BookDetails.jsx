import { useParams, useNavigate } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';
import { books } from '../features/books/data/books';
import StatusBadge from '../components/ui/StatusBadge';
import Button from '../components/ui/Button';
import PageTitle from '../components/ui/PageTitle';
import Row from '../components/ui/Row';
 
function Stat({ label, value, accent }) {
  return (
    <div className="rounded-xl border border-background-200 bg-background-100 p-4">
      <p className="text-xs uppercase tracking-wide text-text-500">{label}</p>
      <p
        className={`mt-1 text-lg font-semibold ${
          accent ? 'text-accent-500' : 'text-text-800'
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function BookCover({ title, cover }) {
  return (
    <div className="flex rounded-2xl border border-background-200 bg-background-50 p-2 shadow-sm">
      <img
        src={cover || '/placeholder-book.png'}
        alt={title}
        className="h-auto max-h-[300px] w-full rounded-xl shadow-md transition hover:scale-[1.02] sm:max-h-full"
      />
    </div>
  );
}

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find((b) => String(b.id) === id);

  if (!book) {
    return <div className="p-6 text-text-600">Book not found</div>;
  }

  const {
    title,
    ISBN,
    cover,
    category,
    authors,
    price,
    mortgage,
    pages,
    loanDuration,
    publishedAt,
    status,
    totalCopies,
    remainingCopies,
  } = book;

  return (
    <div className="space-y-8">
      <Row type="horizontal">
        <PageTitle title="Book Details" />
        <Button
          variant="secondary"
          customStyle="text-text-500"
          onClick={() => navigate(-1)}
        >
          <HiArrowLeft />
          Back
        </Button>
      </Row>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
        <BookCover title={title} cover={cover} />

        <div className="rounded-2xl border border-background-200 bg-background-50 p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold text-text-800">{title}</h2>
              <p className="text-sm text-text-500">ISBN: {ISBN}</p>
              <p className="text-sm text-text-500">Category: {category.name}</p>
              <p className="text-sm text-text-500">
                By {authors.map((a) => a.name).join(', ')}
              </p>
            </div>

            <StatusBadge status={status} />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Stat label="Published" value={publishedAt} />
            <Stat label="Pages" value={pages} />
            <Stat label="Loan duration" value={`${loanDuration} days`} />
            <Stat label="Price" value={`${price} $`} accent />
            <Stat label="Mortgage" value={`${mortgage} $`} accent />
            <Stat
              label="Availability"
              value={`${remainingCopies} / ${totalCopies}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
