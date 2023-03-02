import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { Button } from 'components/Contact/Contact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { postContact } from '../../redux/operations';
import { getContacts } from 'redux/selectors';

export const Form = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
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
      return;
    }
    e.preventDefault();

    dispatch(postContact({name, phone}));
    reset();
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
          <p>name</p>
          <input
            onChange={onHandlerChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <p>Number</p>
          <input
            onChange={onHandlerChange}
            type="tel"
            name="number"
            value={phone}
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
