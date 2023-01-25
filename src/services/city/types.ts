
type CurrentWeatherAttr =  {
  id: number;
  name: string;
  cod: number;
  timeZone: number;
  error: string;
  coord: CoordAttr;
  weather: WeatherAttr[];
  main: MainAttr;
  wind: WindAttr;
}

type ArticleAttr = {
  source: {
    id: string,
    name: string
  },
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string | null;
  content: string;
}

type CoordAttr = {
  lon: number;
  lat: number;
}

type WeatherAttr =  {
  id: number;
  main: string;
  description: string;
  icon: string;
}

type MainAttr = {
  temp: number;
  feels_like: number;
  temp_Min: number;
  temp_Max: number;
  pressure: number;
  humidity: number;
  sea_Level: number;
  grnd_Level: number;
}

type WindAttr = {
  speed: number;
  deg: number;
  gust: number;
}

type CityInformationAttr = {
  name: string;
  news: ArticleAttr[];
  currentWeather: CurrentWeatherAttr;
}

export type { ArticleAttr, CurrentWeatherAttr ,CityInformationAttr}