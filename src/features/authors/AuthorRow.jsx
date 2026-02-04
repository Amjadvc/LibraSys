import { HiPencil, HiTrash } from 'react-icons/hi2';
import Modal from '../../components/ui/Modal';
import Table from '../../components/ui/Table';
import ButtonIcon from '../../components/ui/ButtonIcon';
import ConfirmDelete from '../../components/ui/ConfirmDelete';
import CreateAuthorForm from './CreateAuthorForm';

function AuthorRow({ author: { name, birth_date, country } }) {
  return (
    <Table.Row>
      <div className="font-semibold text-text-800">{name}</div>
      <div className="text-[14px] text-text-500">{birth_date}</div>
      <div>
        <span className="inline-flex items-center rounded-full bg-background-200 px-3 py-[2px] text-[13px] font-medium text-text-700">
          {country}
        </span>
      </div>

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

        <Modal.Window name="edit" type="smallForm">
          <CreateAuthorForm />
        </Modal.Window>

        <Modal.Window name="delete" type="select">
          <ConfirmDelete resourceName="author" />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default AuthorRow;
