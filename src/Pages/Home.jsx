import React from 'react'
import Header from '../Components/Header'
import { RxInstagramLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import { PiXLogoFill } from "react-icons/pi";
import ProjectCard from '../Components/ProjectCard';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const Home = () => {
    return (
        <div className='bg-[#18181B] min-h-screen w-full flex justify-center'>
            <div></div>
            <div className='min-h-[100vh] w-[60vw] mt-10'>
                {/* Landing section */}
                <div className='h-[94vh]'>
                    <Header />
                    <section className='flex w-full'>

                        {/* left */}
                        <div className='flex flex-col w-2/3 pl-3'>
                            {/* left top */}
                            <div className=' mt-20 flex flex-col text-start'>
                                <h1 className='text-[4.1vw] text-white font-bold'>Sarthak Krishak</h1>
                                <h3 className='text-[#8C8C94] text-[1.2vw]'>Building <span className='bg-[#3F3F46] px-2 text-white py-[0.4vh] font-semibold'>Org</span> and other <span className='text-white font-semibold'>cool things</span></h3>
                            </div>
                            {/* left bottom */}
                            <div className='text-[#8C8C94] pt-8'>
                                <h1 className='text-[1.1vw] pb-2'>
                                    Full-Stack Developer specializing in scalable SaaS products and web <br />applications. AWS Certified Cloud Practitioner and a sophomore at <br /> VIT Vellore.
                                </h1>
                                <h1 className='text-[1.1vw]'>
                                    Passionate about designing seamless digital experiences with modern <br /> web technologies. I focus on building high-performance, user-centric <br />solutions that drive impact and innovation.
                                </h1>
                            </div>
                        </div>

                        {/* right */}
                        <div className='w-1/3 flex flex-col justify-center items-center pl-10 gap-6 pr-25'>
                            <div className='bg-[#14B8A6] mt-24 size-[47vh] rounded-xl overflow-hidden object-fill'>
                                <img src="./src/assets/pro.png" alt="image" />
                            </div>
                            <div className='flex items-center aspect-auto text-2xl gap-5'>
                                <a href="https://www.instagram.com/sarthak_krishak/"
                                    target="_blank"
                                    rel="noopener noreferrer">  <RxInstagramLogo className='text-[#8C8C94] hover:text-white transition-colors duration-200' /></a>
                                <a href="https://www.linkedin.com/in/sarthakkrishak/"
                                    target="_blank"
                                    rel="noopener noreferrer">    <RxLinkedinLogo className='text-[#8C8C94] hover:text-white transition-colors duration-200' /></a>
                                <a href="https://github.com/SarthakKrishak"
                                    target="_blank"
                                    rel="noopener noreferrer">  <RxGithubLogo className='text-[#8C8C94] hover:text-white transition-colors duration-200' /></a>
                                <a href="https://x.com/krishak_sarthak"
                                    target="_blank"
                                    rel="noopener noreferrer"><PiXLogoFill className='text-[#8C8C94] hover:text-white transition-colors duration-200' /></a>
                            </div>
                            <div>

                            </div>
                        </div>

                    </section>
                </div>
                {/* Projects */}
                <section className='w-full text-white pl-3 flex flex-col gap-4'>
                    <h1 className='text-[2.8vw] text-white font-bold'>Projects</h1>
                    <div className='flex flex-wrap shrink-0 w-full gap-6'>
                        <div className='flex items-center justify-between w-full gap-3 pl-4 pr-8'>
                            <ProjectCard />
                            <ProjectCard />
                        </div>
                        <div className='flex items-center justify-between w-full gap-3 pl-4 pr-8'>
                            <ProjectCard />
                            <ProjectCard />
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-sm mt-5 pr-8 pl-4'>
                        <Link to={"/project"}>See more </Link><span><IoIosArrowDown className='size-3.5 font-bold' /></span>
                    </div>
                </section>
                {/* Upcoming Project */}
                <section className='w-full text-white pl-3 flex flex-col gap-4 mt-10'>
                    <h1 className='text-[2.8vw] text-white font-bold'>Upcoming Projects</h1>
                    <div className='flex flex-wrap shrink-0 w-full gap-6'>
                        <div className='flex items-center justify-between w-full gap-3 pl-4 pr-8'>
                            <ProjectCard />
                            <ProjectCard />
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-sm mt-5 pr-8 pl-4'>
                        <Link to={"/project"}>See more </Link><span><IoIosArrowDown className='size-3.5 font-bold' /></span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home