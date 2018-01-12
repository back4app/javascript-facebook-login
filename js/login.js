function logIn() {
    Parse.FacebookUtils.logIn("public_profile,email", {
        success: function(user) {
            if (!user.existed()) {
                FB.api('/me?fields=id,name,email,permissions', function (response) {
                    user.set('username', response.name);
                    user.set('email', response.email);

                    user.save(null, {
                        success: function(user) {
                            alert('User logged in and sign up through Facebook, with username: ' + user.get('username') + ' and email: ' + user.get('email'));

                            // You should redirect the user to another page after a successful login.
                            window.location.replace('http://js-fb-login.back4app.io/logout.html');
                        },
                        error: function(user, error) {
                            alert('Failed to save user to database with error: ' + error.message);
                        }
                    });
                });
            } else {
                alert("User logged in through Facebook!");
                // You should redirect the user to another page after a successful login.
                window.location.replace('http://js-fb-login.back4app.io/logout.html');
            }
        },
        error: function(user, error) {
            console.log("User cancelled the Facebook login or did not fully authorize.");
        }
    });
}
