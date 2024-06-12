// import logo from './logo.svg';
// import { useEffect, useRef, useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Layout1 from './layouts/Layout1/Layout1.js';

function App() {


 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout1}>
          {/* <Route index element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
