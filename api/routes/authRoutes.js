const router = require("express").Router();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')
const secret = process.env.JWT_SECRET

router.post('/signup', async (req, res) => {
    const {email, password, account_type} = req.body

    if (!email || !password || !account_type) {
        return res.status(422).send({error: 'email and password and account type are required'})
    }

    try {
        const user = new User({email, password, account_type})
        await user.save()

        const token = jwt.sign({userId: user._id}, secret)
        res.send({token, account_type})
    } catch (err) {
        return res.status(422).send(err.message)
    }
    
})

router.post('/signin', async (req, res) => {
    const {email, password} = req.body

    if (!email || !password) {
        return res.status(422).send({error: 'provide email and password'})
    }

    const user = await User.findOne({email})
    if (!user) {
        return res.status(404).send({error: 'not found'})
    }

    try {
        await user.comparePassword(password)
        const token = jwt.sign({userId: user._id}, secret)
        const account_type = user.account_type
        res.send({ token, account_type })
    } catch(err) {
        return res.status(401).send(err.message)
    }
})

module.exports = router