const email = document.querySelector('.email');//email input box
const pwordInput = document.querySelector('.password');//password input box
const emailError = document.querySelector('.what');//error msg for email
const pwordError = document.querySelector('.whatp');//error msg for password
const btn = document.querySelector('.login-btn');//login button 
const form = document.querySelector('#form'); //form tag
const submitError = document.querySelector('.submitError')
// console.log(input)

//email validation
email.onblur = function() {
    console.log(email.value)

    // console.log(event.target.value)
    let content = email.value;

    if (content.includes("@") === false) {
        emailError.textContent = 'Email format not supported'
        email.classList.add('invalid')
    }
    // else if(content.includes("eve.holt@reqres.in")=== false) {
    //     emailError.textContent = 'User not found'
    //     email.classList.add('invalid')
    // }

    // else if ( pwordText.includes("cityslicka")=== false) {
    //     pwordError.textContent = 'Invalid password'
    //     input.classList.add('invalid') }
    // else{alert('email okay!')}
    
}
email.onfocus = function() {
    if(this.classList.contains('invalid')) {
        email.classList.remove('invalid')
        emailError.textContent = ""
    }
}


//password validation
let password = pwordInput.value
pwordInput.onblur = function(event) {
    let pass = event.target.value;
    if (pass.length < 8)    {
        pwordError.textContent = "minimum password length is 8 characters";
    }
}
pwordInput.onfocus = function() {
    if(this.classList.contains('invalid')) {
        pwordInput.classList.remove('invalid')
        pwordError.textContent = ""
    }
}

//Login btn validation
 const validateDetails = (e) => {
    e.preventDefault();
    const loginUrl = 'https://reqres.in/api/login';
    fetch(loginUrl, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: pwordInput.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "===========");
        if (res.token) {
          window.open("index.html");
        } else {
          return (submitError.textContent = "user not found");
        }
        // if(res.error)   {
        //      submitError.textContent = res.error;
        // }
      })
      .catch((e) => console.log(e));
 }
 
 btn.addEventListener('click', validateDetails)


 