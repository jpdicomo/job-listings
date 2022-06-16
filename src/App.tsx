/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import data from './assets/data.json'
import List from './components/List';
import Filter from './components/Filter';
import {Item} from './types/item';
import {css} from '@emotion/react'
import styled from '@emotion/styled';


interface FilterContextInterface {
  filters: Array<string>;
  setFilters: Function;
}
export const FilterContext = React.createContext<FilterContextInterface|null>(null);

function App() {
  useEffect(() => {
    console.log(data)
  }, [])

  const [filters, setFilters] = useState<string[]>([])
  
  const filterContext: FilterContextInterface = {
    filters: filters,
    setFilters: setFilters,
  }

  const [filteredData, setFilterData] = useState(data)
  useEffect(() => {
    setFilterData(data.filter(
      function (item){
        let r = true;
        filters.map((filter) => 
          r = r && ((item.role === filter) || (item.level === filter) || (item.languages.includes(filter)))
        )
        return r
        
      }
    )
    )
  }, [filters])

  type HeadingProps = {
    bg: string,
    fg: string,
  }

  const Heading = styled.h1<HeadingProps>`
    background-color: ${props=> props.bg};
    color: ${props => props.fg};
  `;


  
  return (
    <FilterContext.Provider value={filterContext}>
      <Heading bg="#008f68" fg="#fae042">
        Heading with a green background and yellow text
      </Heading>
      <div css={css({
        margin: 10,
        padding: 10,
        backgrounColor: '#f22',
      })}>

      </div>
      <div className='bg-lightCyanBg min-h-screen flex flex-col items-center' style={{fontSize: "15px", fontFamily:"'League Spartan', sans-serif", fontWeight:"500"}}>
        <Header/>
        {filters.length ? <Filter filters={filters}/>: undefined}
        <List items={filteredData}/>
      </div>
    </FilterContext.Provider>
    
  );
}

export default App;
