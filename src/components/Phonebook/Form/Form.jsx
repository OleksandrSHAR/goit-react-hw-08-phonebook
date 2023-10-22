import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormikWrap, FormWrap, ButForm, FormTitel } from './Form.styles';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'components/redux/contacts.jsx/selectors';
import { addContact } from 'components/redux/contacts.jsx/operations';
const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name must not contain characters'
    )
    .required(''),
  phone: Yup.string()
    .min(5, 'Too short  phone')
    .max(10, 'Too long phone')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Must have only numbers'
    )
    .required(''),
  contacts: Yup.array(),
});

export const Forms = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContacts);
  const onSubmit = ({ name, phone }) => {
    if (
      contact.find(contact => contact.phone === phone || contact.name === name)
    ) {
      toast.error('This contact already exists');
      return;
    }
    const newContacts = { name, phone };
    dispatch(addContact(newContacts));
    console.log(newContacts);
  };

  return (
    <FormikWrap>
      <Formik
        validationSchema={validationSchema}
        onSubmit={(value, actions) => {
          onSubmit(value);
          actions.resetForm();
        }}
        initialValues={{
          name: '',
          phone: '',
        }}
      >
        <Form>
          <FormWrap>
            <FormTitel>Name</FormTitel>
            <Field
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="p" />
            <FormTitel>Number</FormTitel>
            <Field
              type="tel"
              name="phone"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="phone" component="p" />
            <ButForm type="submit">Add contact</ButForm>
          </FormWrap>
        </Form>
      </Formik>
    </FormikWrap>
  );
};
