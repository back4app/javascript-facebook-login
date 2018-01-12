function logOutWithFacebook() {
    console.log("On the logout function");
    Parse.User.logOut();
    window.location.replace('http://js-fb-login.back4app.io');
}
