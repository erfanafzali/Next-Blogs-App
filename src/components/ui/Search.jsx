"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const formSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search;
    const searchValue = search.value;

    //url
    const newParams = new URLSearchParams(searchParams.toString());

    if (searchValue) {
      newParams.set("q", searchValue);
    } else {
      newParams.delete("q");
    }

    router.push(pathname + "?" + newParams.toString());
  };

  return (
    <form className="relative w-full lg:w-1/3" onSubmit={formSubmit}>
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
