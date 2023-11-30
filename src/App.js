import './App.css';
import './styles/items.css'
import Products from './Components/products/Products.js';
import Header from './Components/layout/Header.js';
import SubHeader from './Components/layout/SubHeader.js';
import {Route, Routes} from 'react-router-dom'
import NotFound from './Components/NotFound.js';
// import { useState } from 'react';

function App() {

  return (
    <>
   <Header/>
   <SubHeader />
   <Routes>
        <Route path="/404" exact
         element={<NotFound/>}
        />
      
        <Route path="/:category?" exact
          element={<Products/>}
        />
      </Routes>
    {/* <Products/> */}
   </>
  );
  }
export default App;
