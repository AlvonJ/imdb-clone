'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [search, setSearch] = useState('');

  const router = useRouter();

  const handleSubmit = ev => {
    ev.preventDefault();

    if (!search) return;

    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-7xl mx-auto justify-between items-center px-5"
    >
      <input
        value={search}
        onChange={ev => setSearch(ev.target.value)}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
