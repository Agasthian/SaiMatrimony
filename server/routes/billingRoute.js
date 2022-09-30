const keys = require('../config/keys');
const requireLogin = require('../middleware/requireLogin')
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
    app.post('/api/stripe', requireLogin, async(req,res)=> {
        //Stripe Logic to handle the token from front end ends up here
        console.log('req.body', req.body);
        const charge = await stripe.charges.create({
            amount:500,
            currency:'usd',
            description:'Rs.500 for 5 credits',
            source:req.body.id
        })

        // // console.log('charge', charge);
        //Logic for adding the cedits to the user model - mongoose

        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    })
}