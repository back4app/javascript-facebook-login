function logOutWithFacebook() {
    Parse.User.logOut();
    alert('User logged out of Facebook!');
    window.location.replace('http://js-fb-login.back4app.io');
}
