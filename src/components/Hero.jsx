import { Star, ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          
          {/* Rating */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow w-fit">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-gray-800">5.0</span>
            <span className="text-gray-500">(376 reviews)</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Your Smile,
            <br />
            <span className="text-teal-600">Our Priority</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600">
            Experience world-class dental care with Dr. Rahul Jain - 15+ years of expertise in transforming smiles across Ajmer
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p>• Expert Root Canal Treatment</p>
            <p>• Advanced Dental Implants</p>
            <p>• Modern Orthodontic Solutions</p>
            <p>• Pain-Free Procedures</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-teal-700 transition">
              Book Appointment <ArrowRight size={18} />
            </button>

            <button className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-teal-50 transition">
              <Phone size={18} /> Call Now
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 pt-6">
            <div>
              <h2 className="text-3xl font-bold">15+</h2>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">10k+</h2>
              <p className="text-gray-600 text-sm">Happy Patients</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">100%</h2>
              <p className="text-gray-600 text-sm">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/imgs/hero.jpeg"
            alt="Dental Clinic"
            className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-4 shadow-lg flex items-center gap-4">
            <div className="w-14 h-14 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              RJ
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Dr. Rahul Jain</h3>
              <p className="text-sm text-gray-600">BDS, MDS - 15+ Years</p>
              <p className="text-sm text-teal-600 font-medium">
                Senior Dentist in Ajmer
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}