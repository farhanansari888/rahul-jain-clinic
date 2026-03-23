import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Root Canal Treatment",
    price: "₹2000",
    image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",
    desc: "Pain-free advanced root canal treatment",
  },
  {
    id: 2,
    name: "Dental Implants",
    price: "₹15000",
    image: "https://images.pexels.com/photos/6627562/pexels-photo-6627562.jpeg",
    desc: "Permanent solution for missing teeth",
  },
  {
    id: 3,
    name: "Braces Treatment",
    price: "₹25000",
    image: "https://images.pexels.com/photos/6627536/pexels-photo-6627536.jpeg",
    desc: "Straighten your teeth with modern braces",
  },
  {
    id: 4,
    name: "Teeth Whitening",
    price: "₹3000",
    image: "https://images.pexels.com/photos/6627601/pexels-photo-6627601.jpeg",
    desc: "Brighten your smile instantly",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
            Our Services
          </span>
          <h2 className="text-4xl font-bold mt-4 text-gray-900">
            Comprehensive Dental Solutions
          </h2>
          <p className="text-gray-600 mt-2">
            We provide complete dental care using modern technology
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              
              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* PRICE */}
                <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
                  {s.price}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-teal-600 transition">
                  {s.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {s.desc}
                </p>

                {/* BUTTON */}
                <button className="mt-4 flex items-center gap-2 text-teal-600 font-medium hover:gap-3 transition">
                  Book Now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* EXTRA SERVICES */}
        <div className="mt-16 bg-gradient-to-br from-teal-50 to-cyan-50 p-10 rounded-3xl">
          <h3 className="text-2xl font-bold text-center mb-6">
            Other Dental Services
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            {[
              "Teeth Cleaning",
              "Tooth Extraction",
              "Dental Bridge",
              "Crowns & Caps",
              "Dentures",
              "Emergency Care",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                • {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}