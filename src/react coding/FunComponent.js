import React ,{useState, useEffect} from 'react'

function FunComponent(){
    const [user, setUser] = useState(false)

    const [counter , setCounter] = useState(0);

    useEffect(() => {
        console.log('veera 111');
        setUser(true);
    }
    )
 
    return(
        <div>
            <h1> Use effect </h1>
           
            {user && <div>
                veera 2222
                </div>}
                    {console.log('veeraaaaa' )}
                {!user && <div>
                    veera 333
                     </div>}

                     <h1> Counter : {counter} </h1>
        </div>
    )
}
export default FunComponent;