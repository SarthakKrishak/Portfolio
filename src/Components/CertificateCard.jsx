import React from 'react'

const CertificateCard = ({ name, desc,img }) => {
  return (
      <div className='w-[25vw] h-[54vh] border border-[#334155] rounded-xl pl-5 pt-5 pr-5'>
          <img className='w-full h-55 mb-6 object-contain' src={ img} alt="image" />
          <h1 className='font-bold text-[1.3vw]'>{ name}</h1>
          <p className='text-[1vw] text-slate-300 pt-2'>{ desc}</p>
      </div>
  )
}

export default CertificateCard