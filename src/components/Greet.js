import React from 'react'

// function Greet(props){
//     const {name,role,children}=props
//     return(
//         <div>
//             <h1>Hello {name} role {role}</h1>
//             {children}
//         </div>
//         )
// }
const Greet = props =>{
    const {name,role,children}=props
    return( 
        <div>
            <h1>Hello {name} role {role}!</h1>
            {children}
        </div>
    )
}

export default Greet