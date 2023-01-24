import React from 'react'

class Classupdate extends React.Component{
    constructor(){
        super()
        this.state = {
          text : 'Please Subscribe'
        }
    }
    
    changeText(){
        this.setState({
            text: 'Thank You For Subscribe'
        })
    }

    render(){
        return(
            <div>
                <h1> {this.state.text} </h1>
                <button onClick={() => this.changeText()}> Subscribe Here </button>
            </div>
        )
    }

}

export default Classupdate;