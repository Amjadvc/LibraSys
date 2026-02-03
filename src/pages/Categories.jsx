import PageTitle from '../components/ui/PageTitle';
import AddCategory from '../features/categories/AddCategory';
import CategoryTable from '../features/categories/CategoryTable';

function Categories() {
  return (
    <>
      <PageTitle title="Categories" />
      <CategoryTable />
      <AddCategory />
    </>
  );
}

export default Categories;
