import mongoose, { Schema } from 'mongoose'

const ItemSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
})

export const Item = mongoose.model('item', ItemSchema)
export { Item as default }
