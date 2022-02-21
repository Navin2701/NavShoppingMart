// Name and Password from the register-form
var name = document.getElementById('name');
var pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('name1', name1.value);
    localStorage.setItem('pw', pw.value);
    localStorage.setItem('isLogin', "1");
    localStorage.setItem('isLogout', "2");
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('name1');
    var storedPw = localStorage.getItem('pw');
    var isLogin = localStorage.getItem('isLogin');
    var isLogout = localStorage.getItem('isLogout');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if (userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
        window.location.href = 'index.html';
        // evt.preventDefault();

        // console.log("::::::::::::::login :::"+isLogin.value);
    } else {
        alert('Invalid userId or Password entered!');
    }
}


function logout() {
    localStorage.removeItem('name1');
    localStorage.removeItem('pw');
    localStorage.removeItem('isLogin');
}