import React, { FC } from 'react'
import { Wrapper } from '../Components/Wrapper'
type Props = { title: string; content: JSX.Element }
export const ShareTripPage: FC<Props> = ({ title, content }) => (
	<Wrapper>
		<h1 className="">{title}</h1>
		<div>{content}</div>
	</Wrapper>
)
