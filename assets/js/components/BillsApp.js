import React, { Component } from 'react';
import Header from './Header';
import AllBills from './AllBills';

class BillsApp extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="bills-container" id="bills-cont">
				<Header />
				<AllBills />
			</div>
		);
	}
}
export default BillsApp;
