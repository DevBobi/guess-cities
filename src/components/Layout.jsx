import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='container mx-auto shadow-lg flex justify-center items-center min-h-screen'>{children}</div>
    )
}

export default Layout