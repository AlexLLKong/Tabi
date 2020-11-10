import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { LandingPage } from './Pages/LandingPage'
import { MyTripsPage } from './Pages/MyTripsPage'
import { PickTemplatePage } from './Pages/PickTemplatePage'
import { TripEditorPage } from './Pages/TripEditorPage'
function App() {
	return (
		<Router>
			<div>
				<div>
					<Navbar />
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/trips">
							<MyTripsPage />
						</Route>
						<Route path="/templates">
							<PickTemplatePage />
						</Route>
						<Route path="/tripeditor">
							<TripEditorPage />
						</Route>
						<Route path="/">
							<LandingPage />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App

function About() {
	return <h2>About</h2>
}
