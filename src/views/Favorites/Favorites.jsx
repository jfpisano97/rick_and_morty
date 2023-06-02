import Card from '../../components/Card/Card';
import style from './Favorites.module.css';
import { orderCards, filterCards } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';



function Favorites(props){
    
    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites);
    const [aux, setAux] = useState(false);
    const [orderValue, setOrderValue] = useState('Default');

    const handleOrder = (event) => {
        event.preventDefault()
        dispatch(orderCards(event.target.value));
        setOrderValue(event.target.value);
        if (aux === false) setAux(true);
        else setAux (false);
    };
    const handleFilter = (event) => {
        event.preventDefault()
        dispatch(filterCards(event.target.value))
    };


    return(
        <div>
            <div className={style.selection}>
                <select value={orderValue} onChange={handleOrder}>
                    <option disabled value='Default'>...</option>
                    <option value='A'>Ascendent order</option>
                    <option value='D'>Descendent order</option>
                </select>
                <select onChange={handleFilter}>
                    <option value='All'>All</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>unknown</option>
                </select>
            </div>
            <div className={style.favs}>
                
                {myFavorites.length === 0 ? (<h2>Add your favorite characters</h2>) : myFavorites.map(({id, name, status, species, gender, origin, image}) => {
                    return (<Card 
                        id = {id}
                        name = {name}
                        status = {status}
                        species = {species}
                        gender = {gender}
                        origin = {origin}
                        image = {image}
                        onClose = {props.onClose}
                    />)
                })}
            </div>
        </div>
    )
}

export default Favorites;



// con el hook  { useSelector } from 'react-redux' - Reemplazas mapStateToProps

// const mapStateToProps = (state) => {
//     return {
//        myFavorites: state.myFavorites,
//     };
// };

// con el hook  { useDispatch } from 'react-redux' - Reemplazas mapDispatchToProps

// const mapDispatchToProps = (dispatch) => {
//     return {
//        addFav: (props) => {
//           dispatch(addFav(props));
//        },
//        removeFav: (id) => {
//           dispatch(removeFav(id));   
//        },
//     };
//  };

// entonces ya no es necesario usar connect:

// export default connect(mapStateToProps, null)(Favorites);
