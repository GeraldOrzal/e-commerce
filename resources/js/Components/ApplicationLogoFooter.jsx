import React from 'react';
import logo from '../images/LTSCLogoFull.png';
export default function ApplicationLogoFooter({ className }) {
    return (
        <img src={logo} alt='LOGO' className={'h100% w-100% '+className}/>
    );
}
