import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import CategoryDetails from './pages/CategoryDetails/CategoryDetails';
import MealDetails from './pages/MealDetails/MealDetails';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:category' element={<CategoryDetails />} />
        <Route path='/meal/:id' element={<MealDetails/>} />
      </Routes>

    </Router>
  );
}

export default App;
