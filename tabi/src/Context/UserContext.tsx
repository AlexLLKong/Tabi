import React, { createContext, useReducer, FC } from 'react'
import { UserReducer } from './UserReducer'
type InitialStateType = {
	token: string | null
	isAuthenticated: boolean
	isLoading: boolean
	user: object | null
}

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: false,
	isLoading: false,
	user: null,
}

const UserContext = createContext<{
	state: InitialStateType
	dispatch: React.Dispatch<any>
}>({
	state: initialState,
	dispatch: () => null,
})

const UserProvider: FC = ({ children }) => {
	const [state, dispatch] = useReducer(UserReducer, initialState)
	return (
		<UserContext.Provider value={{ state, dispatch }}>
			{children}
		</UserContext.Provider>
	)
}

export { UserContext, UserProvider }
