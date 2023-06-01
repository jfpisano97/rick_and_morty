import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import style from './Favorites.module.css';
import { orderCards, filterCards } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function Favorites(props){
    
    const dispatch = useDispatch();
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true);
    };
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };

    const [aux, setAux] = useState(false);

    return(
        <div>
            <div>
                <select onChange={handleOrder}>
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
                
                {props.myFavorites.map(({id, name, status, species, gender, origin, image}) => {
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

const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites,
    };
};


export default connect(mapStateToProps, null)(Favorites);