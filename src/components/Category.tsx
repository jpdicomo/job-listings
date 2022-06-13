import React, { useState } from 'react'
import { FilterContext } from '../App';

const Category = (props:{category:string}) => {
  const {category} = props;

  const [hover, setHover] = useState(false)

  const filterContext = React.useContext(FilterContext)
  return (
    <div className={`${hover ? "text-white bg-desDarkCyan": "bg-LightGrayishCyan"} text-center py-1 px-2 cursor-pointer`} style={{userSelect:'none', borderRadius:'4px'}} 
        onMouseOver={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          if(filterContext && !filterContext.filters.includes(category)){

            filterContext.setFilters([...filterContext.filters,category])
          }
         }
        }
        >
                    {category}
    </div>
  )
}

export default Category