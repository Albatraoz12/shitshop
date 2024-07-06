import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
