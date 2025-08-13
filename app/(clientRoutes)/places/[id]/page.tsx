"use client";

import places from "@/public/data/places.json";
import { IPlace } from "@/types/interfaces/i-place";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@heroui/react";
import { ChevronLeft, MapPinned } from "lucide-react";
import { useRouter } from "next/navigation";

interface PlacePageProps {
    params: {
        id: string;
    };
}

export default function PlacePage({ params }: PlacePageProps) {
    const router = useRouter();
    const { id } = params;

    const place: IPlace | undefined = places.find((place) => place.id === parseInt(id));

    if (!place) {
        return <div>Місце не знайдено</div>;
    }

    return (
        <div className="max-w-3xl mx-auto">
            <Button
                startContent={<ChevronLeft />}
                className="mb-4"
                onPress={() => router.back()}
            >
                Усі місця
            </Button>
            <Card radius="lg" isPressable={false} className="border-none shadow-md">
                <CardHeader className="p-0">
                    <Image src={place.images?.[0].url} alt={place.images?.[0].alt} className="w-full h-64 object-cover rounded-t-lg" />
                </CardHeader>
                <CardBody>
                    <h1 className="text-2xl font-bold mb-2">{place.name}</h1>
                    <p className="text-sm text-gray-500 mb-4">{place.category}</p>
                    <p className="text-base">{place.description}</p>
                </CardBody>
                <CardFooter>
                    <Button
                        size="lg"
                        className="w-full"
                        startContent={<MapPinned />}
                        onPress={() => window.open(place.location, "_blank")}
                    >
                        Переглянути на карті
                    </Button>
                </CardFooter>
            </Card>

            {/* {place.images && place.images.length > 1 && (
                <div className="grid grid-cols-2 gap-2 mt-4">
                    {place.images.slice(1).map((img, idx) => (
                        <Image key={idx} src={img.url} alt={img.alt} className="w-full h-40 object-cover rounded" />
                    ))}
                </div>
            )} */}
        </div>
    );
}