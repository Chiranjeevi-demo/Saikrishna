import React from 'react'

class Count extends React.Component{

    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    
    increment(){
        this.setState({
            count : this.state.count + 1
        })
    }
     
    render(){
        return(
            <div>
                <h1> Counter in Class Component</h1>

                <h2> Counter {this.state.count} </h2>

                <button onClick={()=>this.increment()}> Click </button>
            </div>
        )
    }
}

export default Count;