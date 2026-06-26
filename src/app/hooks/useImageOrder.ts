'use client'

import { useState } from 'react'

function useImageOrder<T>(images: T[],setImages: React.Dispatch<React.SetStateAction<T[]>>) {
  const [dragIndex, setDragIndex] =useState<number | null>(null)
  const handleDragStart = (index: number) => {
    setDragIndex(index)
  }

  const handleDrop = (dropIndex: number) => {
    if (dragIndex === null ||dragIndex === dropIndex) {
      return
    }
    const updated = [...images]
    const [dragged] = updated.splice(dragIndex,1)
    updated.splice(dropIndex,0, dragged)
    setImages(updated)
    setDragIndex(null)
  }

  return {
    handleDragStart,
    handleDrop,
  }
}

export default useImageOrder