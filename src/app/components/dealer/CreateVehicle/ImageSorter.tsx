'use client'
// need to fix type 
import Image from 'next/image'
import useImageOrder from '@/app/hooks/useImageOrder'

interface Props {
images: File[]
  setImages: React.Dispatch<
    React.SetStateAction<File[]>
  >
}

function ImageSorter({images,setImages,}: Props) {
  const {handleDragStart,handleDrop,} = useImageOrder(images,setImages)
  
  return (
    <div className="grid grid-cols-4 gap-1">
      {images.map((image, index) => (
        <div
          key={`${image.name}-${index}`}
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
            src={image instanceof File
              ? URL.createObjectURL(image)
              : image.url}
            alt={`Image ${index + 1}`}
            width={200}
            height={200}
          />
          <p>
            Position {index + 1}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ImageSorter