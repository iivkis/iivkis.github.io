import React from 'react';

class Input extends React.Component {

	render(){
		return(
			<div className="row row-around">
				<input 
					id={this.props.id} 
					type={this.props.type}
					placeholder={this.props.pl}
					defaultValue={this.props.value}
					className="form__input"
					onChange={this.props.on_change}
					/>
			</div>
		)
	}
}

export default Input;