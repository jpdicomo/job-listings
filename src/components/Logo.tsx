import React, { useEffect, useState } from 'react'

const Logo = (props:{src:string}) => {
    const {src} = props
    
    return(
        <img className='w-10 self-start -mt-5 lg:-mt-0 lg:self-center lg:w-20' src={`${src.slice(2,src.length)}`} alt="" />
    )
}

export default Logo
