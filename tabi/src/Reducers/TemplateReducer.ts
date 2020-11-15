import { TEMPLATES_LOADED, TEMPLATES_LOADING } from '../Actions/types'

const initialState = {
	templates: [],
	isLoading: false,
}

export const TemplateReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case TEMPLATES_LOADING:
			return {
				...state,
				isLoading: true,
			}
		case TEMPLATES_LOADED:
			return {
				templates: [...action.payload],
				isLoading: false,
			}
		default: {
			return state
		}
	}
}
