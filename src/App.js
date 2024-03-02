// src/App.tsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
// import Counter from './components/Counter.tsx';
// import UserForm from './components/UserForm.tsx';
// import RichTextEditor from './components/RichTextEditor.tsx';
// import HomePage from './components/HomePage.tsx';
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
