import React from 'react';
import Items from './Items'
import './Budget.css'

export default class App extends React.Component {
  constructor() {
		super()
		this.state = {
			items: [],
			balance: 0,
			currentCount: 4
			
			
		},
			this.timer = this.timer.bind(this)
	}
	
	
	componentDidMount() {
	  var intervalId = setInterval(this.timer, 1000);
	  this.setState({intervalId: intervalId});
    }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
			
  }

  timer() {
	  if(this.state.currentCount == 1) {
		 this.componentWillUnmount()
	  }
    this.setState({ currentCount: this.state.currentCount -1 });
	  
  }
	
	
	
	addMoney(e) {
		e.preventDefault();
		
		var arr = this.state.items
		var add =  this.state.balance
		
		
		if(this.refs.description.value !== "" && isNaN(this.refs.amount.value) == false) {
			arr.push({text: this.refs.description.value, 
					 amount: this.refs.amount.value,
					 color: 'green'})
			
		 this.setState({items: arr})
		 this.refs.description.value = ""
			
		} 
		  if (this.refs.amount.value != "" && isNaN(this.refs.amount.value) == false){
			
		    var amount = parseInt(add) + parseInt(this.refs.amount.value)
			this.setState({balance: amount})
			this.refs.amount.value = ""
		}
		
		
		
    }
	
	minusMoney(e){
		e.preventDefault();
		var arr = this.state.items
		var minus =  this.state.balance
		
		if(this.refs.description.value !== "" && isNaN(this.refs.amount.value) == false) {
			arr.push({text: this.refs.description.value, 
					 amount: this.refs.amount.value,
					 color: 'red'})
			
		 this.setState({items: arr})
		 this.refs.description.value = ""
			
		} 
		  if (this.refs.amount.value != "" && isNaN(this.refs.amount.value) == false){
		
			var amount = parseInt(minus) - parseInt(this.refs.amount.value)
			this.setState({balance: amount})
			this.refs.amount.value = ""
		}
		
	}
	
	
   render(){
	   
	   let total;
	   let message;
	   
	   	if(this.state.balance <= 500){
			total = <h1 className="red">{this.state.balance}</h1>
		} else {
			total = <h1 className="green">{this.state.balance}</h1>
		}
	   
	   if(this.state.currentCount > 1) {
		   message = <h2>Use the plus sign for income, and the minus for expenses</h2>
	   } else {
		   message;
	   }
		   
	   return(
			<div className='budgetMain' id="container">
			   <div className="header">
				  		<h1>{total}</h1>
				   		<h2>{message}</h2>
					   <input ref="amount" placeholder="enter amount" className="first"></input>
				   	   <input ref="description" placeholder="enter description" className="second"></input>
					   <button onClick={this.addMoney.bind(this)}>+</button>
					   <button onClick={this.minusMoney.bind(this)}>-</button>
				
			   </div>
			   <Items entry={this.state.items}
				      amount={this.state.balance}
				   	  color={this.state.color}  
				   />
		   </div>
	   )
   }
}


