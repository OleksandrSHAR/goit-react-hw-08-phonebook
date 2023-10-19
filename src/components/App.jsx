import { Forms } from './Phonebook/Form/Form';
import { ContactList } from './Phonebook/Contactlist/ContactList';
import { Filter } from './Phonebook/Filter/Filter';
import { GlobalStyle } from 'components/GlobalStyle';
import { Wrap, Titel } from './App.style';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from './redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Wrap>
      <Titel>Phonebook</Titel>
      <Forms />
      <Titel>Contacts</Titel>
      {isLoading && !error && <div>Loading...</div>}
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Wrap>
  );
};
