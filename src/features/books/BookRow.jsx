import { HiEye, HiPencil, HiTrash } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';
import Menus from '../../components/ui/Menus';
import Table from '../../components/ui/Table';
import Modal from '../../components/ui/Modal';
import ConfirmDelete from '../../components/ui/ConfirmDelete';
import { useNavigate } from 'react-router-dom';
import EditBookForm from './EditBookForm';
import StatusBadge from '../../components/ui/StatusBadge';

function BookRow({
  book: { id: bookId, title, cover, category, price, mortgage, status },
}) {
  const navigate = useNavigate();
  return (
    <Table.Row className="hover:bg-50">
      <div>
        <img
          src={cover || '/placeholder-book.png'}
          alt={title}
          onError={(e) => {
            e.currentTarget.onerror = null; // prevent looping
            e.currentTarget.src = '/placeholder-book.png';
          }}
          className="h-12 w-20 rounded border border-background-200 object-cover"
        />
      </div>
      <div className="font-medium text-text-800">{title}</div>
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
            <Menus.Button
              icon={<HiEye className="text-accent-500" />}
              className="text-accent-500 hover:bg-accent-50"
              onClick={() => navigate(`${bookId}`)}
            >
              See Details
            </Menus.Button>
            <Modal.Open opens="edit">
              <Menus.Button
                icon={<HiPencil className="text-accent-500" />}
                className="text-accent-500 hover:bg-accent-50"
              >
                Edit
              </Menus.Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Menus.Button
                icon={<HiTrash className="text-accent-500" />}
                className="text-accent-500 hover:bg-accent-50"
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
          <EditBookForm />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookRow;
