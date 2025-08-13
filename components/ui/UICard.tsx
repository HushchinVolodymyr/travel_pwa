"use client";

import { IPlace } from "@/types/interfaces/i-place";
import { Card, CardFooter, Image, Button, CardHeader, CardBody } from "@heroui/react";
import { MapPinned } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";

interface UICardProps {
    place: IPlace;
}

function UICard({ place }: UICardProps) {
    const router = useRouter();
    

    return (
        <Card isFooterBlurred isPressable onPress={() => router.push(`/place/${place.name}`)} className="border-none" radius="lg">
            <Image
                alt={place.images?.[0]?.alt}
                className="w-full h-full object-fill"
                height={200}
                src={place.images?.[0]?.url}
            />
            <CardFooter className="h-16 justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-start text-medium font-bold text-white/80">{place.name}</p>
                <Button
                    className="h-12 text-tiny text-white bg-black/20"
                    color="default"
                    radius="lg"
                    size="sm"
                    variant="flat"
                >
                    <MapPinned className="w-4 h-4" />
                    Маршрут
                </Button>
            </CardFooter>
        </Card >
    );
}

export default UICard;