import React from 'react'
import { render, screen, fireEvent, createEvent } from '@testing-library/react'
import { EditFieldContainer } from './EditFieldContainer'
const pageContent = (
	<div>
		<h1 data-editable="true">Page Title</h1>
		<p data-editable="true">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit.
			Voluptates, est?
		</p>
	</div>
)
test('renders content', () => {
	render(<EditFieldContainer content={pageContent} />)
	screen.getByText(
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, est?'
	)
})
test('default element innerText changes on input', () => {
	render(<EditFieldContainer content={pageContent} />)
	fireEvent.click(screen.getByText('Page Title'))
	const inputElement = screen.getByPlaceholderText('Edit selection')
	const changeEvent = createEvent.change(inputElement, {
		target: { value: 'test' },
	})
	fireEvent(inputElement, changeEvent)
	screen.getByText('test')
})

test('changing one element does not affect others', () => {
	render(<EditFieldContainer content={pageContent} />)
	fireEvent.click(screen.getByText('Page Title'))
	const inputElement = screen.getByPlaceholderText('Edit selection')
	const changeEvent = createEvent.change(inputElement, {
		target: { value: 'test' },
	})
	fireEvent(inputElement, changeEvent)
	screen.getByText('test')
	fireEvent.click(
		screen.getByText(
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, est?'
		)
	)
	const changeEvent2 = createEvent.change(inputElement, {
		target: { value: 'test2' },
	})
	fireEvent(inputElement, changeEvent2)
	screen.getByText('test')
	screen.getByText('test2')
})
