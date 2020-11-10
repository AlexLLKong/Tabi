import React, { MouseEvent } from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

const testFn = (e: MouseEvent<HTMLElement>): void => {
	e.preventDefault()
	console.log('clicked')
}
test('renders with name', () => {
	render(<Button className="" onClick={testFn} children={<p>button</p>} />)
	const buttonElement: HTMLElement = screen.getByText(/button/i)
	expect(buttonElement).toBeInTheDocument()
})
