import React from 'react';


class Nav extends React.Component {

    render() {
        return (
            <div className="child nav">
                <a href= "#home"> <h2>Home</h2> </a>
                <a href= "#profile"> <h2>Profile</h2> </a>
                <a href= "#bookmarks"> <h2>Bookmarks</h2> </a>
                
            </div>
        )
    }
}

export default Nav;