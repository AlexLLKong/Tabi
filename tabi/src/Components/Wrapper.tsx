import React, { FC } from 'react'
import styles from './Wrapper.module.css'
type Props = {}

export const Wrapper: FC<Props> = ({ children }) => (
	<div className={styles.wrapper}>{children}</div>
)
