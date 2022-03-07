import { Routes, Route, useParams } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetCard/PetDetails';
import DemoPage from './components/Demo';
import CreatePet from './components/CreatePet/CreatePet';
import EditPetDetails from './components/EditPetDetails/EditPetDetails';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Categories />} >
          <Route path='categories/:category' element={<Categories />} />
        </Route>
        <Route path='pets/:petId/details' element={<PetDetails />} />
        <Route path='pets/:petId/edit' element={<EditPetDetails />} />
        <Route path='pets/create' element={<CreatePet />} />


        <Route path='demo' element={<DemoPage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
