'use client'

import React from 'react'
import useVehicleForm from '@/app/hooks/useVehicleForm'
import { createVehicle } from '@/app/services/dealer/CreateVehicle'
import { useRouter } from 'next/navigation'

function CreateVehicleForm() {
  const {formData,loading,setLoading,setError,error,updateField,} = useVehicleForm()
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      await createVehicle(formData)
      router.push('/dealer/listings')
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-2xl"
    >
      <input
        type="text"
        placeholder="Make"
        value={formData.make}
        onChange={(e) =>
          updateField('make', e.target.value)
        }
        className="border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Model"
        value={formData.model}
        onChange={(e) =>
          updateField('model', e.target.value)
        }
        className="border p-2 rounded"
      />

      <input
        type="text"
        placeholder="Variant"
        value={formData.variant}
        onChange={(e) =>
          updateField('variant', e.target.value)
        }
        className="border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Year"
        value={formData.year}
        onChange={(e) =>
          updateField(
            'year',
            Number(e.target.value)
          )
        }
        className="border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Mileage"
        value={formData.mileage}
        onChange={(e) =>
          updateField(
            'mileage',
            Number(e.target.value)
          )
        }
        className="border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) =>
          updateField(
            'price',
            Number(e.target.value)
          )
        }
        className="border p-2 rounded"
      />

      <select
        value={formData.fuelType}
        onChange={(e) =>
          updateField(
            'fuelType',
            e.target.value as typeof formData.fuelType
          )
        }
        className="border p-2 rounded"
      >
        <option value="PETROL">
          Petrol
        </option>
        <option value="DIESEL">
          Diesel
        </option>
        <option value="HYBRID">
          Hybrid
        </option>
        <option value="ELECTRIC">
          Electric
        </option>
      </select>

      <select
        value={formData.transmission}
        onChange={(e) =>
          updateField(
            'transmission',
            e.target.value as typeof formData.transmission
          )
        }
        className="border p-2 rounded"
      >
        <option value="MANUAL">
          Manual
        </option>
        <option value="AUTOMATIC">
          Automatic
        </option>
      </select>

      <select
        value={formData.bodyType}
        onChange={(e) =>
          updateField(
            'bodyType',
            e.target.value as typeof formData.bodyType
          )
        }
        className="border p-2 rounded"
      >
        <option value="SEDAN">
          Sedan
        </option>
        <option value="HATCHBACK">
          Hatchback
        </option>
        <option value="SUV">
          SUV
        </option>
        <option value="COUPE">
          Coupe
        </option>
        <option value="CONVERTIBLE">
          Convertible
        </option>
        <option value="BAKKIE">
          Bakkie
        </option>
        <option value="VAN">
          Van
        </option>
      </select>

      <input
        type="text"
        placeholder="Colour"
        value={formData.colour}
        onChange={(e) =>
          updateField('colour', e.target.value)
        }
        className="border p-2 rounded"
      />

      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          updateField(
            'description',
            e.target.value
          )
        }
        className="border p-2 rounded"
        rows={5}
      />

      {error && (
        <p className="text-red-500">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="border p-2 rounded"
      >
        {loading
          ? 'Creating Vehicle...'
          : 'Create Vehicle'}
      </button>
    </form>
  )
}

export default CreateVehicleForm