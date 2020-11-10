import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from './Card'

test('renders children', () => {
	render(<Card children={<p>children render test</p>} />)
	screen.getByText('children render test')
})
