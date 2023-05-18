import style from './Card.module.css';
import {Link} from 'react-router-dom';

function Card({id, name, status, species, gender, origin, image, onClose}) {  // estas props vienen de App.js, se le pasan como props a la etiqueta Card, es mejor extraerlas del objeto con {} acá adentro, es más práctico
   return (
      <div className={style.card}>
         <img src={image} alt='' />
         <Link to={`/detail/${id}`} >
            <h1>{name}</h1> 
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <button className={style.closeButton} onClick={()=> onClose(id)}>CLOSE</button>
      </div>
   );
}

export default Card;














// function Card(props) {
//    return (
//       <div>
//          <button onClick={props.onClose}>X</button>
//          <h2>Name: {props.name}</h2> 
//          <h2>Status: {props.status}</h2>
//          <h2>Species: {props.species}</h2>
//          <h2>Gender: {props.gender}</h2>
//          <h2>Origin: {props.origin.name}</h2>
//          <img src={props.image} alt='' />
//       </div>
//    );
// }

// export default Card;