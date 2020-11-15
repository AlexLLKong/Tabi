import React, { FC } from 'react'
import styles from './Card.module.css'
type Props = { img?: JSX.Element }

export const Card: FC<Props> = ({ img, children }) => (
	<div className={styles.card}>
		{img}
		<div className={children ? styles.footer : ''}>{children}</div>
	</div>
)
