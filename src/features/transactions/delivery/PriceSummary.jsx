function PriceSummary({ bookPrice, mortgagePrice, totalPrice }) {
  return (
    <div className="w-full rounded-2xl border border-background-200 bg-background-50 p-5">
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-600">
        Price Summary
      </h4>

      <div className="space-y-3 text-sm">
        <PriceRow label="Book Price" value={bookPrice} />
        <PriceRow label="Mortgage" value={mortgagePrice} />

        <div className="my-2 border-t border-background-200" />

        <PriceRow label="Total" value={totalPrice} isTotal />
      </div>
    </div>
  );
}

function PriceRow({ label, value, isTotal = false }) {
  return (
    <div className="flex items-center justify-between">
      <span
        className={`${isTotal ? 'font-semibold text-text-800' : 'text-text-600'}`}
      >
        {label}
      </span>
      <span
        className={`${isTotal ? 'font-bold text-primary-600' : 'font-medium text-text-800'}`}
      >
        ${value.toFixed(2)}
      </span>
    </div>
  );
}

export default PriceSummary;
