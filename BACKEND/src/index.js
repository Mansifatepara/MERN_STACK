import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import Img from './Img';
import Home from './Home';
import GetAllStudent from './Students/GetAllStudent';
import GetStudentByID from './Students/GetStudentByID';
import AddStudent from './Students/AddStudent';
import EditStudent from './Students/EditStudent';
import GetAllFaculty from './Faculties/GetAllFaculty';
import GetFacultyByID from './Faculties/GetFacultyByID';
import AddFaculty from './Faculties/AddFaculty';
import Contact from './Contact';


import { BrowserRouter, Routes , Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
        <Route index element={<Img/>} />
          <Route path='/home' element={ <Home /> } />
          <Route path='/students' element={<GetAllStudent/>}/>
          <Route path='/students/:id' element={<GetStudentByID/>} />
          <Route path='/AddStudent' element={<AddStudent/>} />
          <Route path='/EditStudent' element={<EditStudent/>} />
          <Route path="/faculties" element={ <GetAllFaculty /> } />
          <Route path="/faculties/:id" element={<GetFacultyByID/>} />
          <Route path="/AddFaculty" element={<AddFaculty/>} />
          <Route path="/contactus" element={ <Contact /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);