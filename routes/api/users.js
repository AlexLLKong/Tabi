import { Router } from 'express'
import { User } from '../../models/User'
import bcrypt from 'bcryptjs'
import config from 'config'
import jwt from 'jsonwebtoken'
export const router = Router()

// @route POST api/users
// @desc Register new user
// @access Public

router.post('/', (req, res) => {
	const { name, email, password } = req.body
	const secret =
		process.env.NODE_ENV === 'production'
			? process.env.jwtSecret
			: config.get('jwtSecret')
	if (!name || !email || !password)
		return res.status(400).json({ msg: 'Please enter all fields' })
	User.findOne({ email }).then(user => {
		if (user) return res.status(400).json({ msg: 'User already exists' })

		const newUser = new User({
			name,
			email,
			password,
		})
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if (err) throw err
				newUser.password = hash
				newUser.save().then(user => {
					jwt.sign(
						{ id: user.id },
						secret,
						{
							expiresIn: 3600,
						},
						(err, token) => {
							if (err) throw err
							res.json({
								token,
								user: {
									id: user.id,
									name: user.name,
									email: user.email,
								},
							})
						}
					)
				})
			})
		})
	})
})
