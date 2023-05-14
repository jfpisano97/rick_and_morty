import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import {useState} from 'react';
import axios from 'axios';

function App() {
   const [characters,setCharacters] = useState([]);



   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {   
         if (data.name) {
            for (let i=0; i < characters.length; i++){
               if (characters[i].id === data.id){
                  return window.alert('Repetido');
               }
            }
            setCharacters((oldChars) => [...oldChars, data]);
            } else {
            window.alert('¡No hay personajes con este ID!');
         }
      
         // if (data.name) {
         //    const characterExists = characters.find((character) => character.id === data.id);
         //    if (characterExists) {
         //      window.alert('Repetido');
         //    } else {
         //      setCharacters((oldChars) => [...oldChars, data]);
         //    }
         //  } else {
         //    window.alert('¡No hay personajes con este ID!');
         //  }
      });
   }

   function onClose(id){
      let newCharacters = characters.filter((element)=>{
         if (element.id !== parseInt(id)){
            return true;
         } else {
            return false;
         }
      })
      setCharacters([...newCharacters]);
   }

   return (
      <div className={style.App}>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
