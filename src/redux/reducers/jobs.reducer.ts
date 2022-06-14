import * as constants from '../constants'
import {Reducer} from 'redux'
import { IJobsDefaultState } from '../../types/item';

const defaultState: IJobsDefaultState = {
    jobs:[],
    filteredJobs:[],
    loading: false,
}

const jobsReducer: Reducer = (state=defaultState, action) => {
    const {data, type} = action;

    switch(type){
        case constants.LOAD_JOBS_SUCCEEDED:
            return{
                ...state,
                jobs:data,
            }
        case constants.LOAD_JOBS_REQUESTED:
        case constants.JOBS_FILTER_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case constants.JOBS_FILTER_SUCCEEDED:
            return{
                ...state,
                loading: false,
                filteredJobs: data,
            }
        case constants.JOBS_FILTER_FAILED:
            return{
                ...state,
                loading: false,
                filteredJobs: [],
            }
        default:
            return state;
    }
}

export default jobsReducer;