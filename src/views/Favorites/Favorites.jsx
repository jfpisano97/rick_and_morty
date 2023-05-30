import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import style from './Favorites.module.css';
import { orderCards, filterCards } from '../../redux/actions';
import { useDispatch } from 'react-redux';


function Favorites(props){
    
    const dispatch = useDispatch();
    const handleOrder = () => {
        dispatch(orderCards())
    };
    const handleFilter = () => {
        dispatch(filterCards())
    };


    return(
        <div>
            <div>
                <select>
                    <option value='A'>Ascendent order</option>
                    <option value='D'>Descendent order</option>
                </select>
                <select>
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