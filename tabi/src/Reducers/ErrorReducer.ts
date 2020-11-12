import { GET_ERRORS, CLEAR_ERRORS } from '../Actions/types'
import { IAction } from '../interfaces'

const initialState = {
	msg: {},
	status: null,
	id: null,
}

export const ErrorReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case GET_ERRORS:
			return {
				msg: action.payload.msg,
				status: action.payload.status,
				id: action.payload.id,
			}
		case CLEAR_ERRORS:
			return {
				msg: {},
				status: null,
				id: null,
			}
		default:
			return state
	}
}
