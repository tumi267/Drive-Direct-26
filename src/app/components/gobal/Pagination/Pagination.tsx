'use client'

import Link from 'next/link'

interface Props {
  currentPage: number
  totalPages: number
}

function Pagination({
  currentPage,
  totalPages,
}: Props) {
  return (
    <div className="flex justify-center gap-2 mt-10">

      {currentPage > 1 && (
        <Link
          href={`/vehicle?page=${currentPage - 1}`}
          className="border px-4 py-2 rounded"
        >
          Previous
        </Link>
      )}

      {Array.from(
        { length: totalPages },
        (_, i) => i + 1
      ).map(page => (
        <Link
          key={page}
          href={`/vehicle?page=${page}`}
          className={`border px-4 py-2 rounded ${
            page === currentPage
              ? 'bg-black text-white'
              : ''
          }`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={`/vehicle?page=${currentPage + 1}`}
          className="border px-4 py-2 rounded"
        >
          Next
        </Link>
      )}

    </div>
  )
}

export default Pagination