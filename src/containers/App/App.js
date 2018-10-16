import React from "react"
import { Header } from "../../components/Header/Header"
import { Button } from "../../components/Button/Button"
import { hot } from "react-hot-loader"
import "./app.less"

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			counter: 0
		}
		this.incrementCounter = this.incrementCounter.bind(this)
	}

	incrementCounter() {
		this.setState({ counter: this.state.counter + 1 })
	}

	render() {
		return (
			<div className="App">
				<Header counter={this.state.counter} />
				<p className="App-intro">
					To get finished, edit <code>src/components/app.js</code> and save to reload.
				</p>
				<p className="App-intro">Style, Logo and some webpack configuration taken from the Create React App team. Props to them for all their work.</p>
				<p className="App-intro">
					<Button incrementCounter={this.incrementCounter} />
				</p>
			</div>
		)
	}
}

export default hot(module)(App)
