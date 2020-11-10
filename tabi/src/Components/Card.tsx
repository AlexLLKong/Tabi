import React, { FC } from 'react'
import styles from './Card.module.css'
type Props = {}

export const Card: FC<Props> = ({ children }) => (
	<div className={styles.card}>
		<div className={children ? styles.footer : ''}>{children}</div>
	</div>
)
