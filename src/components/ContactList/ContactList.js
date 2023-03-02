import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul>
      {contacts.map((item, id) => (
        <List key={id}>
          <Contact contact={item} />
        </List>
      ))}
    </ul>
  );
};
