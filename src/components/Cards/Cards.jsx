import Card from '../Card/Card';
import style from './Cards.module.css';

function Cards({characters}) { // acá van las props que se le pasan en App.js
   return (
   <div className={style.cards}>
      {characters.map(({name, status, species, gender, origin, image}) => {
         return (<Card 
            name = {name} // cada una de estas son las props que se le pasa a cada card, están en el módulo Card
            status = {status}
            species = {species}
            gender = {gender}
            origin = {origin}
            image = {image}
            onClose = {() => window.alert('Emulamos que se cierra la card')}
         /> )
      })}
   </div>
   );
} 

export default Cards;













// import Card from './Card';


// export default function Cards({characters}) {
//    return (
//    <div>
//       {characters.map((character) => {
//          <Card 
//          name = {character.name} // cada una de estas son las props que se le pasa a cada card, están en el módulo Card
//          status = {character.status}
//          species = {character.species}
//          gender = {character.gender}
//          origin = {character.origin}
//          image = {character.image}
//          onClose = {character.onClose}
//          /> 
//       })}
//    </div>
//    );
// } 
