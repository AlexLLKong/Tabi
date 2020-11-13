import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../Actions/AuthActions'
import { ILogoutProps } from '../interfaces'
import styles from './Logout.module.css'
export const Logout = ({ logout }: ILogoutProps) => {
	return (
		<button className={styles.logout} onClick={logout}>
			Logout
		</button>
	)
}

export default connect(null, { logout })(Logout)
