'use client';

import { Input } from '@heroui/input';
import { Button, Select, SelectItem } from '@heroui/react';
import { PenOff } from 'lucide-react';
import { FC } from 'react';

interface FindNewPlacesProps {
  onSearch: (value: string) => void;
  onCategorySelect: (value: string) => void;
  categories: string[];
}

const FindNewPlaces: FC<FindNewPlacesProps> = ({
  onSearch,
  onCategorySelect,
  categories,
}) => {
  return (
    <div className="p-0">
      <div className="flex flex-col gap-2">
        <Input
          placeholder="Знайти цікаве місце..."
          type="text"
          size="lg"
          style={{ fontSize: '16px' }}
          onChange={(e) => onSearch(e.target.value)}
        />

        <div className="w-full flex-wrap md:flex-nowrap gap-4">
          <Select
            className="w-full"
            label="Категорія"
            selectionMode="single"
            onSelectionChange={(keys) => {
              const value = Array.from(keys)[0] as string;
              onCategorySelect(value || '');
            }}
          >
            <SelectItem key="">Всі категорії</SelectItem>
            <>
              {categories.map((cat) => (
                <SelectItem key={cat}>{cat}</SelectItem>
              ))}
            </>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FindNewPlaces;
