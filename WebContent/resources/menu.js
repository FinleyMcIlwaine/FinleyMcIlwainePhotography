document.addEventListener("DOMContentLoaded", function () {
alert('test');
const domContainer = document.querySelector('#reactContainer');
class Button extends React.Component {
	handleClick = () => {
  	this.props.onClickFunction(this.props.incrementValue);
  };
  
	render() {
  	return (
    	<button onClick={this.handleClick}>+{this.props.incrementValue}</button>
  	);
  }
}

const Result = (props) => {
	return (
  	<div>{props.counterValue}</div>
  );
};

class App extends React.Component {
	state = {counter: 0};
  
  incrementCounter = (amount) => {
  	this.setState((prevState) => ({counter: prevState.counter + amount}));
  };
  
	render() {
  	return (
    	<div>
      	<Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Result counterValue={this.state.counter}/>
      </div>
    );
  }
};



ReactDOM.render(<App />, domContainer);
});

console.log('loaded');