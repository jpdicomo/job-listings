import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import data from './assets/data.json'
import List from './components/List';
import Filter from './components/Filter';
import {Item} from './types/item';

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
  
  return (
    <FilterContext.Provider value={filterContext}>
      <div className='bg-lightCyanBg min-h-screen flex flex-col items-center' style={{fontSize: "15px", fontFamily:"'League Spartan', sans-serif", fontWeight:"500"}}>
        <Header/>
        {filters.length ? <Filter filters={filters}/>: undefined}
        <List items={filteredData}/>
      </div>
    </FilterContext.Provider>
    
  );
}

export default App;
