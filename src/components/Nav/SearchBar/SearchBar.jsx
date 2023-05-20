import style from './SearchBar.module.css';
import {useState} from 'react';

function SearchBar(props) {  // la función onSearch está en props, se pasa por props en App.js, entonces si la quiero usar tengo que hacer props.onSearch
   
   const [id, setId] = useState('');

   function handleChange(event){
      return setId(event.target.value)
   }
   
   return (
         <div className={style.search}>
            <input className ={style.input} type='search' onChange={handleChange} /> 
            <button className={style.addButton} onClick={()=>{props.onSearch(id)}}>Add</button> 
         </div>
   )


}

export default SearchBar;