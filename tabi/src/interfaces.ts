import { E_ERROR } from './enum'

// REACT
export interface ITarget {
	target: {
		value: React.SetStateAction<string>
	}
	preventDefault(): void
}

// ERRORS
export interface IMsg {
	msg: string | any
}

// AUTH
export interface IUser {
	id: string
	name?: string
	email: string
	password: string
}

export interface IAuthForm {
	isAuthenticated?: boolean
	error: IError
	clearErrors(): void
}

export interface ILoginPage extends IAuthForm {
	login(user: IUser): void
}

export interface IRegisterPage extends IAuthForm {
	register(user: IUser): void
}

export interface ILogoutProps {
	logout(): void
}

export interface IError {
	id: E_ERROR
	msg: IMsg
}

export interface IAuthReduxProps {
	auth: { isAuthenticated: boolean }
	error: IError
}

export interface IConfigHeaders {
	headers: {
		[index: string]: string
	}
}

// TEMPLATES
export interface ITemplate {
	_id?: string
	name: string
	html: string
	css: string
	imgs: string[]
	preview: string
}
export interface ITemplateReduxProps {
	template: { templates: [ITemplate] }
	error: IError
}

export interface ITemplatePage {
	template: { templates: [ITemplate] }
	loadTemplates(): void
	selectTrip(trip: ITrip): void
}

// TRIPS
export interface ITrip {
	_id?: string
	name: string
	html: string
	css: string
	imgs: string[]
	preview: string
}

export interface ITripReduxProps {
	trip: { selectedTrip: ITrip }
}

export interface ITripEditorPage {
	trip: { selectedTrip: ITrip }
	getTrip(tripID: string): void
}

export interface IEditFieldContainer {
	content: JSX.Element | JSX.Element[] | null
	trip: { selectedTrip: ITrip }
	auth: { user: IUser; isAuthenticated: boolean }
	saveTrip(trip: ITrip, userID: string): void
}

export interface IEditFieldContainerReduxProps {
	trip: { selectedTrip: ITrip }
	auth: { user: IUser; isAuthenticated: boolean }
}

export interface ITripPreview {
	_id: string
	name: string
	preview: string
}

export interface IMyTripsPageReduxProps {
	auth: {
		isAuthenticated: boolean
		user: IUser
	}
	trip: {
		loadingTrips: boolean
		tripPreviews: [ITripPreview]
	}
}
export interface IMyTripsPage {
	auth: {
		isAuthenticated: boolean
		user: IUser
	}
	trip: {
		loadingTrips: boolean
		tripPreviews: [ITripPreview]
	}
	getUserTrips(): void
	getTrip(tripID: string): void
	deleteTrip(tripID: string): void
}

// NAVBAR
export interface IAppNavbar {
	auth?: {
		isAuthenticated: boolean
		user: IUser
	}
}

export interface IAuthFunction {
	name?: string
	email: string
	password: string
}

export interface IReturnErrors {
	msg: {
		msg: string | any
	}
	status: string
	id: any
}

export interface IAction {
	type: string
	payload?: any
}
