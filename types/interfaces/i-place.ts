export interface IPlace {
  id: number;
  name: string;
  category: string;
  description: string;
  images?: {
    url: string;
    alt: string;
  }[];
  location?: any;
}
