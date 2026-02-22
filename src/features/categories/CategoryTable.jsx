import Empty from '../../components/ui/Empty';
import ScrollWrapper from '../../components/ui/ScrollWrapper';
import Spinner from '../../components/ui/Spinner';
import Table from '../../components/ui/Table';
import CategoryRow from './CategoryRow';
import { useCategories } from './useCategories';

function CategoryTable() {
  const { categories, isLoading } = useCategories();

  if (isLoading) return <Spinner title="categories" />;

  if (!categories.length) return <Empty resourceName="categories" />;

  return (
    <ScrollWrapper>
      <Table columns="2fr 2fr 1fr" minWidth={500}>
        <Table.Header>
          <div>Name</div>
          <div>books count</div>
          <div>actions</div>
        </Table.Header>

        <Table.Body
          data={categories}
          render={(category) => (
            <CategoryRow key={category.id} category={category} />
          )}
        />
      </Table>
    </ScrollWrapper>
  );
}

export default CategoryTable;
