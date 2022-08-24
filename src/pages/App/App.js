import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import Home from './Home/Home'
import SongList from './SongList/SongList';
import Shows from './Shows/Shows';
import Contact from './Contact/Contact';

function App() {
  return (
    <main className="App">
      <NavBar /><br />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shows' element={<Shows />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/songlist' element={<SongList />} />
      </Routes>
    </main>
  );
}

export default App;
