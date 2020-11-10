import React from 'react'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
test('renders users link', () => {
	render(
		<Router>
			<Navbar />
		</Router>
	)
	const linkElement = screen.getByText(/Tabi/i)
	expect(linkElement).toBeInTheDocument()
})
