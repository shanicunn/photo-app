import React from 'react';

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
        return (
            <div className="child userLog">
                {
                if (this.loggedIn == true) {
                    <button onClick={this.logOut}><h2>Log Out</h2></button>
                } else {
                    <button onClick={this.login}><h2>Log In</h2></button>
                }
            }
            </div>
        )
    }
}
export default UserLog;