import { useAuth } from 'components/useAuth';
import { Navigation } from './Navigation';
import { UseMenu } from './UseMenu';
import { AuthNav } from './AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UseMenu /> : <AuthNav />}
    </header>
  );
};
