'use client'
import useAddUser from "@/app/hooks/useAddUserForm"
import { createDealerUser } from "@/app/services/dealer/CreateDealer"
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{8,64}$/
function AddUserForm() {
  const {formData,loading,error,setLoading,setError,updateField,reset,showPassword,setShowPassword} = useAddUser()

  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{e.preventDefault()
    try { setLoading(true)
      setError(null)
      if(!PASSWORD_REGEX.test( formData.password)){
        setError( 'Password must be between 8 and 64 characters and contain at least one uppercase letter, one lowercase letter, one number and one special character.' )
        setLoading(false) 
        return 
      }
        const newDealer=await createDealerUser(formData)
        if (newDealer.success){
           reset()
          alert( 'Dealer user created successfully.' )
        } 
      } catch(err){
         if(err instanceof Error){
           if(err.message.toLowerCase().includes('breach'))
            { setError( 'This password has appeared in a known data breach. Please choose another password.')}
             else { setError(err.message) 
            }
          } else{
             setError( 'Something went wrong.')}}
              finally { setLoading(false)
              }
          }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl space-y-5 rounded-xl border bg-white p-8"
    >
      <div>
        <h1 className="text-3xl font-bold">
          Add Dealer User
        </h1>

        <p className="text-gray-500">
          Create a new employee account for your dealership.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-1 block text-sm font-medium">
            First Name
          </label>

          <input
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              updateField(
                'firstName',
                e.target.value
              )
            }
            className="w-full rounded border p-2"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Last Name
          </label>

          <input
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              updateField(
                'lastName',
                e.target.value
              )
            }
            className="w-full rounded border p-2"
            required
          />
        </div>

      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Email Address
        </label>

        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            updateField(
              'email',
              e.target.value
            )
          }
          className="w-full rounded border p-2"
          required
        />
        <label className="mb-1 block text-sm font-medium">
          Password
        </label>
        <div className="flex gap-2">
         <input
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={(e) =>
            updateField(
              'password',
              e.target.value
            )
          }
          className="w-full rounded border p-2"
          required
        />
        <button type="button" onClick={() => setShowPassword( !showPassword ) } className="rounded-md border px-4 hover:bg-gray-100" > {showPassword ? 'Hide' : 'Show'} </button>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Role
        </label>

        <select
          value={formData.role}
          onChange={(e) =>
            updateField(
              'role',
              e.target.value as
                | 'OWNER'
                | 'MANAGER'
                | 'SALES'
            )
          }
          className="w-full rounded border p-2"
        >
          <option value="OWNER">
            Owner
          </option>

          <option value="MANAGER">
            Manager
          </option>

          <option value="SALES">
            Sales
          </option>
        </select>
      </div>

      {error && (
        <div className="rounded border border-red-200 bg-red-50 p-3 text-red-600">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="rounded bg-black px-6 py-2 text-white hover:bg-gray-800 disabled:opacity-50"
      >
        {loading
          ? 'Creating User...'
          : 'Create User'}
      </button>
    </form>
  )
}

export default AddUserForm