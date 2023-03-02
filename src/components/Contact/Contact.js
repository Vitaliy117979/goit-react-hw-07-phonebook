import { Button, Info } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
export const Contact = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const hendleDeleteContact = () => {
    console.log(id);
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Info>
        {name}: {phone}
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
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
