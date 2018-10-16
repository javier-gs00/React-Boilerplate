import React from "react"
import logo from "../../assets/img/logo.svg"
import "./header.less"

export const Header = props => (
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<h1 className="App-title">Welcome 2 React-Less-Template</h1>
		<h2 className="App-title">Hot Counter: {props.counter}</h2>
	</header>
)
