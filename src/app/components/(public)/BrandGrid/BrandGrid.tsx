import { brands } from '@/app/libs/dumie'
import Link from 'next/link'
import React from 'react'

function BrandGrid() {
   
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
    {brands.map((brand) => (
      <Link
        key={brand.id}
        href={`/vehicle?search=${brand.title}`}
        className="border rounded-lg p-4 hover:shadow-md transition text-center"
      >
        {/* logo images goes here */}

        <p>{brand.title}</p>
      </Link>
    ))}
  </div>
  )
}

export default BrandGrid