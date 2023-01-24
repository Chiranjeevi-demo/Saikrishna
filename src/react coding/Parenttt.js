import React from 'react';

class Parenttt extends React.Component {

    constructor(){
        super()
        this.state = {
            name:"veera"
        }
    }

    changeText(){
        this.setState({
            name:"Mahesh"
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.name}</h1>

                <button onClick={()=>this.changeText()}> Click Here </button>

                {/* <button onClick={()=>this.setState({ name:"Mahesh"})}> Click Here </button> */}
               
            </div>
        )
    }
}

export default Parenttt;