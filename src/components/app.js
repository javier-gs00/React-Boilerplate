import React from "react"
import "../style/style.less"
import logo from "../assets/img/logo.svg"
import { hot } from "react-hot-loader"

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			counter: 0
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React-Less-Template</h1>
					<h2 className="App-title">Hot Counter: {this.state.counter}</h2>
				</header>
				<p className="App-intro">
					To get finished, edit <code>src/components/app.js</code> and save to reload.
				</p>
				<p className="App-intro">Style, Logo and some webpack configuration taken from the Create React App team. Props to them for all their work.</p>
				<p className="App-intro">
					<button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Increment</button>
				</p>
			</div>
		)
	}
}

export default hot(module)(App)
