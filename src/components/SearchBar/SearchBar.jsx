export default function SearchBar(props) {  // la función onSearch está en props, se pasa por props en App.js, entonces si la quiero usar tengo que hacer props.onSearch
   return (
      <div>
         <input type='search' />
         <button onClick={(id) => {props.onSearch(id)}}>Agregar</button> 
      </div>
   );
}
