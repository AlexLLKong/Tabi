import axios from 'axios'
import { TEMPLATES_LOADED, TEMPLATES_LOADING } from './types'
import { returnErrors } from './ErrorActions'
export const loadTemplates = () => (dispatch: Function) => {
	dispatch({ type: TEMPLATES_LOADING })
	axios
		.get('/api/template')
		.then(res => {
			dispatch({ type: TEMPLATES_LOADED, payload: res.data })
		})
		.catch(err => {
			console.log(err)
			dispatch(returnErrors(err.response.data, err.response.status))
		})
}
