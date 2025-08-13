"use client";

import { IPlace } from "@/types/interfaces/i-place";
import UICard from "./UICard";
import { Button } from "@heroui/button";
import { MapPinned } from "lucide-react";
import { useRouter } from "next/navigation";


interface InterestingPlaceProps {
    places: IPlace[];
}

export default function InterestingPlaces({ places }: InterestingPlaceProps) {
    const router = useRouter();
    const randomPlaces = [...places] 
        .sort(() => Math.random() - 0.5) 
        .slice(0, 4);

    return (
        <div>
            <Button
                size="lg"
                className="w-full"
                startContent={<MapPinned className="w-4 h-4" />}
                onPress={() => router.push("/places")}
            >
                Усі місця
            </Button>

            <div className="grid grid-cols-2 gap-4 mt-4">
                {randomPlaces.slice(0, 4).map((place) => (
                    <UICard key={place.name} place={place}/>
                ))}
            </div>
        </div >

    );
}