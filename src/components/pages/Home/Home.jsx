import { useAuth } from 'components/useAuth';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      {isLoggedIn ? (
        <span> Welcome</span>
      ) : (
        <span>
          You are not logged in. If you want to continue, log in to an existing
          account or create a new account
        </span>
      )}
    </div>
  );
};
export default Home;
