import { RegisterForm } from 'components/Phonebook/RegisterForm';
import { Helmet } from 'react-helmet';
export default function Register() {
  return (
    <div>
      <Helmet>
        <titele>Registration</titele>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
