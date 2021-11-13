import { FC } from 'react';
import MainMenu from './MainMenu';

interface Props {}

const Header: FC<Props> = () => {
  return (
    <header>
      <MainMenu />
    </header>
  );
};

export default Header;
