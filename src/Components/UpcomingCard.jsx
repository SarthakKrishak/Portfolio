import React from 'react'
import { VscActivateBreakpoints } from "react-icons/vsc";

const UpcomingCard = () => {
  return (
      <div className='w-[28.5vw] h-[42vh] border border-[#334155] rounded-xl pl-4 pt-7 pr-4'>
          <VscActivateBreakpoints className='size-10 mb-3' />
          <h1 className='font-semibold'>More Projects Coming Soon</h1>
          <p className='text-sm text-slate-300 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsum hic aut quos exercitationem quasi alias maxime corporis. Quo magni ad tenetur natus consectetur sed reiciendis reprehenderit eum ratione incidunt?</p>
      </div>
  )
}

export default UpcomingCard