export interface Donuts {
    count: number;
    results: string[];
}

export interface Donut{
    id: number;
    ref: string;
    name: string;
}

export interface DonutDetails{
    id?: number;
    ref?: string;
    name: string;
    calories: number;
    extras?: string[];
    photo: string;
    photo_attribution?: string;
}
