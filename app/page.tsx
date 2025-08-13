import InterestingPlaces from "@/components/ui/interesting-places";
import WeatherCard from "@/components/ui/weather-card";
import places from "@/public/data/places.json";
import HomeButton from "@/components/ui/home-button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="p-1">
        <h1 className="text-3xl font-bold tracking-tight">
          Давайте досліджувати{" "}
          <span className="text-4xl text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            нові місця!
          </span>
        </h1>
      </div>
      <WeatherCard />

      <HomeButton />

      <h1 className="text-2xl font-bold text-center">
        Місця, які можна відвідати:
      </h1>

      <InterestingPlaces places={places} />
    </div>
  );
}
