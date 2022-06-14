export interface Item{
    company: string;
    contract: string;
    featured: boolean;
    id: number;
    languages: Array<string>;
    level: string;
    location: string;
    logo: string;
    new: boolean;
    position: string;
    postedAt: string;
    role: string;
    tools: Array<string>;
}

export type ItemList =  Array<Item>;

export interface IJobsDefaultState{
    jobs: ItemList | never[],
    filteredJobs: ItemList | never[],
    loading: boolean,
}