import React from "react"
import ReactDOM from "react-dom"
// import App from "./components/app"
import App from "./containers/App/App"

ReactDOM.render(<App />, document.querySelector("#root"))

// if (module.hot) {
// 	module.hot.accept("./components/app", () => {
// 		const NextApp = require("./components/app").default
// 		ReactDOM.render(<NextApp />, document.querySelector("root"))
// 	})
// }
