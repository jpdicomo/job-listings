import { all, call, put, takeLatest } from "redux-saga/effects"
import * as constants from '../constants'
import * as actions from '../actions/jobs.actions'
import { Item, ItemList } from "../../types/item"

export function* loadJobs(action: any){
    try{
        const data: ItemList = yield import('../../assets/data.json')
        yield put(actions.onLoadDataSucceeded(data))
    }
    catch(error){
        yield put(actions.onLoadDataFailed(error))
    }
}
export function* filterJobs(action:any){
    try{
        const data: ItemList = yield call(() => 
            action.jobs.filter(
                function (item: Item){
                  let r = true;
                  action.filters.map((filter:string) => 
                    r = r && ((item.role === filter) || (item.level === filter) || (item.languages.includes(filter))))
                  return r
                }))
        yield put(actions.onFilterDataSucceeded(data))
    }
    catch(error){
        yield put(actions.onFilterDataFailed(error))

    }
}


export function* watchJobs(){
    yield all([
        
        takeLatest(constants.JOBS_FILTER_REQUESTED, filterJobs),
        takeLatest(constants.LOAD_JOBS_REQUESTED, loadJobs),
    ])
}