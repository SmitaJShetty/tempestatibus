export const mockWeatherByLocation={
    fetchDate: new Date('12-12-2021'),
    results: [
        {
            dt: 1619485200,
            sunrise: 1619468784,
            sunset: 1619507941,
            moonrise: 1619508780,
            moonset: 1619467500,
            moon_phase: 0.5,
            temp: {
                day: 292.64,
                min: 287.72,
                max: 292.72,
                night: 290.4,
                eve: 291.51,
                morn: 288.78
            },
            feels_like: {
                day: 292.13,
                night: 288.33,
                eve: 291.2,
                morn: 288.33
            },
            pressure: 1027,
            humidity: 57,
            dew_point: 284.04,
            wind_speed: 4.03,
            wind_deg: 117,
            wind_gust: 4.33,
            weather: [
                {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03d"
                }
            ],
            clouds: 26,
            pop: 0.21,
            uvi: 4.74
        }
    ]        
}