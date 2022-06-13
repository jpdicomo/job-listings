import React from 'react'
import Category from './Category';

const CategoryList = (props: {languages:Array<string>, role:string, level: string}) => {
    const {languages, role, level} = props;
    return (
        <div className=' flex flex-wrap gap-3 lg:flex lg:flex-row text-desDarkCyan border-t-DarkGrayishCyan pt-5 lg:pt-0  border-top-1 lg:border-t-0' style={{fontWeight: 700}}>
            <Category category={role}/>
            <Category category={level}/>
            {languages.map((language:string) => 
                <Category category={language}/>)
            }
        </div>
    
  )
}

export default CategoryList