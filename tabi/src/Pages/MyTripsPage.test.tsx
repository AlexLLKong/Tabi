import React from 'react'
import { render, screen } from '@testing-library/react'
import { MyTripsPage } from './MyTripsPage'
test('renders with title', () => {
	render(<MyTripsPage />)
	screen.getByText('My Trips')
})
