import style from './Detail.module.css'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useState} from 'react';
import {useEffect} from 'react';



function Detail(){

    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
            }
        });
        return setCharacter({});
    }, [id]);

    return(
        <div className={style.container}>
            <div className={style.detail}>
                <h1>{character.name}</h1> 
                <h2>{character.status}</h2>
                <h2>{character.species}</h2>
                <h2>{character.gender}</h2>
                {/* {character.origin.name !== undefined && <h2>{character.origin.name}</h2>} */}
                {/* <h2>{character.origin.name}</h2> */}
            </div>
            <div className={style.detail}>
                <img src={character.image} alt='' />
            </div>
        </div>
    )
}

export default Detail;