import React, { useState } from 'react'
import { FilterContext } from '../App';
import Remove from '../assets/icon-remove.svg'
const FilterItem = (props:{filter:string}) => {
    const {filter} = props;
    const [hover, setHover] = useState(false)
    const filterContext = React.useContext(FilterContext)
    return (
        <div className='flex bg-lightCyanBg pl-1' style={{fontWeight:'700', borderRadius:'4px'}}>
        <div className='flex items-center '>
            {filter}
        </div>
        <div className={`${hover ? " bg-VeryDarkGrayishCyan": "bg-desDarkCyan"} flex items-center p-2 box-content ml-2`}
                    style={{borderTopRightRadius:'4px', borderBottomRightRadius:'4px'}}
                    onMouseOver={() => setHover(true)} 
                    onMouseLeave={() => setHover(false)}
                    onClick={() =>{
                        if(filterContext){
                            filterContext.setFilters(filterContext.filters.filter(item => item !== filter))
                        }
                    }}>
                    <img
                        className=''
                        src={Remove}
                        alt=""
                        >

                    </img>
                </div>
        
        </div>
                
    )
}

export default FilterItem