Parse.initialize("zZDEmui7pdP0E59SkOgzFLNbwOPOrRZyoKKmuUNC", "YmgskGGdJ6itfoR3f6ZLFvi6WlaCjsuRWZwi6oPO");
Parse.serverURL = "https://parseapi.back4app.com/";

// Initing the SDK
window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({
        appId      : '2002678963393082',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.11'
    });

    // Put here code to run after the Facebook SDK is loaded.
};

// Including the Facebook SDK
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=2002678963393082';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
