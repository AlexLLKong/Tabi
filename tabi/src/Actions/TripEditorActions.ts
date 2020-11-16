import axios from 'axios'
import {
	TRIP_SELECTED,
	NO_TRIP_SELECTED,
	TRIP_SAVE_SUCCESS,
	TRIP_SAVE_FAILED,
	SAVING_TRIP,
} from './types'
import { ITrip } from '../interfaces'

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

export const saveTrip = ({ name, html, css, imgs, preview }: ITrip) => (
	dispatch: Function
) => {
	dispatch({ type: SAVING_TRIP })
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}

	const body = JSON.stringify({ name, html, css, imgs, preview })
	axios
		.post('api/trip', body, config)
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
