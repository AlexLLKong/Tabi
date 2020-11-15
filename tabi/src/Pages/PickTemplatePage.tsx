import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ITemplatePage, ITemplateReduxProps } from '../interfaces'
import { loadTemplates } from '../Actions/TemplateActions'
import { Wrapper } from '../Components/Wrapper'
import { Card } from '../Components/Card'
import pageStyles from './Pages.module.css'
import styles from './PickTemplatePage.module.css'
const PickTemplatePage = ({ template, loadTemplates }: ITemplatePage) => {
	useEffect(() => {
		loadTemplates()
	}, [loadTemplates])
	const { templates } = template
	const generateCards = (): JSX.Element[] => {
		let returnArr: JSX.Element[] = []
		for (let i: number = 0; i < templates.length; i++) {
			returnArr.push(
				<Card
					key={`Card${i}`}
					img={
						<img
							src={templates[i].preview}
							alt={`${templates[i].name} preview`}
							className={styles.cardImg}
						/>
					}
					children={<h3>{templates[i].name}</h3>}
				/>
			)
		}
		return returnArr
	}

	return (
		<Wrapper>
			<h1 className={pageStyles.title}>Pick a Template</h1>
			<div className={pageStyles.cardContainer}>{generateCards()}</div>
		</Wrapper>
	)
}
const mapStatetoProps = (state: ITemplateReduxProps) => ({
	template: state.template,
})
export default connect(mapStatetoProps, { loadTemplates })(PickTemplatePage)
