import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
import React from 'react'

const PrivateLayout = ({ children }) => {
    return (
        <div className='PL'>
            <Sidebar />
            <main className='pmain'>{children}</main>
            <Footer />
        </div>
    )
};

export default PrivateLayout;
