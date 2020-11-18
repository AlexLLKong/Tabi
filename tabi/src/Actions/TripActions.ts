import axios from 'axios'
import {
	TRIP_SELECTED,
	NO_TRIP_SELECTED,
	TRIP_SAVE_SUCCESS,
	TRIP_SAVE_FAILED,
	SAVING_TRIP,
	TRIPS_LOADING,
	TRIPS_LOADED,
	TRIP_LOADING,
	TRIP_LOADED,
	TRIP_LOADING_FAILED,
} from './types'
import { ITrip } from '../interfaces'
import { tokenConfig } from './AuthActions'

// when deploying to Heroku, this should be set to
// an environment variable
const ax = axios.create({
	baseURL: 'http://localhost:3000/api/',
})

export const selectTrip = (trip: ITrip) => (dispatch: Function) => {
	dispatch({
		type: TRIP_SELECTED,
		payload: trip,
	})
}

export const deselectTrip = () => (dispatch: Function) => {
	dispatch({
		type: NO_TRIP_SELECTED,
	})
}

export const saveTrip = (
	{ name, html, css, imgs, preview, _id }: ITrip,
	userID: string
) => (dispatch: Function, getState: Function) => {
	dispatch({ type: SAVING_TRIP })
	const config = tokenConfig(getState)

	let body = JSON.stringify({
		name,
		html: html,
		css,
		imgs,
		preview,
		userID,
	})
	console.log(userID)
	ax.post(`trip${_id ? '/' + _id : ''}`, body, config)
		.then(res => {
			dispatch({
				type: TRIP_SAVE_SUCCESS,
				payload: res.data,
			})
		})
		.catch(err => {
			dispatch({
				type: TRIP_SAVE_FAILED,
			})
		})
}

export const getUserTrips = () => (dispatch: Function, getState: Function) => {
	dispatch({ type: TRIPS_LOADING })
	const config = tokenConfig(getState)
	ax.get('trip/previews', config)
		.then(res => {
			dispatch({
				type: TRIPS_LOADED,
				payload: res.data,
			})
		})
		.catch(err => {
			dispatch({
				type: TRIP_LOADING_FAILED,
			})
		})
}

export const getTrip = (tripID: string) => (
	dispatch: Function,
	getState: Function
) => {
	dispatch({ type: TRIP_LOADING })
	const config = tokenConfig(getState)
	ax.get(`trip/${tripID}`, config)
		.then(res => {
			dispatch({
				type: TRIP_LOADED,
				payload: res.data,
			})
		})
		.catch(err => {
			dispatch({
				type: TRIP_LOADING_FAILED,
			})
		})
}
