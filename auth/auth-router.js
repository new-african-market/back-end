const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

//import user model & assign to variable
Users = require('./auth-model')

/*********** REGISTRATION  ***********/
router.post('/signup', (req, res) => {
    let user = req.body;

    //custom validation messages for front-end
    //user obj is empty
    if(!user) {
        return res.status(400).json({ message: `Please register` })
    };

    //username was not entered
    if(!user.username) {
        return res.status(400).json({ message: `Please enter a username` })
    }

    //password was not entered
    if (!user.password) {
        return res.status(400).json({ message: `Please enter a password` })
    }

    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash; //password will be hashed(encrypted)

    Users.addUser(user)
        .then(savedUser => {
            res.status(201).json(savedUser)
        })
        .catch(err => {
            console.log("User Registration", err)
            return res.status(500).json({ message: `Could not add user` });
        })
})

/*********** LOGIN  ***********/
router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .then(users => {
            // if the username is not found
            if (users.length === 0) {
                return res.status(404).json({
                    message: `${username} is not a registered user`
                })
            }
            //may need to edit this
            const user = users[0];
            //if the user and encrypted password matches
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken({ user });
                res.status(200).json({
                    message :`Welcome ${user.username}!`,
                    id: user.id,
                    token
                })
            } else {
                return res.status(401).json({message: 'Incorrect password'})
            }

        })
        .catch(err => {
            res.status(500).json(err);
        })
})

/***** Generate token for user logging in  *****/

function generateToken(user) {
    //what we are sending as part of the token. Can send more than just the username(ie: user_id, first_name, last_name...)
    const payload = {
        username: user.username
    };
    //token expiration
    const options = {
        expiresIn: '1d'
    };
    //Three part token signature
    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;