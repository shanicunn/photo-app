import React from 'react';
import PhotoGrid from './Photo-Grid';

export class Profile extends React.Component {

    render() {

    
        return (
            <div className="child profile">

                {/* Profile Image */}
                <img className="profile-pic" src="" alt=""></img>

                {/* Username Here */}
                <h1>Username</h1>

                {/* Grid of Photos */}
                <PhotoGrid />
                
            </div>
        )
    
    }
}