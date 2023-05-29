import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import style from './Favorites.module.css';

function Favorites(props){


    return(
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
    )
}

const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites,
    };
};


export default connect(mapStateToProps, null)(Favorites);