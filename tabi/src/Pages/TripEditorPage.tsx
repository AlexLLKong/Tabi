import React, { FC } from 'react'
import { EditFieldContainer } from '../Components/EditFieldContainer'
import { Wrapper } from '../Components/Wrapper'
// import pageStyles from './Pages.module.css'
//type Props = { content: JSX.Element }
const mockContent: JSX.Element = (
	<div>
		<h1 data-editable="true">Page Title</h1>
		<p data-editable="true">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit.
			Voluptates, est?
		</p>
	</div>
)
export const TripEditorPage: FC = (/*{ content }*/) => (
	<Wrapper>
		<EditFieldContainer content={mockContent} />
	</Wrapper>
)
