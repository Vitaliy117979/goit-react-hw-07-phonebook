import { Form } from 'components/Form/Form';
import { ContactList } from './ContactList/ContactList';
import { MainWrapper } from './MainWrapper.styled';
import { Filter } from './Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch, } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainWrapper>
      <Toaster position="top-right" reverseOrder={false} />

      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
  
      <ContactList />
    </MainWrapper>
  );
};
