import React, { useEffect, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserTrips, getTrip } from '../Actions/TripActions'
import { IMyTripsPageReduxProps, IMyTripsPage } from '../interfaces'
import { Wrapper } from '../Components/Wrapper'
import { Card } from '../Components/Card'
import { Button } from '../Components/Button'
import pageStyles from './Pages.module.css'
import styles from './MyTripsPage.module.css'
const tempFn = (e: MouseEvent<HTMLElement>): void => {
	e.preventDefault()
	console.log('Placeholder button on click handler clicked')
}

const MyTripsPage = ({ auth, trip, getUserTrips, getTrip }: IMyTripsPage) => {
	useEffect(() => {
		getUserTrips()
	}, [getUserTrips])

	const loadingContent: JSX.Element = (
		<div>
			<h3>Loading Trips...</h3>
		</div>
	)
	const { tripPreviews } = trip
	const generateCards = (): JSX.Element[] => {
		return tripPreviews.map<JSX.Element>(preview => {
			const editHandler = (e: MouseEvent) => {
				getTrip(preview._id)
			}
			const shareHandler = (e: MouseEvent) => {
				e.preventDefault()
				navigator.clipboard.writeText(
					`http://localhost:3000/tripeditor/${preview._id}`
				)
			}
			return (
				<Card
					key={`${preview._id}`}
					children={
						<div>
							<h3>{preview.name}</h3>
							<div className={styles.buttons}>
								<Link to="/tripeditor">
									<Button
										className={styles.btn}
										onClick={editHandler}
										children={'Edit'}
									/>
								</Link>
								<Button
									className={styles.btn}
									onClick={shareHandler}
									children={'Share'}
								/>
								<Button
									className={styles.btn}
									onClick={tempFn}
									children={'Delete'}
									disabled={true}
								/>
							</div>
						</div>
					}
				/>
			)
		})
	}

	return (
		<div>
			<Wrapper>
				<h1 className={pageStyles.title}>My Trips</h1>
				<div className={pageStyles.cardContainer}>
					{trip.loadingTrips ? loadingContent : generateCards()}
				</div>
			</Wrapper>
		</div>
	)
}

const mapStatetoProps = (state: IMyTripsPageReduxProps) => ({
	auth: state.auth,
	trip: state.trip,
})

export default connect(mapStatetoProps, { getUserTrips, getTrip })(MyTripsPage)
