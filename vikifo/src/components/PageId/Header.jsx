import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<header className="pageId__header">
				<Link to="/" className="pageId__header_back btn btn_primary">
					<span>Назад</span>
				</Link>
				<div className="pageId__header_tokenInputWrap ">
					<input type="text" placeholder="Ваш token" className="pageId__header_tokenInputWrap_input" value={this.props.state.valToken} onChange={this.props.handleValToken} />
				</div>
			</header>
		);
	}
}

export default Header;