'use client'

import { useCallback, useState } from 'react'
import Papa from 'papaparse'
import { CsvVehicle } from '../types/csv'
import { uploadbulk } from '../services/dealer/CreateBulk'

export default function useCsvImport() {
  const [rows, setRows] = useState<CsvVehicle[]>([])
  const [errors, setErrors] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return
    setLoading(true)
    setErrors([])
    Papa.parse<CsvVehicle>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setRows(results.data)
        if (results.errors.length > 0) {
          setErrors(
            results.errors.map(
              (error) => error.message
            )
          )
        }
        setLoading(false)
      },
      error: (error) => {
        setErrors([error.message])
        setLoading(false)
      },
    })
  }, [])
  const clear = () => {
    setRows([])
    setErrors([])
  }
  const upload=async()=>{
    try {
      // loading state
        const res=await uploadbulk(rows) 
        if (res.success) {
          alert(`${res.imported} vehicles imported successfully`)
          clear()
        }
    } catch (error) {
        console.error(error)
    }
  }
  return {
    rows,errors,loading,onDrop,clear,upload
  }
}