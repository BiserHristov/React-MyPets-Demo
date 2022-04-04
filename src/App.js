import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetCard/PetDetails';
import DemoPage from './components/Demo';
import CreatePet from './components/CreatePet/CreatePet';
import EditPetDetails from './components/EditPetDetails/EditPetDetails';
import EditPet from './components/EditPet/EditPet';
import Login from './components/Login/Login';

import firebase from './utils/firebase'
import './App.css';
import Logout from './Logout/Logout';
import Register from './components/Register/Register';
import { useEffect, useState } from 'react';
import CustomErrorBoundry from './components/CustomErrorBoundry/CustomErrorBoundry';

function App() {
  console.log(process.env.NODE_ENV);
  console.log(process.env.PORT);
  const [user, setUser] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, [])

  // const authInfo = {
  //   isAuthenticated: Boolean(user),
  //   email: user.email
  // }

  return (
    <div className="container">
      <Header email={user?.email} isAuthenticated={Boolean(user)} />
      <h1>Email: {user?.email}</h1>
      <CustomErrorBoundry>
        <Routes>
          <Route path='/' element={<Categories />} >
            <Route path='categories/:category' element={<Categories />} />
          </Route>
          <Route path='pets/:petId/details' element={<PetDetails />} />
          <Route path='pets/:petId/edit' element={<EditPetDetails />} />
          <Route path='pets/details/:petId/edit' element={<EditPet />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
          <Route path='register' element={<Register />} />


          <Route path='pets/create' element={<CreatePet />} />


          <Route path='demo' element={<DemoPage />} />

        </Routes>
      </CustomErrorBoundry>
      <Footer />
    </div>
  );
}

export default App;
