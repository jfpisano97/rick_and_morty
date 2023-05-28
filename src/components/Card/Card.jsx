import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';


function Card({id, name, status, species, gender, origin, image, onClose, removeFav, addFav, myFavorites}) {   
   
   const [isFav, setIsFav] = useState(false);
   
   const handleFavorite = () => {
      if (isFav === true){
         setIsFav(false);
         removeFav(id);
      }
      if (isFav === false){
         setIsFav(true);
         addFav(id)
      } 
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   
   return (
      <div className={style.card}>
         { isFav ? (
         <button onClick={handleFavorite}>❤️</button>
         ) : (
         <button onClick={handleFavorite}>🤍</button>
         )}
         <img src={image} alt='' />
         <Link to={`/cards/detail/${id}`} >
            <button>{name}</button> 
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin.name}</h2>
         <button className={style.closeButton} onClick={()=> onClose(id)}>CLOSE</button>
      </div>
   )
}


const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (id) => {
         dispatch(addFav(id));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));   
      },
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(Card);