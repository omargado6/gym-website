import { Box } from '@mui/material';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Exercisedetails from './pages/Exercisedetails';


function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<Exercisedetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
