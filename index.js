const form = document.getElementById ('form') ;
const email = document.getElementById ('email') ;


form.addEventListener ('submit', e=> {

    e.preventDefault ();
    validatInputs ();
})



const setError = (element, message) => {
    const usermail = element.parentElement ;
    const errorDisplay = usermail.querySelector ('.error') ;

    errorDisplay.innerText = message ;
    usermail.classList.add ('error') ;
    usermail.classList.remove ('success') ;
}


const setSuccess = (element) => {
    const usermail = element.parentElement ;
    const errorDisplay = usermail.querySelector ('.error') ;

    errorDisplay.innerText = '' ;
    usermail.classList.remove ('error') ;
    usermail.classList.add ('success') ; 
}



const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const validatInputs = () => {
    const emailValue = email.value.trim () ;
    const email2Value = email2.value.trim () ;

    if(emailValue === '') {
        setError (email, 'this field is required') ;
    }
    else if (!isValidEmail(emailValue)) {
        setError (email, 'please check your email');
    }
    else {
        setSuccess (email) ;
    }



    if(email2Value === '') {
        setError (email2, 'this field is required' ) ;
    }
    else if (!isValidEmail(email2Value)) {
        setError (email2, 'please check your email');
    }
    else {
        setSuccess (email2) ; 
    }


}





