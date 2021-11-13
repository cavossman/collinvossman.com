import { FC } from 'react';
import AppProviders from '../context/AppProviders';
import Header from './Header';
import Footer from './Footer';

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <AppProviders>
      <Header />
      {children}
      <Footer />
    </AppProviders>
  );
};

export default Layout;
