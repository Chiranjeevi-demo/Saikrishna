import React, { Component } from 'react'
class Nexted extends Component {
    render() {
        return (
            <div>
                <h2>Hello</h2>
                <How />
                <New />
                <New />
                <New />
                <New />
                <New />
            </div>
        )
    }
}

class How extends Component{
    render(){
        return(
            <div>What are you doing
                <New />
                <New />
                <New />
                 
            </div>
           
        )
    }
}

class New extends Component {
    render() {
        return (
            <div>
                
                <p> I am Chiranjeevi</p>
                

            </div>
        )
    }
}

export default Nexted;
