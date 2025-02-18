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
const Project = () => {
  return (
    <div className='bg-[#18181B] min-h-screen w-full flex justify-center'>
      <div className='min-h-[100vh] w-[55vw] mt-10'>
        <Header />
        <section className='w-full text-white pl-3 flex flex-col gap-4 mt-10'>
          <h1 className='text-[2.8vw] text-white font-bold'>Projects</h1>
          <p className='text-[#8C8C94] text-[1.1vw] mr-28'>From commercial solutions to personal experiments and academic projects, my work reflects a deep passion for technology and innovation. Each project here tells a story of exploration, problem-solving, and continuous learning. More exciting ventures are on the horizon, and soon, I'll be sharing insights on technology, learning, and beyond—stay tuned for my blog. In the meantime, <a target='_blank' href='' className='text-[#397DEC] underline'>check out my GitHub</a> for more projects!</p>
        </section>
        <section className='w-full text-white pl-3 flex flex-col gap-4 mt-22'>
          <h1 className='text-[2.8vw] text-white font-bold'>Full Stack</h1>
          <div className='flex flex-wrap shrink-0 w-full gap-8'>
            <div className='flex items-center justify-between w-full gap-8 pl-2 pr-8'>
              <ProjectCard />
              <ProjectCard />
            </div>
            <div className='flex items-center justify-between w-full gap-8 pl-4 pr-8'>
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
            <div className='flex items-center justify-between w-full gap-8 pl-4 pr-8'>
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
        <section className=' bg-[#161C31] text-white mt-20 pt-7 pb-9 pl-7 pr-10 flex flex-col gap-1 rounded ml-3 mb-10 mr-1 border border-[#1F2937]'>
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

export default Project