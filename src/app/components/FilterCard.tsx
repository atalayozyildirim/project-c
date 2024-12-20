import React, { useState } from "react";
import ButtonFilter from "./ButtonFilter";

interface ButtonFilterProps {
  click: () => void;
}
export default function FilterCard(prop: ButtonFilterProps) {
  const [price, setPrice] = useState(0);
  const [groupSize, setGroupSize] = useState(0);
  const [date, setDate] = useState(0);
  const [location, setLocation] = useState("");

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const handleGroupSizeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGroupSize(Number(event.target.value));
  };
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(Number(event.target.value));
  };
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };
  const filterClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <div className="min-h-screen min-w-full  border-t-2  border-b-2   rounded-b-3xl rounded-t-3xl ">
        <div className="flex flex-row justify-between items-center p-5">
          <button className="text-2xl p-2 w-36 rounded-lg text-white bg-[#F2A945]">
            Tour
          </button>
          <span className="text-2xl underline">Filter</span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12 cursor-pointer"
              onClick={prop.click}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <span className="text-2xl font-bold ">Location</span>
          <input
            type="text"
            placeholder="Search location"
            onChange={handleLocationChange}
            className="border-2 rounded-lg text-black  p-2 mt-2"
          />
          {location && (
            <span className="mt-2 inline-block min-w-36 max-w-52 font-bold bg-[#F2A945] text-gray-800 text-sm px-2 py-1 rounded-full">
              {location}
            </span>
          )}
        </div>
        <div className="flex flex-col p-4">
          <span className="text-2xl font-bold ">Theme</span>
          <div className="flex gap-2 mt-2 flex-wrap">
            <ButtonFilter text="İsland" />
            <ButtonFilter text="Land Tour" />
            <ButtonFilter text="Safari" />
          </div>
        </div>
        <div className="flex flex-col p-4">
          <span className="text-2xl font-bold ">Activy</span>
          <div className="flex gap-2 mt-2 flex-wrap">
            <ButtonFilter text="Swimming" />
            <ButtonFilter text="Running" />
            <ButtonFilter text="Elephant Care" />
            <ButtonFilter text="snarkelling" />
          </div>
        </div>
        <div className="p-4 flex flex-col">
          <span className="text-xl font-bold ">Price</span>
          <div className="flex w-screen items-center flex-row gap-2 mt-2 flex-wrap">
            <input
              type="range"
              min="0"
              placeholder="0"
              max="12500"
              value={price}
              onChange={handlePriceChange}
              className=" h-1 w-3/4 bg-white rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="number"
              min="0"
              max="12500"
              placeholder="0"
              value={price}
              onChange={handlePriceChange}
              className="price-input rounded-lg p-2 text-black"
            />
          </div>
          <div className="flex w-screen items-center flex-row gap-2 mt-2 flex-wrap">
            <span className="text-xl font-bold ">Date</span>
            <div className="flex flex-row w-screen items-center gap-2">
              <input
                type="range"
                min="0"
                placeholder="0"
                max="23:59"
                value={date}
                onChange={handleDateChange}
                className=" h-1 w-3/4 bg-white rounded-lg appearance-none cursor-pointer"
              />
              <input
                type="number"
                min="0"
                max="23:59"
                placeholder="0"
                value={date}
                onChange={handleDateChange}
                className="price-input rounded-lg p-2 text-black"
              />
            </div>
          </div>
          <div className="flex w-screen flex-col  gap-2 mt-2 flex-wrap">
            <span className="text-xl font-bold ">Group Size</span>

            <div className="flex flex-row w-screen items-center gap-2">
              <input
                type="range"
                min="0"
                placeholder="0"
                max="40"
                value={groupSize}
                onChange={handleGroupSizeChange}
                className=" h-1 w-3/4 bg-white rounded-lg appearance-none cursor-pointer"
              />
              <input
                type="number"
                min="0"
                max="40"
                placeholder="0"
                value={groupSize}
                onChange={handleGroupSizeChange}
                className="price-input rounded-lg p-2 text-black"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col  p-4">
          <span className="text-2xl font-bold ">Vehicle</span>
          <div className="flex gap-2 mt-2 flex-wrap">
            <ButtonFilter text="Yhact" />
            <ButtonFilter text="SpeedBoat" />
            <ButtonFilter text="Safari" />
            <ButtonFilter text="Catarman" />
            <ButtonFilter text="SpeedCatarman" />
          </div>
        </div>
        <div className="flex flex-col  p-4">
          <span className="text-2xl font-bold ">Features</span>
          <div className="flex gap-2 mt-2 flex-wrap">
            <ButtonFilter text="Transfer" />
            <ButtonFilter text="Halal Food" />
            <ButtonFilter text="Vegetarian Food" />
          </div>
        </div>
        <div className="flex flex-row items-end justify-end  w-full p-1 mr-12 pr-5 pb-4">
          <div className="flex flex-row gap-2">
            <button
              className="bg-[#F2A945] text-white w-full p-3 rounded-xl"
              onClick={filterClick}
            >
              Apply
            </button>
            <button className="bg-[#F2A945] text-white w-full p-3 rounded-xl">
              Reset
            </button>
          </div>
        </div>
        <div className="h-16"></div>
      </div>
    </>
  );
}
