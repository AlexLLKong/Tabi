import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import { connect } from 'react-redux'
import { ITripReduxProps, ITripEditorPage } from '../interfaces'
import EditFieldContainer from '../Components/EditFieldContainer'
import { Wrapper } from '../Components/Wrapper'
// import pageStyles from './Pages.module.css'
//type Props = { content: JSX.Element }
const mockContent: JSX.Element = (
	<div>
		<h1 data-editable="true">Loading...</h1>
		<p data-editable="true"></p>
	</div>
)
const TripEditorPage = ({ trip }: ITripEditorPage) => {
	let [html, setHtml] = useState<JSX.Element | JSX.Element[] | null>(null)
	let [style] = useState<HTMLElement>(() => {
		let sty = document.querySelector<HTMLElement>('#tripCss')
		if (sty) return sty
		else {
			sty = document.createElement('style')
			sty.id = 'tripCss'
		}
		return sty
	})
	useEffect(() => {
		const selectedTrip = trip.selectedTrip
		if (selectedTrip)
			document.querySelectorAll('img').forEach((img, i) => {
				img.src = trip.selectedTrip.imgs[i]
			})
	}, [trip, html])
	useEffect(() => {
		const selectedTrip = trip.selectedTrip
		if (selectedTrip) {
			setHtml(selectedTrip ? parse(selectedTrip.html) : null)
			style.innerHTML = selectedTrip ? selectedTrip.css : ''
			document.getElementsByTagName('head')[0].appendChild(style)
		}
	}, [trip, style])

	return (
		<Wrapper>
			<EditFieldContainer content={html ? html : mockContent} />
		</Wrapper>
	)
}
const mapStatetoProps = (state: ITripReduxProps) => ({
	trip: state.trip,
})
export default connect(mapStatetoProps, {})(TripEditorPage)
