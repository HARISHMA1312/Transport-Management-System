import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SaveBook from './pages/SaveBook';
import ErrorPage from './pages/ErrorPage';
import Front from './pages/Front';
import Register from './pages/Register'; // Import the Register component
import './components/Front.css';
import './components/Register.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Front />} />
        <Route path='/register' element={<Register />} /> 
        <Route path='/home' element={<Home />} />
        <Route path='/save' element={<SaveBook />} />
        <Route path='/save/:id' element={<SaveBook />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
