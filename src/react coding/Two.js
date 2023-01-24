import React from 'react'

class Two extends React.Component{
    constructor(){
        super()
        this.state = {
          text : 'Veera',
          marks:20
        }
    }
    
    changeText(){
        this.setState({
            text: 'Ramu',
            marks:30
        })
    }

    render(){
        return(
            <div>
                <h1> {this.state.text} </h1>
                <h1> {this.state.marks} </h1>
                <button onClick={() => this.changeText()}>Click Here </button>
            </div>
        )
    }

}

export default Two;
