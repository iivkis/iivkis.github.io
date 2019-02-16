import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import './scss/pageId.scss';

import Header from './Header';
import Table from './Table';

class PageId extends Component {
	componentDidMount() {
		let idx = this.props.match.params.idx;
		this.props.queryGetUserData(idx);			
	}

	render() {
		return (
			<div>
				<Header state={this.props.state} handleValToken={this.props.handleValToken}/>
				<Table data={this.props.state.userData} clickCopy={this.props.clickCopy}/>
			</div>
		)
	}
}

export default withRouter(PageId);