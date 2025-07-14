"use client";

import React, { useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      buttonRef.current?.click();
    }
  };

  return (
    <div className="flex">
      <input
        className="searchShape bg-[var(--background-color)] w-[317px] h-[40px] text-base px-7 italic"
        type="text"
        placeholder="Search"
        onKeyDown={handleKeyDown}
      />
      <button
        ref={buttonRef}
        className="searchButtonShape -ml-[16px] flex items-center text-xl justify-center bg-[var(--background-color)] w-[72.71px] h-[40px] hover:bg-[#282836] cursor-pointer"
      >
        <IoSearchSharp />
      </button>
    </div>
  );
};

export default SearchBar;
