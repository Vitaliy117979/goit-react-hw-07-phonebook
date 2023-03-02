import { Button, Info } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const hendleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Info>
        {name}: {number}
      </Info>
      <Button type="button" className="TodoList__btn" onClick={hendleDeleteContact}>
        Удалить
      </Button>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
