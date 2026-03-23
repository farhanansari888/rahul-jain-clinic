import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
            Contact Us
          </span>
          <h2 className="text-4xl font-bold mt-4 text-gray-900">
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-2">
            We’re here to help you with all your dental needs
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT: INFO */}
          <div className="space-y-6">

            {/* CARD */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex items-start gap-4">
              <Phone className="text-teal-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">0145 262 1846</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex items-start gap-4">
              <Mail className="text-teal-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">clinic@email.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex items-start gap-4">
              <MapPin className="text-teal-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">
                  Dr Rahul Jain Dental Clinic
                  <br />
                  behind police chocki, Kaisar Ganj, Ajmer, Rajasthan 305001
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex items-start gap-4">
              <Clock className="text-teal-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Working Hours</h3>
                <p className="text-gray-600">
                  Mon - Sat: 4PM - 9PM
                </p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>

          </div>

          {/* RIGHT: MAP + CTA */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">

            {/* MAP */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14288.60828634417!2d74.61845551668!3d26.450826626733154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be71f7ee9c7c9%3A0x93caf61abeff7e8c!2sDr%20Rahul%20Jain!5e0!3m2!1sen!2sin!4v1774242653206!5m2!1sen!2sin"
              className="w-full h-[300px] border-0"
              loading="lazy"
            ></iframe>

            {/* CTA */}
            <div className="p-6 text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                Visit Our Clinic
              </h3>
              <p className="text-gray-600">
                Easily locate us on Google Maps and plan your visit
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="https://maps.app.goo.gl/Jj9zXwUWFyqXvA8t9"
                  target="_blank"
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
                >
                  Open in Maps
                </a>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition"
                >
                  WhatsApp
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
