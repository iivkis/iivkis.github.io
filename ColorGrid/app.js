var Wrap = document.getElementById('wrap')

var Grid = React.createClass({
	
	getInitialState: function(){
		return{
			colors:[]
		}
	},

	addColor: function(){
		let new_color = this.refs.cinput.value
		if ( (new_color != '') && (new_color.length <= 7) ){ 
			let c = this.state.colors
			c.push(new_color)
			this.setState({colors:c})
		}
	},

	render: function(){
		return(
			<div>
				<div id="panel" className="row row-around">
					<input ref="cinput" type="text" id="color_input" placeholder="Цвет в HEX (#FFF, #000, #14EE7B)"/>
					<div id="btn_create" onClick={this.addColor} className="btn btn-green"><span>Create</span></div>
				</div>

				<div id="color_items" className="row row-left">
					{
						this.state.colors.map(function(item,i){
							return(
								<div key={i} className="color_item" style={{background:item}}>{item}</div>
							)
						})
					}
				</div> 
			</div>
		)
	}

})

ReactDOM.render(<Grid/>,Wrap)