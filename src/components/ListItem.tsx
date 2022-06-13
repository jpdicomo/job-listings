import React, { useEffect, useState } from 'react'
import { Item } from '../types/item'
import CategoryList from './CategoryList'
import Logo from './Logo'

const ListItem = (props:{item: Item}) => {
    const {item} = props
    const [hover, setHover] = useState(false)
    return (
        <div className={`${item.featured ? "border-l-4 border-l-desDarkCyan " : ""}bg-white w-3/4 lg:h-36 shadow-xl flex flex-col lg:flex-row justify-between lg:items-center px-5 pb-4 gap-3 lg:gap-0 lg:pb-0 lg:px-10`} style={{borderRadius: '4px'}}>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center lg:gap-5'>
                <Logo src={item.logo}/>
                <div className='flex flex-col gap-1'>
                    <div className='flex flex-row gap-3 items-center text-desDarkCyan font-size-15 lg:text-base' style={{fontWeight: '700'}}>
                        {item.company}
                        <div className='flex flex-row items-center'>
                            {item.new ?
                                <div className='flex items-center justify-center text-center uppercase text-white bg-desDarkCyan rounded-full px-2 pt-1 pb-0.5 m-auto text-xs lg:font-size-12'>
                                NEW!
                            </div> : undefined}
                        </div>
                        <div className='flex flex-row items-center'>
                        {item.featured ?
                                <div className='flex items-center justify-center text-center uppercase text-white bg-VeryDarkGrayishCyan rounded-full px-2 pt-1 pb-0.5 m-auto' style={{fontSize:'12px'}}>
                                FEATURED
                            </div> : undefined}
                        </div>
                    </div>
                    <div className={`${ !hover ? "text-VeryDarkGrayishCyan" : "text-desDarkCyan"} font-size-15 lg:text-xl cursor-pointer`} style={{fontWeight:'700'}} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        {item.position}
                    </div>
                    <div className='flex flex-row items-center gap-4 text-DarkGrayishCyan'>
                        <div>
                        {item.postedAt}
                        </div>
                        <div>
                        {String.fromCharCode(183)}
                        </div>
                        <div>
                        {item.contract}
                        </div>
                        <div>
                        {String.fromCharCode(183)}
                        </div>
                        <div>
                        {item.location}
                        </div>
                        
                        
                        
                        
                        
                    </div>
                </div>
            </div>
            <CategoryList languages={item.languages} role={item.role} level={item.level}/>

        </div>
    ) 
}

export default ListItem