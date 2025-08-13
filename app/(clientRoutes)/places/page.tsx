"use client";

import FindNewPlaces from "@/components/ui/find-new-places";
import UICard from "@/components/ui/UICard";
import places from "@/public/data/places.json";
import { Button } from "@heroui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

function PLacesPage() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const categories = useMemo(() => {
        return Array.from(new Set(places.map(p => p.category)));
    }, []);

    const filteredPlaces = places.filter((place) => {
        const matchName = place.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchCategory = selectedCategory ? place.category === selectedCategory : true;
        return matchName && matchCategory;
    });

    return (
        <div>
            <Button
                startContent={<ChevronLeft />}
                className="mb-4"
                onPress={() => router.back()}
            >
                Головна
            </Button>

            <FindNewPlaces 
                onSearch={setSearchTerm} 
                onCategorySelect={setSelectedCategory} 
                categories={categories} 
            />

            <div className="grid grid-cols-2 gap-4 mt-4">
                {filteredPlaces.map((place) => (
                    <UICard key={place.name} place={place}/>
                ))}
            </div>
        </div>
    );
}

export default PLacesPage;