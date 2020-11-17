import { Router } from 'express'
import Template from '../../models/Template'

export const router = Router()

// @route GET api/template
// @desc get ALL templates
// @access Public

router.get('/', (req, res) => {
	Template.find()
		.select('-_id')
		.sort()
		.then(templates => res.json(templates))
		.catch(err => console.log(err))
})

// @route POST api/template
// @desc create a template
// @access Public

router.post('/', (req, res) => {
	const newTemplate = new Template({
		name: req.body.name,
		html: req.body.html,
		css: req.body.css,
		preview: req.body.preview,
		imgs: [...req.body.imgs],
	})
	newTemplate
		.save()
		.then(template => res.json(template))
		.catch(err => console.log(err))
})

// @route DELETE api/template/:id
// @desc delete a template by id
// @access Public

router.delete('/:id', (req, res) => {
	Template.findById(req.params.id)
		.then(template => template.remove())
		.then(() => res.json({ success: true }))
		.catch(err => {
			console.log(err)
			res.status(404).json({ success: false })
		})
})

// @route POST api/template/:id
// @desc update a template by id
// @access Public

router.post('/:id', (req, res) => {
	Template.findById(req.params.id)
		.then(template => {
			template.name = req.body.name
			template.html = req.body.html
			template.css = req.body.css
			template.preview = req.body.preview
			template.imgs = [...req.body.imgs]
			template
				.save()
				.then(template => res.json(template))
				.catch(err => console.log(err))
		})
		.catch(err => console.log(err))
})
