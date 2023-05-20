import { useState } from "react";
import validation from './validation.js';
import style from './Form.module.css';


function Form ({login}){

    const [userData, setData] = useState({email:'', password:''});
    const [errors, setErrors] = useState({email:'', password:''});

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setData({...userData,[property]:value})
        validation({...userData,[property]:value}, setErrors, errors);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        alert('Logged in!');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <form className={style.form} onSubmit={submitHandler}>
            <div className={style.login}>
                <label htmlFor='email'>Email</label><input type='text' name='email' value={userData.email} onChange={handleChange}></input>
                <span>{errors.email}</span>
                <label htmlFor='password'>Password</label><input type='text' name='password' value={userData.password} onChange={handleChange}></input>
                <span>{errors.password}</span>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default Form;