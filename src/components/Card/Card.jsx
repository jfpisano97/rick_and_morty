import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';


function Card(props) {   
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props)
      } 
   };

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);   
   
   const handleOnClose = () => {
      props.onClose(props.id)
      props.removeFav(props.id);      
   }

   return (
      <div className={style.card}>
         <img src={props.image} alt='' />
         <Link to={`/cards/detail/${props.id}`} >
            <button>{props.name}</button> 
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
         <div className={style.favAndClose}>
            {isFav ? (<button className={style.favButton} onClick={handleFavorite}>❤️</button>) : (<button className={style.favButton} onClick={handleFavorite}>🤍</button>)}
            <button className={style.closeButton} onClick={()=> handleOnClose(props.id)}>X</button>
         </div>
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
      addFav: (props) => {
         dispatch(addFav(props));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));   
      },
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(Card);





























// function Card(props) {   
   
//    const [isFav, setIsFav] = useState(false);
   
//    const handleFavorite = () => {
//       if (isFav === true){
//          setIsFav(false);
//          props.removeFav(props.id);
//       }
//       if (isFav === false){
//          setIsFav(true);
//          props.addFav(props)
//       } 
//    };

//    useEffect(() => {
//       props.myFavorites.forEach((fav) => {
//          if (fav.id === props.id) {
//             setIsFav(true);
//          }
//       });
//    }, [props.myFavorites]);   
   
//    return (
//       <div className={style.card}>
//          { isFav ? (
//          <button onClick={handleFavorite}>❤️</button>
//          ) : (
//          <button onClick={handleFavorite}>🤍</button>
//          )}
//          <img src={props.image} alt='' />
//          <Link to={`/cards/detail/${props.id}`} >
//             <button>{props.name}</button> 
//          </Link>
//          <h2>{props.status}</h2>
//          <h2>{props.species}</h2>
//          <h2>{props.gender}</h2>
//          <h2>{props.origin.name}</h2>
//          <button className={style.closeButton} onClick={()=> props.onClose(props.id)}>CLOSE</button>
//       </div>
//    )
// }


// const mapStateToProps = (state) => {
//    return {
//       myFavorites: state.myFavorites,
//    };
// };

// const mapDispatchToProps = (dispatch) => {
//    return {
//       addFav: (props) => {
//          dispatch(addFav(props));
//       },
//       removeFav: (id) => {
//          dispatch(removeFav(id));   
//       },
//    };
// };


// export default connect(mapStateToProps, mapDispatchToProps)(Card);
