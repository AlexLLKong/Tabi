import { Router } from 'express'
import { Item } from '../../models/Item'
export const router = Router()

// @route GET api/items
// @desc Get ALL Items
// @access Public

router.get('/', (req, res) => {
	Item.find()
		.sort({ date: -1 })
		.then(items => res.json(items))
		.catch(err => console.log(err))
})

// @route POST api/items
// @desc Create an Item
// @access Public

router.post('/', (req, res) => {
	const newItem = new Item({
		name: req.body.name,
	})
	newItem
		.save()
		.then(item => res.json(item))
		.catch(err => console.log(err))
})

// @route DELETE api/items/:id
// @desc Delete an Item
// @access Public

router.delete('/:id', (req, res) => {
	Item.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({ success: true })))
		// eslint-disable-next-line no-unused-vars
		.catch(err => res.status(404).json({ success: false }))
})

// @route UPDATE api/items/:id
// @desc Update an Item
// @access Public

router.post('/:id', (req, res) => {
	const newName = req.body.name

	Item.findById(req.params.id).then(item => {
		item.name = newName
		item.save()
			.then(item => res.json(item))
			.catch(err => console.log(err))
	})
})
