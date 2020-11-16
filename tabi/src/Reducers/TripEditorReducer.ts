import { TRIP_SELECTED, NO_TRIP_SELECTED } from '../Actions/types'

const initialState = {
	selectedTrip: null,
	isTripSelected: false,
}

export const TripEditorReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case TRIP_SELECTED:
			return {
				selectedTrip: action.payload,
				isTripSelected: true,
			}
		case NO_TRIP_SELECTED:
			return {
				selectedTrip: null,
				isTripSelected: false,
			}
		default: {
			return state
		}
	}
}
