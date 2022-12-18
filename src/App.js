import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ForgotPassword from './components/ForgotPassword';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import Home from './components/Home';
import SearchBar from './Dashboard/SearchBar';
import NewUSer from './Dashboard/NewUSer';
import UpdateUser from './Dashboard/UpdateUser';
import Offering from './Dashboard/Offering';
import DeleteUser from './Dashboard/DeleteUser';
import ChurchSearchBar from './Dashboard/ChurchSearcBar';
import Afrancho from './churches/AfranchoPage';
import AfranchoOfferingPage from './churches/AfranchoOfferingPage';
import ContactPage from './Dashboard/ContactPage';
import SMSForm from './Dashboard/SMSForm';
import EmailForm from './Dashboard/EmailForm';

class App extends React.Component {


 render(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}> </Route>
        <Route path="register" element={<Register />}> </Route>
        <Route path="reset" element={<ForgotPassword />}> </Route>
        <Route path="admin" element={<Home />}> </Route>
        <Route path="search" element={<SearchBar />}> </Route>
        <Route path="search_church" element={<ChurchSearchBar />}> </Route>
        <Route path="new_user" element={<NewUSer />}> </Route>
        <Route path="update_user" element={<UpdateUser />}> </Route>
        <Route path="delete_user" element={<DeleteUser />}> </Route>
        <Route path="offering" element={<Offering />}> </Route>
        <Route path="Afrancho_offering" element={<AfranchoOfferingPage />}> </Route>
        <Route path="Afrancho" element={<Afrancho />}> </Route>
        <Route path="contact" element={<ContactPage />}> </Route>
        <Route path="message" element={<SMSForm/>}> </Route>
        <Route path="/send_mail" element={<EmailForm />}> </Route>
      </Routes>
    </BrowserRouter>
  );

 }
}

export default App;
