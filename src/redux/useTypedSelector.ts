import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { IJobsDefaultState } from "../types/item";


interface IRootState{
    jobs: IJobsDefaultState,
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;