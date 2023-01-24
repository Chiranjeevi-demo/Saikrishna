import React from 'react'

class Conditional extends React.Component{

constructor(props){
    super(props);

}

    render()
    {
        return(
            <div>

               {/* <h1> {this.props.name1}</h1> 
                 <h1> Number: {this.props.number1}</h1>
                <h1> Array: {this.props.arr1}</h1>
             <h1> Object: {this.props.obj1.name}</h1>
              <h1> Conditional: {this.props.condition1} </h1> */}
             <h2> {this.props.condition?.age }</h2> 
            </div>
        )
    } 
}

export default Conditional;
//?. optional chaining operator