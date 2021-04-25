    export interface WeatherByLocationResponse{
        coord: {
                lon: number;
                lat: number
            };
            weather: [
                {
                    id: number;
                    main: string;
                    description: string;
                    icon: string
                }
            ];
            base: string;
            main: {
                temp: number;
                feels_like: number;
                temp_min: number;
                temp_max: number;
                pressure: number;
                humidity: number
            };
            visibility: number;
            wind: {
                speed: number
                deg: number
            };
            clouds: {
                all: number
            };
            dt: number;
            sys: {
                type: number;
                id: number;
                country: string;
                sunrise: number;
                sunset: number
            };
            timezone: number;
            id: string;
            name: string;
            cod: number
        }
    
    export interface ForcastDay{
            dt: string;
            sunrise: string;
            sunset: string;
            moonrise: string;
            moonset: string;
            moon_phase: number;
            temp: {
                day: number;
                min: number;
                max: number;
                night: number;
                eve: number;
                morn: number;
            };
            feels_like: {
                day: number;
                night: number;
                eve: number;
                morn: number;
            };
            pressure: number;
            humidity: number;
            dew_point: number;
            wind_speed: number;
            wind_deg: number;
            wind_gust: number;
            weather: [
                {
                    id: number;
                    main: string;
                    description: string;
                    icon: string
                }
            ];
            clouds: number;
            pop: number;
            rain: number;
            uvi: number;
    }

    export interface WeatherByLocationAndWeekdayResponse{
        lat: number;
        lon: number;
        timezone: string;
        timezone_offset: number;
        daily: [ForcastDay]
    }

    export enum WeekDays{
        monday= 1,
        tuesday=2,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday
    }

    export interface DailyForecastResultValue {
        fetchDate:Date,
        results: DailyWeatherForecastResult[]
    }

    export interface DailyWeatherForecastResult{
            dt: number,
            sunrise: string,
            sunset: string,
            moonrise: string,
            moonset: string,
            moon_phase: number,
            temp: {
                day: number,
                min: number,
                max: number,
                night: number,
                eve: number,
                morn: number
            },
            feels_like: {
                day: number,
                night: number,
                eve: number,
                morn: number
            },
            pressure: number,
            humidity: number,
            dew_point: number,
            wind_speed: number,
            wind_deg: number,
            wind_gust: number,
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: number,
            pop: number,
            uvi: number
        
    }