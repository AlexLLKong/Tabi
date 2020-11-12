export interface IAction {
	type: string
	payload?: any
}
export interface IMsg {
	msg: string | any
}
export interface IAuthFunction {
	name?: string
	email: string
	password: string
}

export interface IConfigHeaders {
	headers: {
		[index: string]: string
	}
}
