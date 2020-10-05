import React,{ Component} from 'react'

class welcome extends Component{
    render(){
        const {name, role,children} =this.props
        return(
        <div>
            <h1>welcome {name} role {role}</h1>
            {children}
        </div>
        )
    }
}


export default welcome