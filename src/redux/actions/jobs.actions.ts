import { AnyAction } from "redux";
import { ItemList } from "../../types/item";

import * as constants from '../constants'

export const onLoadDataRequested = (): AnyAction => (
    {type: constants.LOAD_JOBS_REQUESTED}
)

export const onLoadDataSucceeded = (data:ItemList):AnyAction => (
    {data: data, type: constants.LOAD_JOBS_SUCCEEDED}
)

export const onLoadDataFailed = (error:unknown): AnyAction => (
    {type: constants.LOAD_JOBS_FAILED}
)

export const onFilterDataRequest = (data: {filters:Array<string>, jobs: ItemList | never[]}): AnyAction => (
    {data: data ,type: constants.JOBS_FILTER_REQUESTED}
)

export const onFilterDataSucceeded = (data:ItemList): AnyAction => (
    {data:data, type: constants.JOBS_FILTER_SUCCEEDED}
)

export const onFilterDataFailed = (error: unknown): AnyAction => (
    {type: constants.JOBS_FILTER_FAILED}
)