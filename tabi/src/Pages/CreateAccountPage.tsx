import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { register } from '../Actions/AuthActions'
import { clearErrors } from '../Actions/ErrorActions'
import { IRegisterPage, ITarget, IAuthReduxProps } from '../interfaces'
import { Redirect } from 'react-router-dom'
import { Wrapper } from '../Components/Wrapper'
import pageStyles from './Pages.module.css'
import styles from './AuthPage.module.css'

const CreateAccountPage = ({
	isAuthenticated,
	error,
	register,
	clearErrors,
}: IRegisterPage) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [msg, setMsg] = useState(null)

	const handleChangeName = (e: ITarget) => setName(e.target.value)
	const handleChangeEmail = (e: ITarget) => setEmail(e.target.value)
	const handleChangePassword = (e: ITarget) => setPassword(e.target.value)

	const handleOnSubmit = (e: any) => {
		e.preventDefault()
		const user = {
			name,
			email,
			password,
		}
		register(user)
	}

	const RedirectHome = () => <Redirect to="/" />

	useEffect(() => {
		if (error.id === 'REGISTER_FAIL') {
			setMsg(error.msg.msg)
		} else {
			setMsg(null)
		}
	}, [error, isAuthenticated])
	return (
		<Wrapper>
			{isAuthenticated ? <RedirectHome /> : null}
			<h1 className={pageStyles.title}>Create an Account</h1>
			<form className={styles.form} onSubmit={handleOnSubmit}>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Name"
					onChange={handleChangeName}
				/>
				<label htmlFor="name">Email</label>
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
				<button className={styles.btn}>Register</button>
				{msg ? <p className={styles.error}>{msg}</p> : null}
			</form>
		</Wrapper>
	)
}
const mapStateToProps = (state: IAuthReduxProps) => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error,
})
export default connect(mapStateToProps, { register, clearErrors })(
	CreateAccountPage
)
