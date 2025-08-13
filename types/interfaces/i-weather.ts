export interface IWeather {
    name: string;
    main: {
        temp: number;
    };
    weather: Array<{
        id: number;
        description: string;
        icon: string;
    }>;
    wind: {
        speed: number;
    };
}