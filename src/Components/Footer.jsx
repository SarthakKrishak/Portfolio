import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const handleClick = () => {
        window.scrollTo(0, 0); // Scrolls to top after navigation
        };

    return (
        <div className='w-full min-h-[20vh] mt-30 mb-16'>
            <hr className='text-[#1F2937] ml-3' />
            <div className='flex mt-9 gap-50'>
                <div className='flex flex-col text-[#6B7280] text-[1.1vw] gap-4 ml-4'>
                    <Link onClick={handleClick} to={"/"}>Home</Link>
                    <Link onClick={handleClick} to={"/project"}>Projects</Link>
                    <Link onClick={handleClick} to={"/certificate"}>Certificates</Link>
                    <Link onClick={handleClick} to={"/blog"}>Blog</Link>
                    <Link onClick={handleClick} to={"/links"}>Links</Link>
                </div>
                <div className='flex flex-col text-[#6B7280] text-[1.1vw] gap-4'>
                    <Link target='_blank' to={"https://github.com/SarthakKrishak"}>Github</Link>
                    <Link target='_blank' to={"https://www.linkedin.com/in/sarthakkrishak/"}>LinkedIn</Link>
                    <Link target='_blank' to={"https://x.com/krishak_sarthak"}>X</Link>
                    <Link target='_blank' to={"https://www.instagram.com/sarthak_krishak/"}>Instagram</Link>
                    <Link target='_blank' to={"https://linktr.ee/SarthakKrishak?fbclid=PAZXh0bgNhZW0CMTEAAaYk8S42TZcDfW2R4UNl1WwdNTR3rP5kTB8FuMBdOjwn_-5OVmpz1ucyQzE_aem_0w8FW6DFhFRuSoSYYDt6_w"}>Linktree</Link>
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