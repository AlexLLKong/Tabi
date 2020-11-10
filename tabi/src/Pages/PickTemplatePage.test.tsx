import React from 'react'
import { render, screen } from '@testing-library/react'
import { PickTemplatePage } from './PickTemplatePage'

test('renders with title', () => {
	render(<PickTemplatePage />)
	screen.getByText('Pick a Template')
})
