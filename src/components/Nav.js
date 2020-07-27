import React from 'react';
import UserLog from './UserLog';

class Nav extends React.Component {

    render() {
        return (
            <div className="child nav">
                <a href= "#home"> <h2>Home</h2> </a>
                <a href= "#profile"> <h2>Profile</h2> </a>
                <a href= "#bookmarks"> <h2>Bookmarks</h2> </a>
                <UserLog />
            </div>
        )
    }
}

export default Nav;