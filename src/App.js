import { Routes, Route, useParams } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import Categories from './components/Categories/Categories';
import All from './components/Categories/CategoryElements/All';
import Cats from './components/Categories/CategoryElements/Cats';
import Dogs from './components/Categories/CategoryElements/Dogs';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Categories />} >
          <Route path='categories/:category' element={<Categories />} />
          {/* <Route path='categories/cats' element={<Cats />} />
          <Route path='categories/dogs' element={<Dogs />} /> */}
        </Route>
      </Routes>
      <h1>Hello World!!!!</h1>
      <Footer />
    </div>
  );
}

export default App;
