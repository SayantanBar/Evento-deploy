"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchText);
    if (!searchText) return;
    router.push(`/events/${searchText}`);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search events in any city"
        spellCheck={false}
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50  transition focus:ring-2 focus:bg-white/10 "
      />
    </form>
  );
};

export default SearchForm;
