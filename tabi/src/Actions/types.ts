export const USER_LOADING = 'USER_LOADING'
export const USER_LOADED = 'USER_LOADED'
export const AUTH_ERROR = 'AUTH_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const GET_ERRORS = 'GET_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const TEMPLATES_LOADING = 'TEMPLATES_LOADING'
export const TEMPLATES_LOADED = 'TEMPLATES_LOADED'
export const TRIP_SELECTED = 'TRIP_SELECTED'
export const NO_TRIP_SELECTED = 'NO_TRIP_SELECTED'
export const SAVING_TRIP = 'SAVING_TRIP'
export const TRIP_SAVE_SUCCESS = 'TRIP_SAVE_SUCCESS'
export const TRIP_SAVE_FAILED = 'TRIP_SAVE_FAILED'
export const TRIPS_LOADING = 'TRIPS_LOADING'
export const TRIPS_LOADED = 'TRIPS_LOADED'
export const TRIP_LOADING = 'TRIP_LOADING'
export const TRIP_LOADED = 'TRIP_LOADED'
export const TRIP_LOADING_FAILED = 'TRIP_LOADING_FAILED'
export const DELETING_TRIP = 'DELETING_TRIP'
export const TRIP_DELETED = 'TRIP_DELETED'
export const TRIP_DELETION_FAILED = 'TRIP_DELETION_FAILED'

export type UserStateType = {
	token: string | null
	isAuthenticated: boolean
	isLoading: boolean
	user: object | null
}
export type ErrorStateType = {
	msg: object
	status: string | null
	id: string | null
}
export type StateType = {
	userState: UserStateType
	errorState: ErrorStateType
}
