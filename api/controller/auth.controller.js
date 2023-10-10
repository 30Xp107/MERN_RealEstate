import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

const signup = async(req, res) => {

    const { username, email, password } = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })
    // if(username === req.body.username) {
    //     console.log('Duplicate Username')
    //     return res.status(500).json({message: 'Duplicate Username'})
    // }
    // if(email === req.body.email) {
    //     console.log('Duplicate Email')
    //     return res.status(500).json({message: 'Duplicate Email'})
    // }
    try {
        await newUser.save()
        res.status(201).json("User created successfully")
    } catch (error) {
        res.status(500).json(error.message)
    }

}

export default signup