import SearchBar from './SearchBar/SearchBar.jsx'
import style from './Nav.module.css';
import {Link} from 'react-router-dom';

function Nav (props){
    return(
        <div className={style.nav}>
            <div className={style.logo}>Ricardo Mort</div>
            <Link to='/about'>
                <button className={style.btns}>About</button>
            </Link>
            <Link to='/cards'>
                <button className={style.btns}>Home</button>
            </Link>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

export default Nav;