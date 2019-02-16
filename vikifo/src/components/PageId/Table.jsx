import React, {Component} from 'react';

const TableItem = (props) => (
	<div className="pageId__table_item">
		<div className="pageId__table_item_nameWrap">
			<span className="pageId__table_item_nameWrap_name">
				{props.name}
			</span>
		</div>
		<div className="pageId__table_item_textWrap">
			<span className="pageId__table_item_textWrap_text">
				{props.text}
			</span>
		</div>
		<div className="pageId__table_item_copyText">
			<span className="pageId__table_item_copyText_text" onClick={()=>{props.clickCopy(props.text)}}>
				Copy
			</span>
		</div>
	</div>
)

class Table extends Component {
	render() {
		return (
			<div className="pageId__table">
				{
					this.props.data.map( (i,k)=>{
						return(
							<TableItem name={i.name} text={i.text} key={k} clickCopy={this.props.clickCopy}/>
						)
					})
				}
			</div>
		);
	}
}

export default Table;