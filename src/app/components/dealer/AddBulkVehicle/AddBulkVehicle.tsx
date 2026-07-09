'use client'

import useCsvImport from '@/app/hooks/useCssvImport'
import { useDropzone } from 'react-dropzone'

function AddBulkVehicle() {
  const {rows,errors,loading,onDrop,clear,} = useCsvImport()

  const { getRootProps,getInputProps,isDragActive,} = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
    },
    multiple: false,
  })
  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`rounded-lg border-2 border-dashed p-10 text-center cursor-pointer transition
          ${
            isDragActive
              ? 'border-black bg-gray-100'
              : 'border-gray-300'
          }
        `}
      >
        <input {...getInputProps()} />
        <h2 className="text-xl font-semibold">
          Bulk Vehicle Import
        </h2>
        <p className="mt-2 text-gray-500">
          Drag and drop your CSV here
        </p>
        <p className="text-sm text-gray-400">
          or click to browse
        </p>
      </div>
      {loading && (
        <p>Parsing CSV...</p>
      )}
      {errors.length > 0 && (
        <div className="rounded border border-red-300 bg-red-50 p-4">
          <h3 className="font-semibold">
            CSV Errors
          </h3>
          <ul className="list-disc pl-5">
            {errors.map((error) => (
              <li key={error}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      )}
      {rows.length > 0 && (
        <div className="rounded border p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">
              {rows.length} Vehicles Ready
            </h3>
            <button
              onClick={clear}
              className="rounded border px-4 py-2"
            >
              Clear
            </button>
          </div>
          <p className="mt-4 text-gray-500">
            Preview table coming next...
          </p>
        </div>
      )}
    </div>
  )
}

export default AddBulkVehicle