import { HiPencil, HiTrash } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';
import Menus from '../../components/ui/Menus';
import Table from '../../components/ui/Table';
import Modal from '../../components/ui/Modal';
import ConfirmDelete from '../../components/ui/ConfirmDelete';
import StatusBadge from './StatusBadge';
import EditBook from './EditBook';

function BookRow({
  book: { id: bookId, ISBN, title, cover, category, price, mortgage, status },
}) {
  return (
    <Table.Row className="hover:bg-gray-50">
      <div>
        <img
          src={cover || '/placeholder-book.png'}
          alt={title}
          className="border-background-200 h-12 w-20 rounded border object-cover"
        />
      </div>
      <div className="text-text-800 font-medium">{title}</div>
      <div className="text-text-600">{category.name}</div>
      <div className="text-accent-500">{formatCurrency(price)}</div>
      <div className="text-accent-400">{formatCurrency(mortgage)}</div>
      <div>
        <StatusBadge status={status} />
      </div>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookId} />
          <Menus.List id={bookId}>
            <Modal.Open opens="edit">
              <Menus.Button
                icon={<HiPencil className="text-accent-500" />}
                className="hover:bg-accent-50 text-accent-500"
              >
                Edit
              </Menus.Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Menus.Button
                icon={<HiTrash className="text-accent-500" />}
                className="hover:bg-accent-50 text-accent-500"
              >
                Delete
              </Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete" type="select">
          <ConfirmDelete resourceName="books" />
        </Modal.Window>
        <Modal.Window name="edit" type="form">
          <EditBook />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookRow;
