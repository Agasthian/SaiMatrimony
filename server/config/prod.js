//Prod.js - Production variables

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret :process.env.GOOGLE_CLIENT_SECRET,
    facebookAppID:process.env.FACEBOOK_APP_ID,
    facebookAppSecret:process.env.FACEBOOK_APP_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey:process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey:process.env.STRIPE_SECRET_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN,
    jwtSecret: process.env.JWT_SECRET,
}