import React, { FC, useEffect, useState } from 'react'
import styles from './EditFieldContainer.module.css'
import { Wrapper } from './Wrapper'
type Props = { content: JSX.Element }
const useInput = (
	type: string
): [string, JSX.Element, React.Dispatch<React.SetStateAction<string>>] => {
	const [value, setValue] = useState('')
	const input = (
		<input
			className={styles.editField}
			value={value}
			onChange={e => setValue(e.target.value)}
			type={type}
			placeholder="Edit selection"
		/>
	)
	return [value, input, setValue]
}
const getEditableElements = (): NodeListOf<HTMLElement> => {
	return document.querySelectorAll("[data-editable= 'true']")
}
export const EditFieldContainer: FC<Props> = ({ content }) => {
	let [editElement, setEditElement] = useState<HTMLElement | null>(null)
	let [newValue, newValueInput, setValue] = useInput('text')
	useEffect(() => {
		const editableElements = getEditableElements()
		const handleClick = (e: Event, element: HTMLElement) => {
			e.preventDefault()
			setEditElement(editElement => element)
			setValue(element.innerHTML)
		}
		let clickEventHandlers: { (e: Event): void }[] = []
		editableElements.forEach(element => {
			const handler = (e: Event) => {
				handleClick(e, element)
			}
			clickEventHandlers.push(handler)
			element.addEventListener('click', handler)
		})
		return () => {
			for (let i = 0; i < editableElements.length; i++) {
				editableElements[i].removeEventListener(
					'click',
					clickEventHandlers[i]
				)
			}
		}
	}, [setValue])
	useEffect(() => {
		if (editElement) editElement.innerHTML = newValue
	}, [newValue, editElement])
	return (
		<div className={styles.mainContainer}>
			<Wrapper>{newValueInput}</Wrapper>
			<div className={styles.contentContainer}>{content}</div>
		</div>
	)
}
