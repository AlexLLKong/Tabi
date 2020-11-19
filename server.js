import express from 'express'
import mongoose from 'mongoose'
import config from 'config'
import path from 'path'
import { router as items } from './routes/api/items'
import { router as template } from './routes/api/template'
import { router as trip } from './routes/api/trip'
import { router as users } from './routes/api/users'
import { router as auth } from './routes/api/auth'
const app = express()

app.use(express.json({ limit: '16mb' }))

mongoose
	.connect(config.get('mongoURI') || process.env.mongoURI, {
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => {
		console.log('MongoDB Connected')
	})
	.catch(err => console.log(err))

app.use('/api/items/', items)
app.use('/api/template/', template)
app.use('/api/trip/', trip)
app.use('/api/users/', users)
app.use('/api/auth/', auth)

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('tabi/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'tabi', 'build', 'index.html'))
	})
}

const port = process.env.PORT || 5000

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})
