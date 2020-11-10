import React, { FC } from 'react'
import { Wrapper } from '../Components/Wrapper'
import { Card } from '../Components/Card'
import pageStyles from './Pages.module.css'
const generateCards = (numCards: number): JSX.Element[] => {
	let returnArr: JSX.Element[] = []
	for (let i: number = 0; i < numCards; i++) {
		returnArr.push(
			<Card
				key={`Card${i}`}
				children={
					<div>
						<h3>Example Card {i + 1}</h3>
					</div>
				}
			/>
		)
	}
	return returnArr
}
export const PickTemplatePage: FC = () => (
	<Wrapper>
		<h1 className={pageStyles.title}>Pick a Template</h1>
		<div className={pageStyles.cardContainer}>{generateCards(3)}</div>
	</Wrapper>
)
