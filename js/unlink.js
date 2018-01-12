function unlink() {
    var user = Parse.User.current();
    Parse.FacebookUtils.unlink(user, {
        success: function(user) {
            alert("The user is no longer associated with their Facebook account.");
        }
    });
}
