import { useContext } from 'react';
import AuthContext from '../contexts/Auth';
import AppRoutes from './App';
import AuthRoutes from './Auth';

const Routes: React.FC = function () {
  const {logged} = useContext(AuthContext);

  return logged ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;