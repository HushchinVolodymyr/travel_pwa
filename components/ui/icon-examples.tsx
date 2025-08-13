import React from "react";
import { 
  Heart, 
  MapPin, 
  Star, 
  Camera, 
  Plane, 
  Hotel, 
  Utensils,
  Wifi,
  Car,
  Mountain,
  Beach,
  TreePine
} from "lucide-react";

// Example component showing how to use Lucide icons
export const IconExamples: React.FC = () => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Lucide Icons Examples</h2>
      
      {/* Basic usage */}
      <div className="flex items-center gap-2">
        <Heart className="w-5 h-5 text-red-500" />
        <span>Heart icon</span>
      </div>
      
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-blue-500" />
        <span>Location icon</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Star className="w-5 h-5 text-yellow-500" />
        <span>Star icon</span>
      </div>
      
      {/* Travel-related icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
          <Plane className="w-8 h-8 text-blue-600" />
          <span className="text-sm">Flight</span>
        </div>
        
        <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
          <Hotel className="w-8 h-8 text-green-600" />
          <span className="text-sm">Hotel</span>
        </div>
        
        <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
          <Utensils className="w-8 h-8 text-orange-600" />
          <span className="text-sm">Restaurant</span>
        </div>
        
        <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
          <Camera className="w-8 h-8 text-purple-600" />
          <span className="text-sm">Photo</span>
        </div>
        
        <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
          <Wifi className="w-8 h-8 text-gray-600" />
          <span className="text-sm">WiFi</span>
        </div>
        
        <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
          <Car className="w-8 h-8 text-red-600" />
          <span className="text-sm">Transport</span>
        </div>
        
        <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
          <Mountain className="w-8 h-8 text-brown-600" />
          <span className="text-sm">Mountain</span>
        </div>
        
        <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
          <Beach className="w-8 h-8 text-cyan-600" />
          <span className="text-sm">Beach</span>
        </div>
      </div>
    </div>
  );
};

// Example of using Lucide icons with your existing UICard component
export const UICardWithIcons: React.FC<{ place: any }> = ({ place }) => {
  return (
    <div className="border rounded-lg p-4 space-y-2">
      <div className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-blue-500" />
        <h3 className="font-semibold">{place.name}</h3>
      </div>
      
      <p className="text-sm text-gray-600">{place.description}</p>
      
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span>4.5</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Heart className="w-4 h-4 text-red-500" />
          <span>Save</span>
        </div>
      </div>
    </div>
  );
};

export default IconExamples;
