import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	trips: {
		type: [String],
	},
	register_date: {
		type: Date,
		default: Date.now,
	},
})

export const User = mongoose.model('user', UserSchema)
export { User as default }
