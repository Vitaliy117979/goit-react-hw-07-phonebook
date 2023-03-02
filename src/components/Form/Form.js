import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { Button } from 'components/Contact/Contact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selectors';
export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onHandlerChange = event => {
    const { name, value } = event.target;
    console.log(event);

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const notify = () => toast(`Sorry, ${name} is already in contacts.`);
  const onHandleSubmit = e => {
    if (contacts.some(contact => contact.name === name)) {
     notify(name);
     return
    }
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    reset();
    dispatch(addContact(contact));
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <form onSubmit={onHandleSubmit}>
        <label>
          <p>Name</p>
          <input
            onChange={onHandlerChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <p>Number</p>
          <input
            onChange={onHandlerChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button type="submit">Add contact</Button>
      </form>
    </>
  );
};
