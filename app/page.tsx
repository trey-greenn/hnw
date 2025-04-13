import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="relative h-[80vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/beach.png" // You'll need to add this image to your public folder
            alt="Beautiful waterfront homes in the United States"
            fill
            priority
            className="object-cover brightness-[0.85]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        
        <nav className="relative z-10 flex items-center justify-between p-6 md:p-8">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white md:text-3xl">
              <Link href="/">HousesNearWater</Link>
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#browse-state" className="text-white hover:text-blue-200 transition">Browse by State</Link>
            <Link href="#browse-city" className="text-white hover:text-blue-200 transition">Browse by City</Link>
            <Link href="#water-type" className="text-white hover:text-blue-200 transition">Water Types</Link>
            <Link href="#featured" className="text-white hover:text-blue-200 transition">Featured Waters</Link>
          </div>
        </nav>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl max-w-4xl">
            Discover Your Perfect Waterfront Home
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Explore lakefront, oceanfront, and riverfront properties across the United States
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl bg-white rounded-full overflow-hidden shadow-lg">
            <div className="flex items-center p-2">
              <input 
                type="text" 
                placeholder="Search by state, city, or water body..." 
                className="w-full px-4 py-2 text-gray-800 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 py-12 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Browse by State Section */}
        <section id="browse-state" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Browse by State</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Florida', 'California', 'Michigan', 'New York', 'Washington', 'Texas', 'North Carolina', 'Massachusetts'].map((state) => (
              <Link
                key={state}
                href={`/states/${state.toLowerCase().replace(' ', '-')}`}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition text-center border border-gray-100"
              >
                <h3 className="font-medium text-gray-800">{state}</h3>
              </Link>
            ))}
            <Link
              href="/states"
              className="bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition text-center border border-blue-100 flex items-center justify-center"
            >
              <span className="font-medium text-blue-600">All 50 States →</span>
            </Link>
          </div>
        </section>

        {/* Browse by City Section */}
        <section id="browse-city" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Popular Waterfront Cities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Miami, FL', image: '/beach.png' },
              { name: 'Seattle, WA', image: '/beach.png' },
              { name: 'Chicago, IL', image: '/beach.png' },
              { name: 'San Diego, CA', image: '/beach.png' },
              { name: 'Boston, MA', image: '/beach.png' },
              { name: 'New Orleans, LA', image: '/beach.png' },
            ].map((city) => (
              <Link
                key={city.name}
                href={`/cities/${city.name.split(',')[0].toLowerCase().replace(' ', '-')}`}
                className="relative h-48 rounded-xl overflow-hidden group"
              >
                <Image
                  src={city.image} // You'll need these images in your public folder
                  alt={`Waterfront homes in ${city.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{city.name}</h3>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/cities"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              View all waterfront cities <span className="ml-2">→</span>
            </Link>
          </div>
        </section>

        {/* Browse by Water Type Section */}
        <section id="water-type" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Browse by Water Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: 'Oceanfront', image: '/beach.png', description: 'Properties with direct access to oceans and seas' },
              { type: 'Lakefront', image: '/beach.png', description: 'Homes on the shores of beautiful lakes' },
              { type: 'Riverfront', image: '/beach.png', description: 'Houses along scenic rivers and streams' },
              { type: 'Canal/Waterway', image: '/beach.png', description: 'Properties on canals and waterways' },
            ].map((waterType) => (
              <Link
                key={waterType.type}
                href={`/water-type/${waterType.type.toLowerCase()}`}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group"
              >
                <div className="relative h-48">
                  <Image
                    src={waterType.image} // You'll need these images in your public folder
                    alt={`${waterType.type} properties`}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{waterType.type} Homes</h3>
                  <p className="text-gray-600 text-sm">{waterType.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Bodies of Water Section */}
        <section id="featured" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Bodies of Water</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Lake Tahoe', states: 'California, Nevada', image: '/beach.png' },
              { name: 'Gulf of Mexico', states: 'Florida, Texas, Louisiana', image: '/beach.png' },
              { name: 'Chesapeake Bay', states: 'Maryland, Virginia', image: '/beach.png' },
              { name: 'Hudson River', states: 'New York', image: '/beach.png' },
            ].map((water) => (
              <Link
                key={water.name}
                href={`/bodies-of-water/${water.name.toLowerCase().replace(' ', '-')}`}
                className="relative h-64 rounded-xl overflow-hidden group"
              >
                <Image
                  src={water.image} // You'll need these images in your public folder
                  alt={`Homes near ${water.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{water.name}</h3>
                  <p className="text-sm opacity-90">{water.states}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/bodies-of-water"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Explore all featured water bodies <span className="ml-2">→</span>
            </Link>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-blue-600 text-white rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Find Your Dream Waterfront Home</h2>
              <p className="text-blue-100 max-w-xl">
                Join thousands of homebuyers who discovered their perfect property by the water. Start your search today.
              </p>
            </div>
            <Link
              href="/search"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition whitespace-nowrap"
            >
              Start Searching
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HousesNearWater</h3>
              <p className="text-gray-400 text-sm">
                The premier destination for discovering waterfront properties across the United States.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Browse Properties</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/states" className="hover:text-white transition">By State</Link></li>
                <li><Link href="/cities" className="hover:text-white transition">By City</Link></li>
                <li><Link href="/water-type" className="hover:text-white transition">By Water Type</Link></li>
                <li><Link href="/bodies-of-water" className="hover:text-white transition">By Body of Water</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Water Types</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/water-type/oceanfront" className="hover:text-white transition">Oceanfront</Link></li>
                <li><Link href="/water-type/lakefront" className="hover:text-white transition">Lakefront</Link></li>
                <li><Link href="/water-type/riverfront" className="hover:text-white transition">Riverfront</Link></li>
                <li><Link href="/water-type/canal" className="hover:text-white transition">Canal/Waterway</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} HousesNearWater.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}