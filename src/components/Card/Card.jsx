import style from './Card.module.css';

function Card({name, status, species, gender, origin, image, onClose}) {  // estas props vienen de App.js, se le pasan como props a la etiqueta Card, es mejor extraerlas del objeto con {} acá adentro, es más práctico
   return (
      <div className={style.card}>
         <h1>{name}</h1> 
         <img src={image} alt='' />
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <button onClick={onClose}>X</button>
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