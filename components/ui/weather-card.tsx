'use client';

import { IWeather } from '@/types/interfaces/i-weather';
import getWeatherBackground from '@/utils/getWetaherBackground';
import { Card } from '@heroui/card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaTemperatureHalf, FaWind } from 'react-icons/fa6';

async function getWeather(lat: number, lon: number) {
  const res = await fetch(`api/weather?lat=${lat}&lon=${lon}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch weather');
  }
  return res.json();
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function WeatherCard() {
  const router = useRouter();
  const coords = { lat: 34.9003, lon: 33.6232 };
  const [weather, setWeather] = useState<IWeather | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const weather = await getWeather(coords.lat, coords.lon);
      setWeather(weather);
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return null;
  }

  return (
    <div className="w-full">
      {weather && weather?.weather ? (
        <Card
          className={`w-full mt-2 p-4 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 border-1 ${getWeatherBackground(weather.weather[0].id).borderColor}`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full scale-110 object-cover z-0"
          >
            <source
              src={getWeatherBackground(weather.weather[0].id).videoSrc}
              type="video/mp4"
            />
          </video>
          <div className="relative z-10 rounded-xl">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center ">
                  <Image
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                    height={40}
                    width={40}
                  />
                  <p className="text-2xl font-bold">{weather.name}</p>
                </div>

                <p className="text-md">
                  {capitalize(weather.weather[0].description.toString())}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-6">
                <FaTemperatureHalf />
                <p className="text-md font-bold"> {weather.main.temp}°C</p>
              </div>
              <div className="flex items-center gap-2">
                <FaWind />
                <p className="text-md font-bold">{weather.wind.speed} м/с</p>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <Card>
          <p>No weather data available</p>
        </Card>
      )}
    </div>
  );
}
