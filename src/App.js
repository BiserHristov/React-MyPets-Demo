import { Routes, Route, useParams } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import Categories from './components/Categories/Categories';
import PetDetails from './components/Pet/PetDetails';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Categories />} >
          <Route path='categories/:category' element={<Categories />} />
        </Route>
        <Route path='pets/details/:petId' element={<PetDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
