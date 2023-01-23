import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddOrder from './components/AddOrder';
import OrderList from './components/OrderList';
import UpdateOrder from './components/UpdateOrder';
import NavBar from './components/NavBar,';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';

function App() {

  return (
    
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<OrderList/>} />
        <Route path="/" element={<OrderList/>} />
        <Route path="/orderList" element={<OrderList/>} />
        <Route path="/addOrder" element={<AddOrder/>} />
        <Route path="/editOrder/:id" element={<UpdateOrder/>} />

        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/signUp" element={<SignUp/>} />

      </Routes> 
    </BrowserRouter>
    
    </>
  );
}

export default App;
