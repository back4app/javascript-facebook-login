function logIn() {
    Parse.FacebookUtils.logIn("public_profile,email", {
        success: function(user) {
            if (!user.existed()) {
                alert("User signed up and logged in through Facebook!");

                FB.api('/me?fields=id,name,email,permissions', function (response) {

                    console.log(response);
                    console.log(user.attributes);
                    user.set('username', response.name);
                    user.set('email', response.email);
                    console.log(user.attributes);
                    user.save(null, {
                        success: function (user) {
                            alert('New object created with username: ' + user.username + " and email: " + user.email);
                        },
                        error: function(user, error) {
                            alert('Failed to create new object, with error code: ' + error.message);
                        }
                    });

                    alert("You're registered and logged with via Facebook!");
                });
            } else {
                alert("User logged in through Facebook!");
            }
            // You should redirect the user to another page after a successful login.
            window.location.replace('http://js-fb-login.back4app.io/logout.html');
        },
        error: function(user, error) {
            console.log("User cancelled the Facebook login or did not fully authorize.");
        }
    });
}
