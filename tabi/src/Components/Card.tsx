import React, { FC, MouseEvent } from 'react'
import styles from './Card.module.css'
type Props = { img?: JSX.Element; onClick?(e: MouseEvent<HTMLElement>): void }

export const Card: FC<Props> = ({ img, children, onClick }) => (
	<div className={styles.card} onClick={onClick}>
		{img}
		<div className={children ? styles.footer : ''}>{children}</div>
	</div>
)
