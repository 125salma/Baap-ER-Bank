document.getElementById('login-submit').addEventListener('click',function(){
    //get user email
    const EmailField = document.getElementById('user-email');
    const userEmail =EmailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
 //get check password
    if(userEmail=='bani@gmail.com' && userPassword=='secret'){
        window.location.href='banking.html';
    }

})
