import React, { MouseEvent, FC } from 'react'
type Props = {
	disabled?: boolean
	className: string
	onClick(e: MouseEvent<HTMLElement>): void
}
export const Button: FC<Props> = ({
	disabled,
	className: classes,
	onClick: handleClick,
	children,
}) => {
	return (
		<button disabled={disabled} className={classes} onClick={handleClick}>
			{children}
		</button>
	)
}
