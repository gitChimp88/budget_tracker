import React from 'react'

export default class Items extends React.Component {
	
	
	render() {
		
		let styleGreen = {
			color: 'green'
		}
		
		let styleRed = {
			color: 'red'
		}
		
		var items = this.props.entry
		var color = this.props.color
		
		var listItems = items.map((item, i)=>{
			if(item.color == "green"){
			return <div style={styleGreen}> <li>{item.text} : {item.amount}</li></div>
			} else {
			   return <div style={styleRed}> <li>{item.text} : {item.amount}</li></div>
			   }
		})
			
		return(
			<ul className="list">
				{listItems}
			</ul>
		)
	}
		
}

