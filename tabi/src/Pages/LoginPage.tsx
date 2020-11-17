import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { login } from '../Actions/AuthActions'
import { clearErrors } from '../Actions/ErrorActions'
import { ILoginPage, ITarget, IAuthReduxProps } from '../interfaces'
import { Wrapper } from '../Components/Wrapper'
import { Redirect } from 'react-router-dom'
import pageStyles from './Pages.module.css'
import styles from './AuthPage.module.css'
const LoginPage = ({
	isAuthenticated,
	error,
	login,
	clearErrors,
}: ILoginPage) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [msg, setMsg] = useState(null)

	const handleChangeEmail = (e: ITarget) => setEmail(e.target.value)
	const handleChangePassword = (e: ITarget) => setPassword(e.target.value)

	const handleOnSubmit = (e: any) => {
		e.preventDefault()
		const user = { id: '', email, password }
		login(user)
	}

	const RedirectHome = () => <Redirect to="/" />

	useEffect(() => {
		if (error.id === 'LOGIN_FAIL') {
			setMsg(error.msg.msg)
		} else {
			setMsg(null)
		}
	}, [error])

	return (
		<Wrapper>
			{isAuthenticated ? <RedirectHome /> : null}
			<h1 className={pageStyles.title}>Login</h1>
			<form className={styles.form} onSubmit={handleOnSubmit}>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					onChange={handleChangeEmail}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Password"
					onChange={handleChangePassword}
				/>
				<button className={styles.btn}>Login</button>
				{msg ? <p className={styles.error}>{msg}</p> : null}
			</form>
		</Wrapper>
	)
}

const mapStatetoProps = (state: IAuthReduxProps) => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error,
})

export default connect(mapStatetoProps, { login, clearErrors })(LoginPage)
