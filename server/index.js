const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require('cookie-session');
const passport = require("passport");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
const morgan = require("morgan")
const fs = require('fs')
const cors = require('cors')



/** Express App start */
const app = express();


require('./models/user')
require('./services/passport')
const keys = require('./config/keys')
// const authRoutes = require('./routes/authRoute')

/**Importing routes */
const postRoutes = require('./routes/post')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

//apiDocs
// app.get('/', (req,res)=>{
//   fs.readFile('docs/apiDocs.json', (err, data)=>{
//     if(err){
//       res.status(400).json({
//         error: err
//       })
//     }
//     const docs = JSON.parse(data)
//     res.json(docs)
//   })
// })

/** Connect Mongo DB */
mongoose.connect(keys.mongoURI, {})
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB Error => ", err));





/** Middleware - Morgan - devopment lib - sec */
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
app.use(cors())
//middleware Routes
app.use('/', postRoutes)
app.use('/', authRoutes)
app.use('/', userRoutes)




//middleware - express jwt - procted route
app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
      res.status(401).json({error : "unauthorised!"});
    } else {
      next(err);
    }
  });


//cookie setup
app.use(
    cookieSession({
        maxAge : 30*24*60*60*1000,
        keys : [keys.cookieKey]
    })
)



//cookie intialization
app.use(passport.initialize());
app.use(passport.session());




/** Routes */
//authRoutes(app); //Refactor the code
require('./routes/authRoute')(app)




//Production Routes
if(process.env.NODE_ENV === 'production'){
    //Express will serve the build assets - main.js/css
    app.use(express.static('client2/build'));

    //Express will serve index.html if it dosnt recoganise the route
    const path = require('path');
    app.get( '*', (req,res)=>{
        res.send(path.resolve(__dirname, 'client2', 'build','index.html'))
    })
}

const PORT =  process.env.PORT || 5000
app.listen(PORT,()=>{console.log(`A node js API is listening on port : 5000`)})