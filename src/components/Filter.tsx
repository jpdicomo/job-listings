import React, { useState } from 'react'
import { FilterContext, Filters } from '../App';
import FilterItem from './FilterItem';
import { DatePicker } from 'antd';
import { Moment } from 'moment';
import { ClockCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';


const Filter = (props:{filters:Filters, setFiltersHidden: Function}) => {
    const {filters,setFiltersHidden} = props;
    const filterContext = React.useContext(FilterContext)

    const [dateValue, setDateValue] = useState<Moment|null>(null)
    console.log(dateValue)

    const [hideDate, setHideDate] = useState(true)
    
    const clear = () => {
        setDateValue(null)
        if(filterContext){
            filterContext.setFilters({categories:[], date: undefined})
        }}
    return (
        <div className='relative mx-8 lg:mx-0 lg:w-3/4 lg:h-20 bg-white -mt-10 shadow-md flex flex-row items-center py-5 lg:py-0 px-5 justify-between text-desDarkCyan gap-5' style={{borderRadius:'6px'}}>
            <div className=' flex flex-wrap lg:flex-row gap-3'>
                {filters.categories.map((filter) =><FilterItem filter={filter}/>)}
            </div>
            
            <div className='flex items-center gap-2'>
                <ClockCircleOutlined onClick={() => setHideDate(!hideDate)}/>
                <div className={`${hideDate? 'hidden ': ' '}`}>
                <DatePicker value={dateValue} onChange={(value) => {
                    setDateValue(value)
                    filterContext?.setFilters({...filterContext?.filters, date:value})}}/>
                </div>
            </div>
            
            
            
            <div className='pt-1 underline cursor-pointer' style={{fontWeight:'700'}} onClick={() =>
                clear()
                }>
                Clear
            </div>
            <CloseCircleOutlined    className='absolute -top-3 -right-3 bg-white rounded-full cursor-pointer' 
                                    style={{fontSize: 30}}
                                    onClick={()=> {clear(); setFiltersHidden(true)}}/>
            
        </div>
    )
}

export default Filter