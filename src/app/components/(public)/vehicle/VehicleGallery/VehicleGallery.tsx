'use client'

import { useState } from 'react'
import Image from 'next/image'
import { VehicleImage } from '@/app/types/vehicle'

interface Props {
  images: VehicleImage[]
}

export default function VehicleGallery({
  images,
}: Props) {
  const [selected, setSelected] = useState(0)

  if (!images.length) {
    return (
      <div className="border rounded-lg h-[500px] flex items-center justify-center">
        No Images
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <Image
        src={images[selected].url}
        alt="Vehicle"
        width={800}
        height={600}
        className="rounded-lg object-cover w-full h-[500px]"
      />

      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelected(index)}
          >
            <Image
              src={image.url}
              alt=""
              width={150}
              height={100}
              className={`rounded object-cover h-24 w-full ${
                selected === index
                  ? 'ring-2 ring-blue-500'
                  : ''
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}