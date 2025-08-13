export interface IPlace {
    name: string;
    category: string;
    description: string;
    images?: {
        url: string;
        alt: string;
    }[];
}