import React from 'react';
import '../styles/profile.css'; // Import the separate CSS file for the component

export const Profile = () => {
    // Sample data for demonstration purposes
    const user = {
        name: 'ALEXA ELANGO',
        email: 'alexa.elango@gmail.com',
        image: '/Pictures 2.png', // Placeholder image URL
    };

    return (
        <div className="profile-container">
            <img src={user.image} alt="Profile" className="profile-image" />
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">{user.email}</p>
        </div>
    );
};

export default Profile;
