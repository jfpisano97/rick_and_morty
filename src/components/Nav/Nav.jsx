import SearchBar from './SearchBar/SearchBar.jsx'
import style from './Nav.module.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';



function Nav ({logout, onSearch}){
    return(
        <div className={style.nav}>
            <div className={style.logo}>Ricardo Mort</div>
            <Link to='/about'>
                <button className={style.btns}>About</button>
            </Link>
            <Link to='/cards'>
                <button className={style.btns}>Home</button>
            </Link>

            <button className={style.btns} onClick={logout}>Logout</button>

            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;