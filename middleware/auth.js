import config from 'config'
import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
	const token = req.header('x-auth-token')
	const secret =
		process.env.NODE_ENV === 'production'
			? process.env.jwtSecret
			: config.get('jwtSecret')
	if (!token) {
		return res.status(401).json({ msg: 'No token authorization denied' })
	}
	try {
		const decoded = jwt.verify(token, secret)
		req.user = decoded
		next()
	} catch (e) {
		res.status(400).json({ msg: 'Token is not valid' })
	}
}

export { auth as default }
