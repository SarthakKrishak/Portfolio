import React, { useState } from 'react'
import { SunMoon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
const Header = () => {
    const [isDark, setIsDark] = useState(true);

    const isClicked = (e) => {
        e.preventDefault();
    }

  return (
      <nav className='flex items-center bg-[#18181B] w-full h-[10vh] justify-between pr-2 pl-2'>
          {/* left Section */}
          <button className='rounded-full p-[1vh] flex justify-center items-center border border-[#27DFB3]'>
              <SunMoon className='text-[#27DFB3] size-4.5'/>
          </button>
          {/* Right side */}
          <div className='flex items-center gap-9 text-white border border-[#313134] px-8 rounded-3xl font-medium text-[1vw] py-2'>
              <Link to={"/"}>Home</Link>
              <Link to={"/project"}>Projects</Link>
              <Link to={"/project"}>Blog</Link>
              <Link to={"/project"} className="flex justify-center items-center gap-1">Resume <Download className='size-3.5'/></Link>
          </div>
      </nav>
  )
}

export default Header