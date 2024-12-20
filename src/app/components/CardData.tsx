import React from "react";
import Image from "next/image";

interface Gallery {
  id: number;
  url: string;
}

interface Tour {
  title: string;
  description: string;
  galleries: Gallery[];
}

interface Props {
  tours: Tour[];
}

const CardData = ({ tours }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {tours.map((tour, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src={tour.galleries[0]?.url || "/default-image.jpg"} // Use the first image URL or a default image
            alt={tour.title}
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{tour.title}</h2>
            <p className="text-gray-700 mt-2">{tour.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardData;
