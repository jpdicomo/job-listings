import React from 'react'
import { FilterContext } from '../App';
import FilterItem from './FilterItem';

const Filter = (props:{filters:Array<string>}) => {
    const {filters} = props;
    const filterContext = React.useContext(FilterContext)
    return (
        <div className='mx-8 lg:mx-0 lg:w-3/4 lg:h-20 bg-white -mt-10 shadow-md flex flex-row items-center py-5 lg:py-0 px-5 justify-between text-desDarkCyan gap-5' style={{borderRadius:'6px'}}>
            <div className=' flex flex-wrap lg:flex-row gap-3'>
                {filters.map((filter) =><FilterItem filter={filter}/>)}
            </div>
            <div className='underline cursor-pointer' style={{fontWeight:'700'}} onClick={() => {
                if(filterContext){
                    filterContext.setFilters([])
                }}}>
                Clear
            </div>
        </div>
    )
}

export default Filter