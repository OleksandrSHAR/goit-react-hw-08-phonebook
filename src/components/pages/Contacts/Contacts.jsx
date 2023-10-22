import { ContactList } from 'components/Phonebook/Contactlist/ContactList';
import { Filter } from 'components/Phonebook/Filter/Filter';
import { Forms } from 'components/Phonebook/Form/Form';
import { Wrap, Titel } from '../../App.style';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
} from 'components/redux/contacts.jsx/selectors';
export const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Wrap>
      <Titel>Phonebook</Titel>
      <Forms />
      <Titel>Contacts</Titel>
      {isLoading && !error && <div>Loading...</div>}
      <Filter />
      <ContactList />
    </Wrap>
  );
};
