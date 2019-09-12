import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BillsApp from './BillsApp';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Marcus'
		};
	}
	render() {
		return (
			<div className="app-container">
				<BillsApp />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('App'));
