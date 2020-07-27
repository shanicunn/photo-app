import React from 'react';
import Nav from './Nav';

class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
         
        }
    }
    render () {
        return (
            <div className="child home">
                <Nav />
            </div>
        )
    }
}

export default Home;