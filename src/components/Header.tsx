import { Button } from 'antd'
import React from 'react'
import BackgroundDesktop from '../assets/images/bg-header-desktop.svg'
import BackgroundMobile from '../assets/images/bg-header-mobile.svg'
export const Header = () => {

  return (
    <>
    <div className="bg-desDarkCyan hidden lg:block" >
        <img src={BackgroundDesktop} alt="" />
        
    </div>
    <div className=' lg:hidden bg-desDarkCyan'>
      <img className="" src={BackgroundMobile} alt="" />
    </div>
    </>
    
  )
}

