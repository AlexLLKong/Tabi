import React from 'react'
import { render, screen } from '@testing-library/react'
import { ShareTripPage } from './ShareTripPage'

test('render with title', () => {
	render(<ShareTripPage title="test" content={<br></br>} />)
	screen.getByText('test')
})

test('render with content', () => {
	const pageContent = (
		<div>
			<h1>Page Title</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Voluptates, est?
			</p>
		</div>
	)
	render(<ShareTripPage title="test" content={pageContent} />)
	screen.getByText(
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, est?'
	)
})
