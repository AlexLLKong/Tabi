import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { LandingPage } from './LandingPage'

test('renders app name', () => {
	render(
		<Router>
			<LandingPage />
		</Router>
	)
	screen.getByText('Tabi')
})
