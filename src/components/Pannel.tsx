import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './Counter.tsx';
import UserForm from './UserForm.tsx';
import RichTextEditor from './RichTextEditor.tsx';
import Header from './Header.tsx';



const queryClient = new QueryClient();
const Pannel = () => {
  return (
    <div>
        
          <Routes>
            {/* <Route path="/" element={<Header />} /> */}
            <Route path="/" element={<Counter />} />
            <Route path="/userform" element={<UserForm />} />
            <Route path="/richtexteditor" element={<RichTextEditor />} />
            {/* <Route path="/authenticate" element={<Authenticate />} />
            <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
      
        {/* <ReactQueryDevtools /> */}
     
  
    </div>
  )
}

export default Pannel