import { HiPencil, HiTrash } from 'react-icons/hi2';
import { useCountry } from '../../hooks/useCountry';
import Modal from '../../components/ui/Modal';
import Table from '../../components/ui/Table';
import ButtonIcon from '../../components/ui/ButtonIcon';
import ConfirmDelete from '../../components/ui/ConfirmDelete';
import CreateAuthorForm from './CreateAuthorForm';
import { useDeleteAuthor } from './useDeleteAuthor';

function AuthorRow({ author: { id, name, birth_date, country } }) {
  const { deleteAuthor, isDeleting } = useDeleteAuthor();

  const { countries } = useCountry();
  const countryMap = countries.reduce((acc, c) => {
    acc[c.label] = c; // key by country name
    return acc;
  }, {});

  return (
    <Table.Row>
      <div className="font-semibold text-text-800">{name}</div>
      <div className="text-[14px] text-text-500">{birth_date}</div>
      <div className="flex items-center gap-2">
        {countryMap[country] && (
          <img
            src={countryMap[country].flag}
            alt={`${country} flag`}
            className="h-[16px] w-[24px] rounded-sm object-cover"
          />
        )}

        <span className="text-[14px] font-semibold text-text-800">
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

        <Modal.Window name="edit" type="form">
          <CreateAuthorForm
            authorToEdit={{
              id,
              name,
              birth_date,
              country,
            }}
          />
        </Modal.Window>

        <Modal.Window name="delete" type="select">
          <ConfirmDelete
            resourceName="author"
            disabled={isDeleting}
            onConfirm={() => deleteAuthor(id)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default AuthorRow;
