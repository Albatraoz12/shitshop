import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './compoment/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <h2>Hello World</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
