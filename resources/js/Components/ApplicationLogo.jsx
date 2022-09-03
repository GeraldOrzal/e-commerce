import React from 'react';

export default function ApplicationLogo({ className }) {
    return (
        <img src="/images/logo.png" alt='LOGO' className={'h-full w-full '+className}/>
    );
}
