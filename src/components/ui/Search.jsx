"use client";

import { FiSearch } from "react-icons/fi";


export default function Search() {
 

  return (
    <form  className="relative w-full lg:w-1/3">
      <input
        type="text"
        name="search"
        placeholder="جستجو ..."
        autoComplete="off"
        className="textField__input py-3 text-xs bg-secondary-0 "
      />
      <button
        type="submit"
        className="absolute left-0 top-0 ml-3 flex h-full items-center "
      >
        <FiSearch className="h-4 text-secondary-400" />
      </button>
    </form>
  );
}
