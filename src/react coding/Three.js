import React from 'react'

class Three extends React.Component{


//     [{
//         "id":"1",
//         name:"Veera",
//         age:30
//     },
//     {
//         "id":"2",
//         name:"Veera",
//         age:30
//     },
//     {
//         "id":"3",
//         name:"Veera",
//         age:30
//     }
// ]

// arr = arr1.find( id==3)


    constructor(props){
        super(props);
        this.state ={
            id:10,
            name:"Veera",
            age:30
        }
    }


    render()
        { 
            return(
                <div>
                    
                    <h1> {this.props.bbb} </h1>

                    {this.props.name}
                <h1> Hiii</h1>
                <h2> {this.state.name}</h2>
                </div>
            )
        }
    
}

export default Three;