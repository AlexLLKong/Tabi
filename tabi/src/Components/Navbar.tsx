import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import navlinkStyles from './Navlink.module.css'

export const Navbar: FC = () => (
	<nav className={styles.navbar}>
		<NavLink className={navlinkStyles.brandLink} to="/">
			Tabi
		</NavLink>
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
	</nav>
)
