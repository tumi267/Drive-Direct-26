'use client'

interface DashboardPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function DashboardPagination({
  currentPage,
  totalPages,
  onPageChange,
}: DashboardPaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  )

  return (
    <div className="mt-6 flex items-center justify-center gap-2">

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded border px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded border px-3 py-2 transition ${
            page === currentPage
              ? 'bg-black text-white'
              : 'bg-white hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded border px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>

    </div>
  )
}