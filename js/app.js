//login request function sent to api

function login(){
    axios.request({
        method: "POST",
        url: "https://reqres.in/api/login",
        headers : {
            'Content-type':'application/json'
        },
        data:{
            email: document.getElementById('username').value,
            password: document.getElementById('password').value
        }
    }).then(loginSuccess).catch(loginFail);
}

function loginSuccess(response){
    console.log(response.data);
    Cookies.set('sessionToken', response.data.token);
    window.open("home.html") //directs to open to home.html upon login success
}

function loginFail(error){
    console.log(error);
    document.getElementById('loginResult').innerText="Error, failed to login";
}
//event listener for the login button
document.getElementById('loginSubmit').addEventListener('click', login);

