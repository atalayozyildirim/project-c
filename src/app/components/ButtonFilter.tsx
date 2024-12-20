import React from "react";

interface ButtonFilterProps {
  text: string;
}

export default function ButtonFilter(prop: ButtonFilterProps) {
  const [show, setShow] = React.useState(false);
  const filterClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className={`w-36 p-1 rounded-lg h-auto shadow-xl text-black ${
          show ? "bg-[#F2A945]" : "bg-white"
        }`}
        onClick={filterClick}
      >
        {prop.text}
      </div>
    </>
  );
}
