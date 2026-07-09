'use client'

import { useDealerStore } from '@/app/store/dealerStore'

function CreateUser() {
  const { dealer } = useDealerStore()

  if (!dealer) {
    return (
      <div className="rounded-lg border p-6">
        loading dealer profile
      </div>
    )
  }
  const {createdAt,firstName,lastName,role,status,} = dealer
  return (
    <section className="max-w-3xl rounded-xl border bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Dealer Profile
        </h1>
        <p className="text-gray-500">
          Your dealership account information.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-sm text-gray-500">
            First Name
          </p>
          <p className="text-lg font-semibold">
            {firstName}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            Last Name
          </p>
          <p className="text-lg font-semibold">
            {lastName}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Role</p>
          <span className="inline-block rounded-full bg-gray-100  py-1 text-sm font-medium">{role}</span>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            Status
          </p>
          <span
            className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
              status === 'ACTIVE'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {status}
          </span>
        </div>
        <div className="md:col-span-2">
          <p className="text-sm text-gray-500">
            Member Since
          </p>
          <p className="font-medium">
            {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </section>
  )
}
export default CreateUser