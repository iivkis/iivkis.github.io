import React from 'react';

class Button extends React.Component{

	render(){
		return(
			<div className={"btn btn-"+this.props.theme} onClick={this.props.on_click}>
				<span>
					{this.props.children}
				</span>
			</div>
			)
	}
}

export default Button;