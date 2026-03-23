import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    text: "Best dental clinic in Ajmer! Very professional and painless treatment.",
    rating: 5,
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Ritika Verma",
    text: "Dr. Rahul Jain is very polite and skilled. Highly recommended!",
    rating: 5,
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Mohit Singh",
    text: "Great experience. Clinic is clean and staff is friendly.",
    rating: 5,
    date: "3 weeks ago",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
            Patient Reviews
          </span>
          <h2 className="text-4xl font-bold mt-4 text-gray-900">
            What Our Patients Say
          </h2>

          {/* Rating */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-xl">5.0</span>
            <span className="text-gray-500">(376 reviews)</span>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 text-teal-200" size={40} />

              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6">
                "{t.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3 border-t pt-4">
                <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-teal-600 text-white text-center p-10 rounded-3xl">
          <h3 className="text-3xl font-bold mb-4">
            Join Our Happy Patients Today!
          </h3>
          <p className="mb-6 text-teal-100">
            Experience the same quality care trusted by hundreds of patients
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Book Appointment
            </button>
            <button className="bg-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-800 transition">
              Read More Reviews
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}