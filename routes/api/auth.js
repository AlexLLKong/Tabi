import { Router } from 'express'
import { User } from '../../models/User'
import bcrypt from 'bcryptjs'
import config from 'config'
import jwt from 'jsonwebtoken'
import auth from '../../middleware/auth'
export const router = Router()

// @route POST api/auth
// @desc Authenticate user
// @access Public

router.post('/', (req, res) => {
	const { email, password } = req.body
	const secret =
		process.env.NODE_ENV === 'production'
			? process.env.jwtSecret
			: config.get('jwtSecret')
	if (!email || !password)
		return res.status(400).json({ msg: 'Please enter all fields' })
	User.findOne({ email }).then(user => {
		if (!user) return res.status(400).json({ msg: 'User does not exist' })

		bcrypt.compare(password, user.password).then(isMatch => {
			if (!isMatch)
				return res.status(400).json({ msg: 'Invalid credentials' })
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

// @route GET api/auth/user
// @desc Get user data
// @access Private

router.get('/user', auth, (req, res) => {
	User.findById(req.user.id)
		.select('-password')
		.then(user => res.json({ ...user, id: user.id }))
})
