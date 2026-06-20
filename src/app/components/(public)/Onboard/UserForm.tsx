'use client'

import { useRouter } from 'next/navigation'

import useUserOnboardForm from '@/app/hooks/useUserOnboardForm'
import { createUser } from '@/app/services/user/CreateUser'

export default function UserOnboardingForm() {
  const router = useRouter()

  const {formData,loading,error,setLoading,setError,updateField} = useUserOnboardForm()
  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError(null)
      await createUser(formData)
      router.push('/User')
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) =>
          updateField('firstName', e.target.value)
        }
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) =>
          updateField('lastName', e.target.value)
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