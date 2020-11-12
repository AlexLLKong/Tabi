import express from 'express'
import mongoose from 'mongoose'
import { mongoURI } from './config/keys'
import { router as items } from './routes/api/items'
import { router as template } from './routes/api/template'
const app = express()

app.use(express.json())

mongoose
	.connect(mongoURI)
	.then(() => {
		console.log('MongoDB Connected')
	})
	.catch(err => console.log(err))

app.use('/api/items/', items)
app.use('/api/template/', template)
const port = process.env.PORT || 5000

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})
