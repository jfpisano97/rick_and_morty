import SearchBar from '../SearchBar/SearchBar.jsx';
import style from './Nav.module.css';

function Nav (props){
    return(
        <div className={style.nav}>
         <div className={style.logo}>Ricardo Mort</div>
         <SearchBar onSearch={props.onSearch}/>
      </div>
    )
}

export default Nav;