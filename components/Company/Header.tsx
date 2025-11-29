import React from 'react'

const Header = () => {
  return (
    <div className=" w-full bg-black flex items-center justify-center h-screen object-cover" style={{backgroundImage: 'url("/images/company/hero-company.png")'}}>
      <div className='  max-w-4xl text-center px-6 text-white'>
        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          Turning Complex Cyber Risks Into Simple, Actionable Security
        </h1>

        <p className="text-base opacity-80 mb-10 max-w-lg mx-auto text-[#ACABB2]">
          It all started with one simple belief: every business, no matter its size,
          deserves the same level of cybersecurity protection as the biggest players
          in the market.
        </p>

      </div>
    </div>
  )
}

export default Header
