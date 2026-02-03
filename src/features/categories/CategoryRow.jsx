import Modal from '../../components/ui/Modal';
import Table from '../../components/ui/Table';
import ButtonIcon from '../../components/ui/ButtonIcon';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import ConfirmDelete from '../../components/ui/ConfirmDelete';
import EditCategory from './EditCategory';

function CategoryRow({ category: { name, image } }) {
  return (
    <Table.Row>
      <div className="font-medium text-text-800">{name}</div>

      <Modal>
        <div className="center flex gap-5">
          <Modal.Open opens="edit">
            <ButtonIcon>
              <HiPencil className="h-4 w-4 text-primary-500 transition-all duration-150 hover:text-primary-600" />
            </ButtonIcon>
          </Modal.Open>
          <Modal.Open opens="delete">
            <ButtonIcon>
              <HiTrash className="h-4 w-4 text-accent-500 transition-all duration-150 hover:text-accent-600" />
            </ButtonIcon>
          </Modal.Open>
        </div>

        <Modal.Window name="edit" type="form">
          <EditCategory />
        </Modal.Window>

        <Modal.Window name="delete" type="select">
          <ConfirmDelete resourceName="category" />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default CategoryRow;
