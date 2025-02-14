import React from 'react'
import { VscActivateBreakpoints } from "react-icons/vsc";
const ProjectCard = () => {
    return (
        <div className='w-[28.5vw] h-[54vh] border border-[#334155] rounded-xl pl-4 pt-7 pr-4'>
            <VscActivateBreakpoints className='size-10 mb-3' />
            <h1 className='font-semibold'>Project Name</h1>
            <p className='text-sm text-slate-300 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum hic aut quos exercitationem quasi alias maxime corporis. Quo magni ad tenetur natus consectetur sed reiciendis reprehenderit eum ratione incidunt?</p>
            <div className='flex gap-2 items-center mt-3 flex-wrap shrink-0'>
                <div className='text-[0.9vw] rounded border border-[#353538] w-16 flex justify-center items-center py-[0.2vw]'>Techstack</div>
                <div className='text-[0.9vw] rounded border border-[#353538] w-16 flex justify-center items-center py-[0.2vw]'>Techstack</div>
                <div className='text-[0.9vw] rounded border border-[#353538] w-16 flex justify-center items-center py-[0.2vw]'>Techstack</div>
                <div className='text-[0.9vw] rounded border border-[#353538] w-16 flex justify-center items-center py-[0.2vw]'>Techstack</div>
                <div className='text-[0.9vw] rounded border border-[#353538] w-16 flex justify-center items-center py-[0.2vw]'>Techstack</div>
            </div>
        </div>
    )
}

export default ProjectCard