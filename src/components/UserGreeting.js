import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogedIn:false
        }
        this.logfun = this.logfun.bind(this)
        this.logoutfun= this.logoutfun.bind(this)
    
    }
    logfun(){
        this.setState({
            isLogedIn:true
        })
    }
    logoutfun(){
        this.setState({
            isLogedIn:false
        })
    }
    
    render() {

        
        if (this.state.isLogedIn){
            return(
                <div>
                <div>Faizan Ahmad Mudasar Hussain Shakeela</div>
                <button onClick={this.logoutfun}>Click to logout</button>
                </div>
            )
        }else{
            return(
                <div>
                <div>What is the name of goat ? </div>
                <button onClick={this.logfun}>Click to know</button>
                </div>
            )
        }
        
        return (
            <div>
                <div>Welcome Hassam</div>
                <div>Welcome Guest</div>
            </div>
        )
    }
}

export default UserGreeting
