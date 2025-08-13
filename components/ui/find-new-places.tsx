"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { FC} from "react";
import { IoSearch } from "react-icons/io5";


const FindNewPlaces: FC = () => {
    

    return (
        <div>
            <div className="flex items-center gap-2">
                <Input
                    placeholder="Знайти цікаве місце..."
                    type="text"
                    size="lg"
                    style={{ fontSize: '16px' }}
                />
                <Button 
                    isIconOnly 
                    size="lg" 
                    variant="faded"
                >
                    <IoSearch size="25px"/>
                </Button>
            </div>
            
        </div>
    );
}

export default FindNewPlaces;

