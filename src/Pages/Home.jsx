import React from 'react'
import Header from '../Components/Header'
import { RxInstagramLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import { PiXLogoFill } from "react-icons/pi";
import ProjectCard from '../Components/ProjectCard';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import UpcomingCard from '../Components/UpcomingCard';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div className='bg-[#18181B] min-h-screen w-full flex justify-center'>
            <div className='min-h-[100vh] w-[57vw] mt-10'>
                {/* Landing section */}
                <div className='h-[94vh]'>
                    <Header />
                    <section className='flex w-full'>

                        {/* left */}
                        <div className='flex flex-col w-2/3 pl-3'>
                            {/* left top */}
                            <div className=' mt-20 flex flex-col text-start'>
                                <h1 className='text-[4.1vw] text-white font-bold'>Sarthak Krishak</h1>
                                <h3 className='text-[#8C8C94] text-[1.2vw]'>Building <Link to={"/"} className='bg-[#3F3F46] px-2 text-white py-[0.45vh] font-bold'>Imaginum</Link> and other <span className='text-white font-semibold'>cool things</span></h3>
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
                            <div className='flex items-center aspect-auto text-xl gap-8'>
                                <a href="https://www.instagram.com/sarthak_krishak/"
                                    target="_blank"
                                    rel="noopener noreferrer">  <RxInstagramLogo className='text-[#8C8C94] hover:text-[#14B8A6] transition-colors duration-200' /></a>
                                <a href="https://www.linkedin.com/in/sarthakkrishak/"
                                    target="_blank"
                                    rel="noopener noreferrer">    <RxLinkedinLogo className='text-[#8C8C94] hover:text-[#14B8A6] transition-colors duration-200' /></a>
                                <a href="https://github.com/SarthakKrishak"
                                    target="_blank"
                                    rel="noopener noreferrer">  <RxGithubLogo className='text-[#8C8C94] hover:text-[#14B8A6] transition-colors duration-200' /></a>
                                <a href="https://x.com/krishak_sarthak"
                                    target="_blank"
                                    rel="noopener noreferrer"><PiXLogoFill className='text-[#8C8C94] hover:text-[#14B8A6] transition-colors duration-200' /></a>
                            </div>
                            <div>

                            </div>
                        </div>

                    </section>
                </div>
                {/* Projects */}
                <section className='w-full text-white pl-3 flex flex-col gap-4'>
                    <h1 className='text-[2.8vw] text-white font-bold'>Projects</h1>
                    <div className='flex flex-wrap shrink-0 w-full gap-8'>
                        <div className='flex items-center justify-between w-full gap-8 pl-2 pr-8'>
                            <ProjectCard />
                            <ProjectCard />
                        </div>
                        <div className='flex items-center justify-between w-full gap-8 pl-2 pr-8'>
                            <ProjectCard />
                            <ProjectCard />
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-[1.1vw] mt-3 pr-8 pl-4 gap-1 font-semibold'>
                        <Link to={"/project"}>See more </Link>
                        <IoIosArrowDown className='size-4 font-bold mt-1' />
                    </div>
                </section>

                {/* Upcoming Project */}
                <section className='w-full text-white pl-3 flex flex-col gap-4 mt-10'>
                    <h1 className='text-[2.8vw] text-white font-bold'>Upcoming Projects</h1>
                    <div className='flex flex-wrap shrink-0 w-full gap-8'>
                        <div className='flex items-center justify-between w-full gap-8 pl-2 pr-8'>
                            <UpcomingCard />
                            <UpcomingCard />
                        </div>
                    </div>
                    <div className='flex justify-center items-center text-[1.1vw] mt-3 pr-8 pl-4 gap-1 font-semibold'>
                        <Link to={"/project"}>See more </Link>
                        <IoIosArrowDown className='size-4 font-bold mt-1' />
                    </div>
                </section>

                {/* Hire me */}
                <section className=' bg-[#161C31] text-white mt-20 pt-7 pb-9 pl-7 pr-10 flex flex-col gap-1 rounded ml-3 mb-10 mr-4 border border-[#1F2937]'>
                    <h1 className='text-[1.5vw] font-semibold'>Want to hire me? Lets discuss.</h1>
                    <div >
                        <h2 className='text-[#e5e3e3] text-[1.2vw] mb-2'>Drop your message and let's discuss about your project.</h2>
                        <a target='_blank' href='https://wa.me/7693004956' className='bg-[#4ADE80] text-[#111827] text-[1.1vw] font-bold px-5 rounded-sm py-[0.5vh]'>Chat on Whatsapp</a>
                    </div>
                    <hr className='text-[#858585] mt-7 mb-7' />
                    <h2 className='text-[#e5e3e3] text-[1.2vw] pb-1'>Drop me a mail and I will get back to you.</h2>
                    <div className='bg-[#1F2937] w-full h-11 flex justify-between items-center rounded-md'>
                        <span className='text-[#828282] text-[1.1vw] pl-3'>sarthakkrishak1234@gmail.com</span>
                        <a href='mailto:sarthakkrishak1234@gmail.com' className='bg-[#374151] font-bold text-[1.1vw] px-[1.4vw] mx-1 py-[0.8vh] rounded-md'>Send me</a>
                    </div>
                </section>

                <Footer />

                <section className='text-[#9CA3AF] mb-8 text-[1.1vw] ml-4'>
                    <h1 className='flex items-center gap-1'>Find me on <a target='_blank' href='https://www.linkedin.com/in/sarthakkrishak/' className='text-[#14B8A6]'><RxLinkedinLogo /></a> and<a href='' target='_blank' className='text-[#14B8A6]'><PiXLogoFill /></a></h1>
                </section>

            </div>
        </div>
    )
}

export default Home