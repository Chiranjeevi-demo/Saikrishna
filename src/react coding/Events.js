import React from "react";

class Events extends React.Component{
constructor(props){
    super(props)

this.handleClick1 = this.handleClick1.bind(this)
}

     handleClick = (name, age)=> {
        console.log('abcdef...', name, age)
    }

     handleClick1 =(e) => {
        this.handleClick('siva', 20)
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick1}> Click Here </button>
            </div>
        )
    }
}

export default Events;