import { ChakraProvider } from '@chakra-ui/react';

const AppProviders: React.FC = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default AppProviders;
