






function link() {
    console.log("On the link function");

    var user = Parse.User.current();
    if (!Parse.FacebookUtils.isLinked(user)) {
        Parse.FacebookUtils.link(user, null, {
            success: function(user) {
                alert("Woohoo, user logged in with Facebook!");
            },
            error: function(user, error) {
                alert("User cancelled the Facebook login or did not fully authorize.");
            }
        });
    }
    else {
        alert("Can't link user to facebook because he is already linked");
    }
}

function unlink() {
    console.log("On the unlink function");

    var user = Parse.User.current();
    Parse.FacebookUtils.unlink(user, {
        success: function(user) {
            alert("The user is no longer associated with their Facebook account.");
        }
    });
}
