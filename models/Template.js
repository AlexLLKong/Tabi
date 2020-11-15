import mongoose, { Schema } from 'mongoose'

const TemplateSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	html: {
		type: String,
		required: true,
	},
	css: {
		type: String,
	},
	imgs: {
		type: [String],
	},
	preview: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
})

const Template = mongoose.model('template', TemplateSchema)
export { Template as default }
