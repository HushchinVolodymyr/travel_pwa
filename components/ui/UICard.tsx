'use client';

import { IPlace } from '@/types/interfaces/i-place';
import {
  Card,
  CardFooter,
  Image,
  Button,
  CardHeader,
  CardBody,
} from '@heroui/react';
import { MapPinned } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { use, useEffect } from 'react';

interface UICardProps {
  place: IPlace;
}

function UICard({ place }: UICardProps) {
  const router = useRouter();

  return (
    <Card
      isFooterBlurred
      isPressable
      onPress={() => router.push(`/places/${place.id}`)}
      className="border-none"
      radius="lg"
    >
      <Image
        alt={place.images?.[0]?.alt}
        className="w-full h-fit"
        height={180}
        src={place.images?.[0]?.url}
      />
      <CardFooter className="h-16 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-medium text-start font-bold text-white/80">
          {place.name}
        </p>
      </CardFooter>
    </Card>
  );
}

export default UICard;
