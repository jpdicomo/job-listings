import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import data from './assets/data.json'
import List from './components/List';
import Filter from './components/Filter';
import 'antd/dist/antd.css';

export type Filters = {categories:Array<string>, date:Date | undefined};
interface FilterContextInterface {
  filters: Filters;
  setFilters: Function;
}
export const FilterContext = React.createContext<FilterContextInterface|null>(null);

function App() {
  useEffect(() => {
    console.log(data)
  }, [])

  const [filters, setFilters] = useState<Filters>({categories: [], date: undefined})
  
  const filterContext: FilterContextInterface = {
    filters: filters,
    setFilters: setFilters,
  }

  const [filteredData, setFilterData] = useState(data)
  useEffect(() => {
    setFilterData(data.filter(
      function (item){
        let r = true;
        filters.categories.map((filter) => {
          if(filtersHidden){
            setFiltersHidden(false)
          }
          r = r && ((item.role === filter) || (item.level === filter) || (item.languages.includes(filter)))
        }
        )
        if(filters.date){
          let newDate = new Date()
          const long = parseInt(item.postedAt[0])
          const dw = item.postedAt[1]

          newDate.setDate(newDate.getDate() - long*(dw==='d' ? 1: (dw === 'w') ? 7 : 30))
          r = r && (newDate > filters.date)
        }
        return r
        
      }
    )
    )
  }, [filters])

  const [filtersHidden, setFiltersHidden] = useState(true)
  
  return (
    <FilterContext.Provider value={filterContext}>
      
      <div className='bg-lightCyanBg min-h-screen flex flex-col items-center' style={{fontSize: "15px", fontFamily:"'League Spartan', sans-serif", fontWeight:"500"}}>
        <Header/>
        {filtersHidden ? undefined: <Filter filters={filters} setFiltersHidden={setFiltersHidden}/>}
        <List items={filteredData}/>
      </div>
    </FilterContext.Provider>
    
  );
}

export default App;
