import style from './App.module.css';
import Nav from './components/Nav/Nav.jsx';
import Favorites from './views/Favorites/Favorites.jsx';
import Cards from './views/Cards/Cards.jsx';
import About from './views/About/About.jsx';
import Detail from './views/Detail/Detail.jsx';
import Form from './views/Form/Form.jsx';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {

   // para probar el login;
   const [access, setAccess] = useState(false);
   const myEmail = 'login@gmail.com';
   const myPass = 'login';
   const navigate = useNavigate();

   function login(userData) {
      if (userData.password === myPass && userData.email === myEmail) {
         setAccess(true);
         navigate('/cards');
      } else {
         if (userData.email === '' || userData.password === '') return alert('Please enter an email and a password');
         else return alert('Email or password incorrect');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   // para probar el logout
   function logout (){
      setAccess(false);
      // navigate('/');
   }


   const location = useLocation();
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
         };
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
   };

   function onClose(id){
      let newCharacters = characters.filter((element)=>{
         if (element.id !== parseInt(id)){
            return true;
         } else {
            return false;
         }
      })
      setCharacters([...newCharacters]);
   };

   return (
      <div className={style.App}>
         {location.pathname !== '/' && <Nav logout={logout} onSearch={onSearch}/>}
         <Routes>

            <Route path='/' element={<Form login={login}/>} />

            <Route path='/cards' element={<Cards characters={characters} onClose={onClose}/>} /> 
            
            <Route path='/about' element={<About />} />

            <Route path='/favorites' element={<Favorites onClose={onClose}/>} />

            <Route path='/cards/detail/:id' element={<Detail />} />
         
         </Routes>
      </div>
   )
}

export default App;
