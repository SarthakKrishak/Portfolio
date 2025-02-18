import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const handleLink = () => {
        window.scrollTo(0, 0); // Scrolls to top after navigation
        };
    const handleHome = () => {
        window.scrollTo(0, 0); // Scrolls to top after navigation
        };

    return (
        <div className='w-full min-h-[20vh] mt-30 mb-16'>
            <hr className='text-[#1F2937] ml-3' />
            <div className='flex mt-9 gap-50'>
                <div className='flex flex-col text-[#6B7280] text-[1.1vw] gap-4 ml-4'>
                    <Link onClick={handleHome} to={"/"}>Home</Link>
                    <Link>Projects</Link>
                    <Link>Blog</Link>
                    <Link>Dashboard</Link>
                    <Link onClick={handleLink} to={"/links"}>Link</Link>
                </div>
                <div className='flex flex-col text-[#6B7280] text-[1.1vw] gap-4'>
                    <Link>Home</Link>
                    <Link>Projects</Link>
                    <Link>Blog</Link>
                    <Link>Dashboard</Link>
                    <Link>Link</Link>
                </div>
                <div className='flex flex-col text-[#6B7280] text-[1.1vw] gap-4'>
                    <Link>Home</Link>
                    <Link>Projects</Link>
                    <Link>Blog</Link>
                    <Link>Dashboard</Link>
                    <Link>Link</Link>
                </div>
           </div>
        </div>
    )
}

export default Footer