import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full min-h-[20vh] mt-30 mb-16'>
            <hr className='text-[#1F2937] ml-3' />
            <div className='flex mt-9 gap-50'>
                <div className='flex flex-col text-[#6B7280] text-[1.1vw] gap-4 ml-4'>
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