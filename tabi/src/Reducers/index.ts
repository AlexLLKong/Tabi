import { combineReducers } from 'redux'
import { ErrorReducer } from './ErrorReducer'
import { AuthReducer } from './AuthReducer'
import { TemplateReducer } from './TemplateReducer'
import { TripReducer } from './TripReducer'
export default combineReducers({
	error: ErrorReducer,
	auth: AuthReducer,
	template: TemplateReducer,
	trip: TripReducer,
})
