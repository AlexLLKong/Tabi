import { Router } from 'express'
import auth from '../../middleware/auth'
import User from '../../models/User'
import Trip from '../../models/Trip'
export const router = Router()

// @route GET api/trip/previews
// @desc get all user trips as previews
// @access Private

router.get('/previews', auth, (req, res) => {
	User.findById(req.user.id)
		.then(user => {
			Trip.find()
				.where('_id')
				.in(user.trips)
				.select(['_id', 'name', 'preview'])
				.exec((err, records) => {
					if (err) console.log(err)
					res.json(records)
				})
		})
		.catch(err => console.log(err))
})

// @route GET api/trip/:id
// @desc get a user trip by id
// @access Private

router.get('/:id', auth, (req, res) => {
	Trip.findById(req.params.id)
		.then(trip => res.json(trip))
		.catch(err => console.log(err))
})
// @route POST api/trip
// @desc post a trip
// @access Private

router.post('/', auth, (req, res) => {
	const newTrip = new Trip({
		name: req.body.name,
		html: req.body.html,
		css: req.body.css,
		imgs: [...req.body.imgs],
		_userID: req.body.userID,
	})

	newTrip
		.save()
		.then(trip => {
			User.findById(req.body.userID)
				.then(user => {
					user.trips.push(newTrip.id)
					user.save()
						.then(res.json(trip))
						.catch(err => console.log(err))
				})
				.catch(err => console.log(err))
		})
		.catch(err => console.log(err))
})

// @route DELETE api/trip/:id
// @desc delete a trip
// @access Private

router.delete('/:id', auth, (req, res) => {
	Trip.findById(req.params.id)
		.then(trip =>
			trip
				.remove()
				.then(() => {
					res.json({ success: true })
				})
				.catch(err => {
					res.json({ success: false })
					console.log(err)
				})
		)
		.catch(err => {
			res.status(404).json({ success: false })
			console.log(err)
		})
})

// @route POST api/trip/:id
// @desc update a trip
// @access Private

router.post('/:id', auth, (req, res) => {
	Trip.findById(req.params.id)
		.then(trip => {
			trip.name = req.body.name
			trip.html = req.body.html
			trip.css = req.body.css
			trip.imgs = [...req.body.imgs]
			trip._userID = req.body.userID
			trip.save()
				.then(trip => res.json(trip))
				.catch(err => console.log(err))
		})
		.catch(err => console.log(err))
})
