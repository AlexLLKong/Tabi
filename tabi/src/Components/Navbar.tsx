import React from 'react'
import { NavLink } from 'react-router-dom'
import { IAppNavbar, IAuthReduxProps } from '../interfaces'
import { connect } from 'react-redux'
import styles from './Navbar.module.css'
import navlinkStyles from './Navlink.module.css'

const Navbar = ({ auth }: IAppNavbar) => {
	const authLinks = (
		<ul>
			<li className={navlinkStyles.navlink}>
				<NavLink to="/about">About</NavLink>
			</li>
			<li className={navlinkStyles.navlink}>
				<NavLink to="/trips">My Trips</NavLink>
			</li>
			<li className={navlinkStyles.navlink}>
				<NavLink to="/tripeditor">Trip Editor</NavLink>
			</li>
		</ul>
	)
	const guestLinks = (
		<ul>
			<li className={navlinkStyles.navlink}>
				<NavLink to="/about">About</NavLink>
			</li>
			<li className={navlinkStyles.navlink}>
				<NavLink to="/login">Login</NavLink>
			</li>
			<li className={navlinkStyles.navlink}>
				<NavLink to="/createaccount">Create Account</NavLink>
			</li>
		</ul>
	)
	return (
		<nav className={styles.navbar}>
			<NavLink className={navlinkStyles.brandLink} to="/">
				Tabi
			</NavLink>
			{auth && auth.isAuthenticated ? authLinks : guestLinks}
		</nav>
	)
}
const mapStateToProps = (state: IAuthReduxProps) => ({
	auth: state.auth,
})

export default connect(mapStateToProps, null)(Navbar)
