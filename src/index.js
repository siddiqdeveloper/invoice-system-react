import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './pages/Layout';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AddInvoice from './pages/AddInvoice';
import ListInvoice from './pages/ListInvoice';
import Dashbaord from './pages/Dashbaord';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={  <Layout />}>

          <Route index element={ <AddInvoice/>}></Route>
          <Route path='/invoice-list' element={ <ListInvoice/>}></Route>
          <Route path='/dashboard' element={ <Dashbaord/>}></Route>


        </Route>
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);

