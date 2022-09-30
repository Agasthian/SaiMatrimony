//https://express-validator.github.io/docs/5.3.1/

exports.createPostValidator = (req, res, next)=>{
    //title
    req.check('title',"Write a title").notEmpty()
    req.check('title',"Title must be between 4 to 150 characters").isLength({
        min: 4,
        max:150
    });
    //body
    req.check('body',"Write a body").notEmpty()
    req.check('body',"Body must be between 4 to 2000 characters").isLength({
        min: 4,
        max:150
    });

    //check for errors
    const errors = req.validationErrors()
    //if error shows the first one as they happen
    if(errors){
        const firstError = errors.map(error=> error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    //proceed to next middleware
    next();
}


//Validation for user signup - this is imported into routes>auth.js . Used before postcontrollers - used as middleware
exports.userSignupValidator = (req, res, next)=>{
    //name is not null and between 4-10 char
    req.check('name',"Name is required").notEmpty()
    req.check('name',"Name must be between 3 to 150 characters").isLength({
        min: 3,
        max:150
    });
    //email is not null, valid and normalized
    req.check('email',"Email is required").notEmpty()
    req.check('email',"Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
        min: 4,
        max:2000
    });
    //checck for password
    req.check('password',"Password is required").notEmpty()
    req.check('password')
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Must contain a number")


    //check for errors
    const errors = req.validationErrors()
    //if error shows the first one as they happen
    if(errors){
        const firstError = errors.map(error=> error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    //proceed to next middleware
    next();
}
