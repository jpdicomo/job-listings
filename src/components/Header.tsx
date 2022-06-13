import React from 'react'
export const Header = () => {
  return (
    <>
    <div className='bg-desDarkCyan hidden lg:block'>
        <img className="" src={'images/bg-header-desktop.svg'} alt="" />
    </div>
    <div className=' lg:hidden bg-desDarkCyan'>
      <img className="" src={'images/bg-header-mobile.svg'} alt="" />
    </div>
    </>
    
  )
}
