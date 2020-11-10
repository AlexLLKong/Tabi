import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from '../Components/Wrapper'
import pageStyles from './Pages.module.css'
import styles from './LandingPage.module.css'

export const LandingPage: FC = () => (
	<Wrapper>
		<h1 className={pageStyles.title}>Tabi</h1>
		<p className={pageStyles.bodyText}>
			Just one more reason to go on that trip.
		</p>
		<Link className={styles.link} to="/templates">
			Start Planning
		</Link>
		<span className={styles.bgCharacter}>旅</span>
	</Wrapper>
)
