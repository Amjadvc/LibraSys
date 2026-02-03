import Menus from '../../components/ui/Menus';
import ScrollWrapper from '../../components/ui/ScrollWrapper';
import Table from '../../components/ui/Table';
import CategoryRow from './CategoryRow';
import { categories } from './data/category';

function CategoryTable() {
  return (
    <Menus>
      <ScrollWrapper>
        <Table columns="4fr 1fr" minWidth={500}>
          <Table.Header>
            <div>Name</div>
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
    </Menus>
  );
}

export default CategoryTable;
