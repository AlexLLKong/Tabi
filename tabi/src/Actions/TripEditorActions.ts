import { TRIP_SELECTED, NO_TRIP_SELECTED } from './types'
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
