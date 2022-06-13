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

export interface ItemList{
    items: Array<Item>;
}