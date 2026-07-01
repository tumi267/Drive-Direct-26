import Link from 'next/link'

function Hero() {
    // place holder will be dynamic
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-3xl">

          <h1 className="text-5xl font-bold leading-tight">
            Find your next
            <span className="text-blue-600">
              {' '}dream car
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Browse thousands of quality vehicles from
            trusted dealers across South Africa.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              href="/vehicle"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Browse Cars
            </Link>

            {/* <Link
              href="/sell"
              className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100"
            >
              Sell Your Car
            </Link> */}

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero