import React from 'react'

class  Counter extends React.Component{

    constructor(props) {
        super(props);
        this.state = { count: 0 };
      }

      increment() {
        this.setState(state => ({
            count: state.count + 1
        }));
      }

      componentDidMount() {
        this.interval = setInterval(() => this.increment(), 1000);
      }
      stopHandler(){
        clearInterval(this.interval);
      }
 
    render(){
    return(
        <div>
            <h1> Hiiii </h1>
            <h2> Counter : {this.state.count} </h2>
            <button  onClick={()=> this.stopHandler()}> Stop </button>
            <br/>
            <br/>
        </div>
    )
    }
}
export default Counter;