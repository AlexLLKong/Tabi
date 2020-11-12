import { Router } from 'express'
import Trip from '../../models/Trip'
export const router = Router()

// @route GET api/trip
// @desc get trips
// @access Public

router.get('/', (req, res) => {
	Trip.find()
		.sort()
		.then(trips => res.json(trips))
		.catch(err => console.log(err))
})

// @route POST api/trip
// @desc post a trip
// @access Public

router.post('/', (req, res) => {
	const newTrip = new Trip({
		name: req.body.name,
		html: req.body.html,
		css: req.body.css,
	})

	newTrip
		.save()
		.then(trip => res.json(trip))
		.catch(err => console.log(err))
})

// @route DELETE api/trip/:id
// @desc delete a trip
// @access Public

router.delete('/:id', (req, res) => {
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
// @access Public

router.post('/:id', (req, res) => {
	Trip.findById(req.params.id)
		.then(trip => {
			trip.name = req.body.name
			trip.html = req.body.html
			trip.css = req.body.css
			trip.save()
				.then(trip => res.json(trip))
				.catch(err => console.log(err))
		})
		.catch(err => console.log(err))
})
