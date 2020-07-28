import React from 'react';
import PhotoGrid from './PhotoGrid';
import Nav from './Nav';
import UserLog from './UserLog';
import profilePic from '../assets/profilepic.jpeg'

class Profile extends React.Component {

    render() {

    
        return (
            <div className="child profile">
                <div className="profile-nav">
                    <Nav />
                </div>
                <div className="content">
                     {/* Profile Image */}
                    <img className="profile-pic" src={profilePic} alt=""></img>

                    {/* Username Here */}
                    <h1>shanicunn</h1>
                    <p>Boston to Atlanta. 26. Software Developer.</p>
                    <div>
                     <UserLog />   
                    </div>
                    
                    {/* Grid of Photos */}
                    <PhotoGrid />
                    
                </div>


               
            </div>
        )
    
    }
}
export default Profile;