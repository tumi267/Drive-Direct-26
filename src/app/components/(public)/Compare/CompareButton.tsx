'use client'
import { Vehicle } from '@/app/types/vehicle'
import useCompare from '@/app/hooks/useCompare'

interface Props {vehicle: Vehicle}

function CompareButton({vehicle,}: Props) {

  const {isSelected,toggleVehicle} = useCompare(vehicle)

  return (
    <button  onClick={toggleVehicle}>
    {isSelected
    ? 'Remove from Compare'
    : 'Compare'}
    </button>
  )
}

export default CompareButton