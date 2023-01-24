import React, { Component } from 'react'
class Lifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "red",
            brand: "BMW",
            price: 2000000

        }
    }
    changeColor = () => {
        this.setState({color: "blue"});
      }
    render() {
        return (
            <div>
                <div>
                    <h2>I am {this.state.color} car</h2>
                    <p>Brand -{this.state.brand}  with price of {this.state.price}</p>
                    <p>shop {this.props.name} </p>
                    <p>shop {this.props.village} </p>

                    <button onClick={this.changeColor}>Click</button>
                </div>
            </div>
        )
    }
}
export default Lifecycle
