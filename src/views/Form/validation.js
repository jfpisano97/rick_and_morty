function validation(userData, setErrors, errors){
    // email validation;
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/;
    if (!userData.email){
        setErrors({...errors, email: 'Empty email'});
    } else if (validEmail.test(userData.email)) {
        setErrors({...errors, email:''});
    } else {
        setErrors({...errors, email: 'Invalid email'});
    };

    // password validation:
    // const containsNumber = () => {
    //     for (let character in userData.password){
    //         if (typeof character == 'number') return true;
    //         else return false;
    //     }
    // }   

    // if (!userData.password) {
    //     setErrors({...errors, password: 'Empty password'});
    // } else if (containsNumber === false) {
    //     setErrors({...errors, password: 'Password must contain at least one number'});
    // } else {
    //     setErrors({...errors, password:''});
    // }

};

export default validation;