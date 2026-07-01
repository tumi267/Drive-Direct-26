interface Props {
    description: string | null | undefined
  }
  
  export default function VehicleDescription({
    description,
  }: Props) {
    return (
      <section className="mt-12">
  
        <h2 className="text-2xl font-bold mb-4">
          Description
        </h2>
  
        <div className="border rounded-lg p-6">
  
          {description?.trim().length ? (
            <p>{description}</p>
          ) : (
            <p className="text-gray-500">
              No description available.
            </p>
          )}
  
        </div>
  
      </section>
    )
  }