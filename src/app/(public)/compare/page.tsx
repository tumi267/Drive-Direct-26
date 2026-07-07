import CompareBar from '@/app/components/(public)/Compare/CompareBar'
import CompareTable from '@/app/components/(public)/Compare/CompareTable'

export default function ComparePage() {

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-4xl font-bold">
        Compare Vehicles
      </h1>
      <CompareBar/>
      <CompareTable />
    </div>
  )
}