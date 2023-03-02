import { Form } from 'components/Form/Form';
import { ContactList } from './ContactList/ContactList';
import { MainWrapper } from './MainWrapper.styled';
import { Filter } from './Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError)

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
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </MainWrapper>
  );
};
