"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import CardData from "./components/CardData";
import FilterCard from "./components/FilterCard";

interface Gallery {
  id: number;
  url: string;
}

interface Tour {
  title: string;
  description: string;
  galleries: Gallery[];
}

export default function Home() {
  const [show, setShow] = useState(false);
  const [tours, setTours] = useState<Tour[]>([]);

  const handleClick = () => {
    setShow(!show);
    console.log("FilterCard visibility toggled:", !show);
  };

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(
          "https://beta.tripkolic.com/api/v1/product/task/tours"
        );
        setTours((response?.data as { products: Tour[] }).products);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []);

  return (
    <>
      <div className="h-screen w-screen relative">
        <Navbar click={handleClick} />
        <div className="flex justify-center items-center h-full">
          <CardData tours={tours} />
        </div>
      </div>
      {show && (
        <div className="fixed top-16 left-0 w-full h-full bg-black  overflow-auto ">
          <FilterCard click={handleClick} />
        </div>
      )}
    </>
  );
}
