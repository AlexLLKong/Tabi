import React from 'react'
import { render, screen } from '@testing-library/react'
import { TripEditorPage } from './TripEditorPage'

test('renders with EditFieldContainer', () => {
	render(<TripEditorPage />)
	screen.getByPlaceholderText('Edit selection')
})
