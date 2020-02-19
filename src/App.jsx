import React from "react";
import "./App.css";

import Die from "./Die/Die";

function App() {
	return (
		<div className='App'>
			<Die face='five' />
			<Die face='six' />
			<Die face='two' />
			<Die face='three' />
		</div>
	);
}

export default App;
