import React, { FC } from 'react'
import { Wrapper } from '../Components/Wrapper'
import pageStyles from './Pages.module.css'

export const About: FC = () => (
	<Wrapper>
		<h1 className={pageStyles.title}>About</h1>
		<p className={pageStyles.bodyText}>
			Tabi is a simple travel planner. Users can make travel plans based
			off templates.
		</p>
		<a
			href="https://github.com/AlexLLKong/Tabi"
			className={pageStyles.ghLink}
		>
			Check out the repo on
			<i className={`fab fa-github-square ${pageStyles.icon}`}></i>
		</a>
	</Wrapper>
)
