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
        <div className={style.login}>
            <h3>LOGIN</h3>
            <span>Enter your credentials</span>
            <form className={style.form} onSubmit={submitHandler}>
                {/* <label htmlFor='email'></label> */}
                <input className={errors.email ? style.inputIncorrect : style.inputCorrect} type='text' name='email' placeholder='Email address' value={userData.email} onChange={handleChange}></input>
                <span>{errors.email}</span>
                {/* <label htmlFor='password'></label> */}
                <input type='password' name='password' placeholder ='Password' value={userData.password} onChange={handleChange}></input>
                <span>{errors.password}</span>
                <button className={style.submitButton} type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form;