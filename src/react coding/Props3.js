import React from 'react'
import Conditional from './Conditional';

class Props3 extends React.Component{

constructor(){
    super();
    this.state={
        name :"veera",
        age:30,
        city:"atp",
        admin:false
    }

}

    render()
    {
        return(
            <div>
                <h3> hii</h3>
                <Conditional 
                condition={(this.state)} />

                {/* <Conditional 
                condition={(this.state.admin) ? this.state.name : this.state.age} /> */}

            </div>
        )
    } 
}

export default Props3;