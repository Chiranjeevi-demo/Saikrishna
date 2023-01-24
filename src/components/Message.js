import React, {Component} from 'react'
// if we click change the data
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Welcome to My Home"
        }
    }
    changeMessage(){
        this.setState({
            message:"Thank You for coming"
        })
    }
    render(){
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Click</button>
            </div>
        )
    }
}
export default Message