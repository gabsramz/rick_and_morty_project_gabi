import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '346bbb82a40c.a0a4020d096570d090f4';


function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character =>
      character.id !== Number(id))
      setCharacters(charactersFiltered)
   }


   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose} /> } />
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
