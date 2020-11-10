import React, { FC, MouseEvent } from 'react'
import { Wrapper } from '../Components/Wrapper'
import { Card } from '../Components/Card'
import { Button } from '../Components/Button'
import pageStyles from './Pages.module.css'
import styles from './MyTripsPage.module.css'
const tempFn = (e: MouseEvent<HTMLElement>): void => {
	e.preventDefault()
	console.log('Placeholder button on click handler clicked')
}

const generateCards = (numCards: number): JSX.Element[] => {
	let returnArr: JSX.Element[] = []
	for (let i: number = 0; i < numCards; i++) {
		returnArr.push(
			<Card
				key={`Card${i}`}
				children={
					<div>
						<h3>Example Card {i + 1}</h3>
						<div className={styles.buttons}>
							<Button
								className={styles.btn}
								onClick={tempFn}
								children={'Share'}
							/>
							<Button
								className={styles.btn}
								onClick={tempFn}
								children={'Delete'}
							/>
						</div>
					</div>
				}
			/>
		)
	}
	return returnArr
}
export const MyTripsPage: FC = () => (
	<div>
		<Wrapper>
			<h1 className={pageStyles.title}>My Trips</h1>
			<div className={pageStyles.cardContainer}>{generateCards(3)}</div>
		</Wrapper>
	</div>
)
