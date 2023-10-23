import { useDispatch, useSelector } from 'react-redux';
import { ContactWrap, ContactItem, ContactColect } from './ContactList.style';

import {
  deleteContact,
  fetchContacts,
} from 'components/redux/contacts.jsx/operations';
import { filterUser } from 'components/redux/contacts.jsx/selectors';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterUser);
  const onDelete = user => {
    dispatch(deleteContact(user));
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ContactWrap>
      <ContactColect>
        {filter.map(({ id, name, number }) => (
          <ContactItem key={id}>
            {name}: <span>{number}</span>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </ContactItem>
        ))}
      </ContactColect>
    </ContactWrap>
  );
};
