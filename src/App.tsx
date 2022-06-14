import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import List from './components/List';
import Filter from './components/Filter';
import { useDispatch } from 'react-redux';
import { onFilterDataRequest, onLoadDataRequested } from './redux/actions/jobs.actions';
import useTypedSelector from './redux/useTypedSelector';

interface FilterContextInterface {
  filters: Array<string>;
  setFilters: Function;
}
export const FilterContext = React.createContext<FilterContextInterface|null>(null);

function App() {

  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(onLoadDataRequested())
  }, [])

  const [filters, setFilters] = useState<string[]>([])
  
  const filterContext: FilterContextInterface = {
    filters: filters,
    setFilters: setFilters,
  }

  const jobs = useTypedSelector((state) => state.jobs.jobs);

  useEffect(() => {
    dispatch(onFilterDataRequest({filters,jobs}))
  }, [dispatch, filters, jobs])
  
  const filteredData = useTypedSelector((state) => state.jobs.filteredJobs)
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
