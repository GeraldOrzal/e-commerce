import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';
import Footer from '@/Components/Footer';
import SearchBar from '@/Components/SearchBar';
export default function Authenticated({ auth, header, children }) {
    console.log(children);
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="bg-primary">
            <nav className="max-w-7xl w-full mx-auto bg-primary">
                <div className='mx-auto flex flex-row space-x-4 underline py-2
                  md:text-base md:justify-end md:px-4
                  xs:text-sm xs:justify-center xs:px-0'>
                    <Link> About Us</Link>
                    <Link> Contact Us</Link>
                    <Link> Track Order</Link>
                </div>
                <header className='max-w-7xl w-full flex flex-row justify-center items-center md:px-5 xs:px-1'>
                    <SearchBar
                        auth={auth}
                    />
                </header>

            </nav>
            {header && (
                <header >
                    <div className="max-w-7xl w-full mx-auto bg-primary py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main className='bg-primary'>{children}</main>
            <Footer />
        </div>
    );
}
