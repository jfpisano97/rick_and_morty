import style from './SearchBar.module.css';

export default function SearchBar(props) {  // la función onSearch está en props, se pasa por props en App.js, entonces si la quiero usar tengo que hacer props.onSearch
   return (
      <div>
         <input className ={style.input} type='search' /> 
         <button className={style.addButton} onClick={(id) => {props.onSearch(id)}}>Add</button> 
      </div>
   );
}
