export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Clinic Gallery
          </h2>
          <p className="text-gray-600 mt-2">
            Take a look at our modern dental clinic
          </p>
        </div>

        {/* CUSTOM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* BIG LEFT */}
          <div className="md:col-span-2">
            <img
              src="https://images.pexels.com/photos/305567/pexels-photo-305567.jpeg"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg hover:scale-105 transition"
            />
          </div>

          {/* RIGHT TOP */}
          <div className="flex flex-col gap-6">
            <img
              src="https://images.pexels.com/photos/6502635/pexels-photo-6502635.jpeg"
              className="w-full h-[190px] object-cover rounded-2xl shadow-lg hover:scale-105 transition"
            />

            <img
              src="/imgs/hero.jpeg"
              className="w-full h-[190px] object-cover rounded-2xl shadow-lg hover:scale-105 transition"
            />
          </div>

          {/* BOTTOM 3 */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
            <img
              src="https://images.unsplash.com/photo-1643660526741-094639fbe53a"
              className="w-full h-[200px] object-cover rounded-2xl shadow-lg hover:scale-105 transition"
            />

            <img
              src="https://images.pexels.com/photos/5622004/pexels-photo-5622004.jpeg"
              className="w-full h-[200px] object-cover rounded-2xl shadow-lg hover:scale-105 transition"
            />

            <img
              src="https://images.unsplash.com/photo-1581585004042-bca38021ce1e"
              className="w-full h-[200px] object-cover rounded-2xl shadow-lg hover:scale-105 transition"
            />
          </div>

        </div>

      </div>
    </section>
  );
}