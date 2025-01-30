import React from 'react';
import './App.css';
import Logo from './components/Logo';
import SocialLinks from './components/SocialLinks.js';
import ComingSoon from './components/ComingSoon';
import Email from './components/Email';
import GnvLogo from './components/GnvLogo';
import HoursTrackingForm from './components/HoursTrackingForm';

function App() {
    return (
        <div className="container">
            <Logo />
            <HoursTrackingForm />
            <GnvLogo />
        </div>
    );
}

export default App;
