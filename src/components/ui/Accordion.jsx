import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordion = ({ data, isOpen, setIsOpen, index }) => {
  return (
    <div className="border rounded-md">
      <button
        onClick={() => setIsOpen(index)}
        className="w-full flex justify-between items-center p-5"
      >
        <h1 className="font-medium text-lg md:text-xl">{data.title}</h1>
        <span className="p-2 border rounded-full text-slate-300">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-200ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 px-5 pb-5"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <hr className="mb-5" />
          <p className="text-xs md:text-sm">{data.value}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
