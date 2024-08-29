import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import CategoryDetails from './pages/CategoryDetails/CategoryDetails';
import Layout from './components/Layout';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout><Home/></Layout>}/>
        <Route path='/category/:category' element={<Layout><CategoryDetails/></Layout>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
