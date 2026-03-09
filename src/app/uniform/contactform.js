"use strict";


const contactForm = () => {
    
    const form = document.querySelector("form");
    const fullName = document.getElementById("fullname");
    const emailAddress = document.getElementById("email");
    const userMessage = document.getElementById("message");

    //! FORM inputs validation
    const validateInputs = () => {
        const inputs = document.querySelectorAll(".input");
    
        for ( const input of inputs ) { // loop inputs
            
            if ( input.value.trim() == "") {
                input.classList.add("error"); // display error
                input.parentElement.classList.add("error");
            }
        
            if ( inputs[1].value != "") { // "1" because the email is at the 1 index
                validateEmail(); // validate email
            }
        
            inputs[1].addEventListener( "keyup", () => { // if user starts typing ....
                validateEmail(); // validate the email field as he types
            } );
            
            input.addEventListener( "keyup", () => {
                if ( input.value != "" ) { // if input field is not empty ....
                    input.classList.remove("error"); // remove error
                    input.parentElement.classList.remove("error");
                } else {
                    input.classList.add("error");
                    input.parentElement.classList.add("error");
                }
            } );
        }
    };

    //! Email Validation
    const validateEmail = () => {
        const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        const emailErrorText = document.querySelector(".errortext.email");
    
        if ( !emailAddress.value.match(emailRegex) ) { // if email address entered by user does not match email regex ...
            emailAddress.classList.add("error"); // display error
            emailAddress.parentElement.classList.add("error");
        
            if ( emailAddress.value != "" ) {
                emailErrorText.innerText = "Please enter a valid email address.";
            } else {
                emailErrorText.innerText = "Can't be blank!";
            }
        } else {
            emailAddress.classList.remove("error");
            emailAddress.parentElement.classList.remove("error");
        }
    };

    //! submit FORM event
    form.addEventListener( "submit", e => {
        e.preventDefault();
        validateInputs();
    
        if ( !fullName.classList.contains("error") && !emailAddress.classList.contains("error") && !userMessage.classList.contains("error") ) { // there are no errors ....
            e.target.submit();
            form.reset(); // and reset the form
            return false;
        }
    } );

};

export default contactForm;