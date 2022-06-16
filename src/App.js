
import { Route ,Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import ExerciseDetail from './Pages/ExerciseDetail/ExerciseDetail';
import {Box} from '@mui/material';

function App() {
  return (
      <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
