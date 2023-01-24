import React  from 'react'
import Normal from './Normal';
import Purecomponent from './Purecomponent'


class Parent extends React.Component{

    constructor(){
        super()
        this.state = {
            name:"veera"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : "Veera"
            })
        }, 2000)
    }

    render(){
        return(
            <div>
                <Normal name={this.state.name}/>
                <Purecomponent name={this.state.name}/>

            </div>
        )
    }
}
export default React.memo(Parent);