import React from 'react';
import logo from '@/images/logo.png';
export default function ApplicationLogo({ className }) {
    return (
        <img src={logo} alt='LOGO' className={'h-20 w-20 '+className}/>
    );
}
