const passport = require('passport');

module.exports = (app) => {

    //Route

    //Google O-auth Route-  callback
    app.get('/auth/google', passport.authenticate('google', {scope: ['profile','email']}))

    //2nd Express route to handle callback from google
    app.get('/auth/google/callback',
        passport.authenticate('google') ,
        (req,res)=> {
            res.redirect('/dash')
        }
    );

    // FaceBook O-auth Route
    app.get('/auth/facebook', passport.authenticate('facebook'));

    app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/dash');
        
    });

    
    //To check the current user after login
    app.get('/api/current_user', (req, res)=> {
        res.send(req.user);
    })

    //To make the user logout
    app.get('/api/logout', (req,res)=>{
        req.logout();
        res.redirect('/');
    })
 
}

