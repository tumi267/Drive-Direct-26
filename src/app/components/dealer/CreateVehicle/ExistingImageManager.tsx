'use client'

import Image from 'next/image'
import useImageOrder from '@/app/hooks/useImageOrder'
import { UploadedImage } from '@/app/types/vehicle'
interface Props {
    savedImages: UploadedImage[]
    setSavedimages: React.Dispatch<
        React.SetStateAction<UploadedImage[]>
      >
    }
function ExistingImageManager({savedImages,setSavedimages,}: Props) {
    const {handleDragStart,handleDrop,} = useImageOrder(savedImages,setSavedimages)
    
    return (
      <div className="grid grid-cols-4 gap-1">
        {savedImages.map((image, index) => (
          <div
            key={`${image.publicId}-${index}`}
            draggable
            onDragStart={() =>
              handleDragStart(index)
            }
            onDragOver={(e) =>
              e.preventDefault()
            }
            onDrop={() =>
              handleDrop(index)
            }
          >
            <Image
              src={
                 image.url
                }
              alt={`Image ${index + 1}`}
              width={200}
              height={100}
            />
            <p>
              Position {index + 1}
            </p>
          </div>
        ))}
      </div>
    )
  }

export default ExistingImageManager





