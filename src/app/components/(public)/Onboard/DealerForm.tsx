import useDealerOnboard from '@/app/hooks/useDealerOnboard'
import { createDealer } from '@/app/services/dealer/CreateDealer'
import { useRouter } from 'next/navigation'

import React from 'react'

function DealerForm() {
  const router = useRouter()
  const {formData,loading,error,setLoading,setError,updateField} = useDealerOnboard()
  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      await createDealer(formData)
      router.push('/dealer')
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Company Name  "
        value={formData.companyName}
        onChange={(e) =>
          updateField('companyName', e.target.value)
        }
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Trading Name "
        value={formData.tradingName}
        onChange={(e) =>
          updateField('tradingName', e.target.value)
        }
        className="border p-2 rounded"
      />
      <input
        type="email"
        placeholder="email"
        value={formData.email}
        onChange={(e) =>
          updateField('email', e.target.value)
        }
        className="border p-2 rounded"
      />
        <input
        type="text"
        placeholder="phone"
        value={formData.phone}
        onChange={(e) =>
          updateField('phone', e.target.value)
        }
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="admin first name"
        value={formData.firstName}
        onChange={(e) =>
          updateField('firstName', e.target.value)
        }
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="admin last name"
        value={formData.lastName}
        onChange={(e) =>
          updateField('lastName', e.target.value)
        }
        className="border p-2 rounded"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          console.log('image')
          // updateLogo(e.target.files?.[0] ?? null)
        }
        className="border p-2 rounded"
      />
      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading|| !formData.clerkid}
        className="border p-2 rounded"
      >
        {loading ? 'Creating Account...' : 'Continue'}
      </button>
          
    </form>
  )
}

export default DealerForm