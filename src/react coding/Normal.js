import React from 'react'

class Normal extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log("Normal component")
        return(
            <div>
                    <h1> Normal Compnent</h1>
                    <h2> name : {this.props.name}</h2>
            </div>
        )
    }
}
export default Normal;