import React from 'react'
import { Item, ItemList } from '../types/item';
import ListItem from './ListItem';

const List = (props: {items :ItemList | never[]}) => {
    const {items} = props;
    console.log(items)
    return (
        <ul className='flex items-center flex-col gap-7 mt-16 pb-9 w-full'>
            {items.map((item:Item) =>{
                return(
                    <ListItem item={item}/>
                )
            })}
        </ul>
        
    )
}

export default List