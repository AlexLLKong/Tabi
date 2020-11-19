import React, { useEffect, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserTrips, getTrip, deleteTrip } from '../Actions/TripActions'
import { IMyTripsPageReduxProps, IMyTripsPage } from '../interfaces'
import { Wrapper } from '../Components/Wrapper'
import { Card } from '../Components/Card'
import { Button } from '../Components/Button'
import pageStyles from './Pages.module.css'
import styles from './MyTripsPage.module.css'

const MyTripsPage = ({
	auth,
	trip,
	getUserTrips,
	getTrip,
	deleteTrip,
}: IMyTripsPage) => {
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
			const deleteHandler = (e: MouseEvent) => {
				deleteTrip(preview._id)
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
										children={
											<>
												Edit
												<i
													className={`fas fa-edit ${pageStyles.icon}`}
												></i>
											</>
										}
									/>
								</Link>
								<Button
									className={`${styles.btn} ${pageStyles.tooltip}`}
									onClick={shareHandler}
									children={
										<>
											Share
											<i
												className={`fas fa-link ${pageStyles.icon}`}
											></i>
											<span
												className={
													pageStyles.tooltiptext
												}
											>
												Copy link to clipboard
											</span>
										</>
									}
								/>
								<Button
									className={styles.btn}
									onClick={deleteHandler}
									children={
										<>
											Delete
											<i
												className={`fas fa-trash ${pageStyles.icon}`}
											></i>
										</>
									}
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

export default connect(mapStatetoProps, { getUserTrips, getTrip, deleteTrip })(
	MyTripsPage
)
