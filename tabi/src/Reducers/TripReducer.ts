import {
	TRIP_SELECTED,
	NO_TRIP_SELECTED,
	TRIP_SAVE_SUCCESS,
	SAVING_TRIP,
	TRIPS_LOADING,
	TRIPS_LOADED,
	TRIP_LOADING,
	TRIP_LOADED,
	TRIP_LOADING_FAILED,
} from '../Actions/types'

const initialState = {
	selectedTrip: null,
	isTripSelected: false,
	savingTrip: false,
	tripPreviews: [],
	loadingTrips: false,
	loadingTrip: false,
}

export const TripReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case TRIP_LOADING:
			return {
				...state,
				loadingTrip: true,
			}
		case TRIP_LOADED:
			return {
				...state,
				loadingTrip: false,
				selectedTrip: action.payload,
			}
		case TRIPS_LOADING:
			return {
				...state,
				loadingTrips: true,
			}
		case TRIPS_LOADED:
			return {
				...state,
				tripPreviews: action.payload,
				loadingTrips: false,
			}
		case TRIP_LOADING_FAILED:
			return {
				...state,
				loadingTrips: false,
			}
		case SAVING_TRIP:
			return {
				...state,
				savingTrip: true,
			}
		case TRIP_SAVE_SUCCESS:
			return {
				...state,
				selectedTrip: action.payload,
				savingTrip: false,
			}
		case TRIP_SELECTED:
			return {
				...state,
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
