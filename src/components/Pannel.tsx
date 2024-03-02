import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './Counter.tsx';
import UserForm from './UserForm.tsx';
import RichTextEditor from './RichTextEditor.tsx';
const Pannel = () => {
  return (
    <div>
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/userform" element={<UserForm />} />
            <Route path="/richtexteditor" element={<RichTextEditor />} />
        
          </Routes>
    </div>
  )
}

export default Pannel