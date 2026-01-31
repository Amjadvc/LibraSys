import Filter from "../../components/ui/Filter";
import SearchInput from "../../components/ui/SearchInput";
import SortBy from "../../components/ui/SortBy";
import TableOperations from "../../components/ui/TableOperations";

function BookTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
      />

      {/* <SearchInput placeholder="Search guests..." /> */}
    </TableOperations>
  );
}

export default BookTableOperations;
