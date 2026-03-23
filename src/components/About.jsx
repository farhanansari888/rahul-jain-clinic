import { Award, Users, Heart, CheckCircle } from "lucide-react";

export default function About() {
  const achievements = [
    { icon: Award, title: "15+", desc: "Years Experience" },
    { icon: Users, title: "10k+", desc: "Happy Patients" },
    { icon: Heart, title: "5.0", desc: "Google Rating" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="/imgs/about.jpeg"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />

          {/* FLOATING CARD */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="w-14 h-14 bg-teal-600 text-white flex items-center justify-center rounded-full text-xl font-bold">
              RJ
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Dr. Rahul Jain</h3>
              <p className="text-sm text-gray-600">BDS, MDS - 15+ Years</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">

          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
            About Our Clinic
          </span>

          <h2 className="text-4xl font-bold text-gray-900">
            Meet Dr. Rahul Jain
          </h2>

          <p className="text-gray-600 text-lg">
            With over 15 years of experience, Dr. Rahul Jain is a leading dentist in Ajmer,
            specializing in modern dental treatments and patient-focused care.
          </p>

          {/* ACHIEVEMENTS */}
          <div className="grid grid-cols-3 gap-4">
            {achievements.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl shadow-md text-center hover:shadow-lg transition"
                >
                  <Icon className="mx-auto text-teal-600 mb-2" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* SPECIALIZATION */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-4">Areas of Expertise</h3>

            <div className="grid sm:grid-cols-2 gap-3 text-gray-700">
              {[
                "Root Canal Treatment",
                "Dental Implants",
                "Orthodontics",
                "Cosmetic Dentistry",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="text-teal-600" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="bg-teal-600 text-white p-6 rounded-2xl">
            <h3 className="font-bold text-lg mb-3">Why Choose Us?</h3>

            <ul className="space-y-2 text-sm">
              <li>✔ Patient-focused personalized care</li>
              <li>✔ Modern equipment & techniques</li>
              <li>✔ Transparent pricing</li>
              <li>✔ Friendly environment</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}