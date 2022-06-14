import {all} from 'redux-saga/effects'
import { watchJobs } from './jobs.saga'
export default function* rootSaga(): Generator {
    yield all([watchJobs()])
}