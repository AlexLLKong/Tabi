import React from 'react'
import { render, screen } from '@testing-library/react'
import { Wrapper } from './Wrapper'

test('renders text children', () => {
	const child = <p>Content</p>
	render(<Wrapper children={child} />)
	screen.getByText('Content')
})
