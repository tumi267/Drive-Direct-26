'use client'

import useManageDealer from '@/app/hooks/useManageDealer'
import { DealerUser } from '@/app/types/dealer'
import Link from 'next/link'

function ManageDealer() {
  const { users, loading, error } = useManageDealer()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (users.length === 0) {
    return <div>No users found.</div>
  }

  return (
    <section className="space-y-6">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
        <h1 className="text-3xl font-bold">
          Manage Users
        </h1>

        <p className="text-gray-500">
          Manage employees who have access to your dealership.
        </p>
        </div>
        <div className='flex justify-end pr-[1.5em]'>
        <Link href='/dealer/adduser'><button>add user</button></Link>
        </div>
      </div>

      <div className="space-y-4">
        {users.map((user: DealerUser) => (
          <div
            key={user.id}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <div>
              <h2 className="font-semibold text-lg">
                {user.firstName} {user.lastName}
              </h2>

              <p className="text-sm text-gray-500">
                {user.role}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  user.status === 'ACTIVE'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {user.status}
              </span>

              <button className="rounded border px-3 py-1 text-sm hover:bg-gray-100">
                Edit
              </button>

              <button className="rounded border border-red-300 px-3 py-1 text-sm text-red-600 hover:bg-red-50">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ManageDealer