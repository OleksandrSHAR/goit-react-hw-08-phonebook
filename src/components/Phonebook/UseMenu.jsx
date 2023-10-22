import { logOut } from 'components/redux/auth/operations';
import { useAuth } from 'components/useAuth';
import { useDispatch } from 'react-redux';

export const UseMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <>
      <p>{user.email}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </>
  );
};
