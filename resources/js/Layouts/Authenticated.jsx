import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';
import Footer from '@/Components/Footer';
import SearchBar from '@/Components/SearchBar';
export default function Authenticated({ auth, header, children }) {
    console.log(auth);
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-thirdary">
            <nav className="bg-primary">
                <div className='flex flex-row justify-end space-x-2 p-2 underline'>
                    <Link
                        
                    > About Us</Link>
                    <Link> Contact Us</Link>
                    <Link> Track Order</Link>
                </div>
                <header className='container-fluid mb-2 flex flex-row justify-center items-center space-x-20 px-5'>
                  <SearchBar
                    auth={auth}
                  />
                </header>  
              
            </nav>

            {header && (
                <header >
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
            <Footer/>
        </div>
    );
}
