

import React, { Component } from 'react'

export class Contextb extends Component {
  render() {
    return (
      <div>

        <Contextb.Consumer>
            {value}
        </Contextb.Consumer>

      </div>
    )
  }
}

export default Contextb;













// import React from 'react';
// import Contextc from './Contextc'

// function Contextb(props){
//     return(
//         <div>
//             <h1> Hii B</h1>
//             <Contextc></Contextc>
//         </div>
//     )
// }

// export default Contextb;