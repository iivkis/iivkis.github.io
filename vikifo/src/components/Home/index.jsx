import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './scss/home.scss';

class Home extends Component {
	render() {
		return (
			<div className="home__container">
				<div className="row home__container_inputWrap">
					<input type="text" 
						className="home__container_inputWrap_input" 
						placeholder="Ссылка на страницу в vk" 
						value={this.props.state.valPageId}
						onChange={this.props.handleValPageId}
						/>
				</div>
				
				<div className="row home__container_btnWrap">
					<div className="btn btn_primary" onClick={()=>this.props.clickSearch(this.props)}>
						<span>Найти</span>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Home)