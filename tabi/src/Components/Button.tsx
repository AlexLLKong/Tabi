import React, { MouseEvent, FC } from 'react'
type Props = { className: string; onClick(e: MouseEvent<HTMLElement>): void }
export const Button: FC<Props> = ({
	className: classes,
	onClick: handleClick,
	children,
}) => (
	<button className={classes} onClick={handleClick}>
		{children}
	</button>
)
