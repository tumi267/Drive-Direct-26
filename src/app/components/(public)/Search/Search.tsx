'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

function Search() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    if (!search.trim()) return

    router.push(
      `/vehicle?search=${encodeURIComponent(
        search.trim()
      )}`
    )
  }

  return (
    <div className="flex w-full max-w-3xl mx-auto">
      <input
        type="text"
        placeholder="Search BMW, M3, 2026, Manual..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch()
          }
        }}
        className="flex-1 border rounded-l-lg p-4 outline-none"
      />

      <button
        onClick={handleSearch}
        className="bg-black text-white px-6 rounded-r-lg"
      >
        Search
      </button>
    </div>
  )
}

export default Search