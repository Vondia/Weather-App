export interface weatherForecast {
  list: [
    {
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
      };
      dt_txt: string;
      dt: number;
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      rain: {
        "3h": number;
      };
    }
  ];
  city: {
    name: string;
  };
}
