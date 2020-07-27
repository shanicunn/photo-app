import React from 'react';

// Conditional Rendering Source
// https://stackoverflow.com/questions/40477245/is-it-possible-to-use-if-else-statement-in-react-render-function

class UserLog extends React.Component {
    constructor () {
        super ()
        this.state = {
            loggedIn: true,
        }
    }
    login = () => {
        this.setState({
            loggedIn: true,
        })
    }
    logOut = () => {
        this.setState({
            loggedIn: false,
        })
    }
    render () {
        const loggedIn = this.state.loggedIn;
        return (
            <div className="child userLog">
                {(() => {
                    if (loggedIn) {
                    return (
                        <button onClick={this.logOut}><h2>Log Out</h2></button>
                    )
                    } else {
                    return (
                        <button onClick={this.login}><h2>Log In</h2></button>
                    )
                    }
                })()}
                {/* if (loggedIn) {
                    <button onClick={this.logOut}><h2>Log Out</h2></button>
                } else {
                    <button onClick={this.login}><h2>Log In</h2></button>
                } */}
            
            </div>
        )
    }
}
export default UserLog;