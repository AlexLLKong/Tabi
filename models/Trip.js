import mongoose, { Schema } from 'mongoose'

// It is probably best to include the template
// that the Trip is based on and programmaticly
// insert edits when needed (like when the user
// sees it).
export const TripSchema = new Schema({
	_userID: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	html: {
		type: String,
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
const Trip = mongoose.model('trip', TripSchema)
export { Trip as default }
