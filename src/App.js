import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import Pannel from './components/Pannel.tsx';
import Header from './components/Header.tsx';
import { BrowserRouter } from 'react-router-dom';


const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
        <BrowserRouter>
          <Header />
          <Pannel />
          </BrowserRouter>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
