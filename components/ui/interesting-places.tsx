"use client";

import { IPlace } from "@/types/interfaces/i-place";
import UICard from "./UICard";
import { useEffect } from "react";
import useGeolocation from "@/hooks/useGeolocation";


interface InterestingPlaceProps {
    places: IPlace[];
}

export default function InterestingPlaces({ places }: InterestingPlaceProps) {
    const location = useGeolocation();

    useEffect(() => {
        if (location) {
            console.log("Current location:", location);
        }
    }, [location]);

    return (
        <div className="grid grid-cols-2 gap-4">
            {location && (
                <div className="p-4">

                    <p>
                        Your location: {location.location?.lat}, {location.location?.lng}
                    </p>
                </div>
            )}

            {places.slice(0, 4).map((place) => (
                <UICard key={place.name} place={place} />
            ))}
        </div>
    );
}