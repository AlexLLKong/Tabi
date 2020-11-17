import React, { useEffect, useState } from 'react'
import styles from './EditFieldContainer.module.css'
import { connect } from 'react-redux'
import { saveTrip } from '../Actions/TripActions'
import { Wrapper } from './Wrapper'
import { Button } from './Button'
import {
	IEditFieldContainer,
	IEditFieldContainerReduxProps,
	ITrip,
} from '../interfaces'

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
const EditFieldContainer = ({
	content,
	trip,
	auth,
	saveTrip,
}: IEditFieldContainer) => {
	let [editElement, setEditElement] = useState<HTMLElement | null>(null)
	let [newValue, newValueInput, setValue] = useInput('text')
	let [name, setName] = useState('')
	let [nameElement, setNameElement] = useState<HTMLElement | null>(null)
	let [html, setHtml] = useState('')
	let [containerElement, setContainerElement] = useState<HTMLElement | null>(
		null
	)
	useEffect(() => {
		const editableElements = getEditableElements()
		const handleClick = (e: Event, element: HTMLElement) => {
			e.preventDefault()
			setEditElement(editElement => element)
			setValue(element.innerHTML)
		}
		setNameElement(nameElement => document.querySelector('#name'))
		setContainerElement(containerElement =>
			document.querySelector('#templateContainer')
		)
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
	}, [setValue, content])

	useEffect(() => {
		if (editElement) editElement.innerHTML = newValue
		if (nameElement) setName(nameElement.innerHTML)
		if (containerElement) setHtml(containerElement.outerHTML)
	}, [newValue, editElement, nameElement, containerElement])

	const handleSaveTrip = (e: any) => {
		e.preventDefault()
		const newTrip: ITrip = {
			name: name,
			html: html,
			css: trip.selectedTrip.css,
			imgs: [...trip.selectedTrip.imgs],
			preview: '',
			_id: trip.selectedTrip._id ? trip.selectedTrip._id : '',
		}
		saveTrip(newTrip, auth.user.id)
	}
	return (
		<div className={styles.mainContainer}>
			<Wrapper>
				{newValueInput}
				<Button
					disabled={auth.isAuthenticated ? false : true}
					className={styles.btn}
					onClick={handleSaveTrip}
				>
					Save Trip
				</Button>
			</Wrapper>
			<div className={styles.contentContainer}>{content}</div>
		</div>
	)
}
const mapStateToProps = (state: IEditFieldContainerReduxProps) => ({
	trip: state.trip,
	auth: state.auth,
})
export default connect(mapStateToProps, { saveTrip })(EditFieldContainer)
