import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarDays, User } from "lucide-react";

export default function Appointment() {
  const [date, setDate] = useState(new Date());

  return (
    <section id="appointment" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="bg-teal-100 text-teal-700 px-5 py-2 rounded-full text-sm font-semibold">
            Book Appointment
          </span>
          <h2 className="text-4xl font-bold mt-4 text-gray-900">
            Schedule Your Visit
          </h2>
          <p className="text-gray-500 mt-2">
            Choose your preferred date and fill details
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT: CALENDAR */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800">
              <CalendarDays size={18} className="text-teal-600" />
              Select Date & Time
            </h3>

            {/* CALENDAR WRAPPER */}
            <div className="p-3 rounded-xl bg-gray-50">
              <Calendar
                onChange={setDate}
                value={date}
                minDate={new Date()}
                tileDisabled={({ date }) => date.getDay() === 0}
                className="!w-full !border-none"
              />
            </div>

            {/* SELECTED DATE */}
            <p className="text-sm text-gray-600">
              Selected Date:{" "}
              <span className="font-semibold text-teal-600">
                {date.toDateString()}
              </span>
            </p>

            {/* CLINIC HOURS */}
            <div className="bg-teal-50 p-4 rounded-xl text-sm border border-teal-100">
              <p className="font-semibold text-teal-700 mb-1">
                Clinic Hours
              </p>
              <p className="text-gray-600">
                Monday - Saturday: 4:00 PM - 9:00 PM
              </p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition space-y-5">
            <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-800">
              <User size={18} className="text-teal-600" />
              Your Details
            </h3>

            <div className="space-y-4">

              <input
                placeholder="Full Name"
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition"
              />

              <input
                placeholder="Phone Number"
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition"
              />

              <input
                placeholder="Email (optional)"
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition"
              />

              <select className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition">
                <option>Select Service</option>
                <option>Root Canal</option>
                <option>Dental Implants</option>
                <option>Braces</option>
              </select>

              <textarea
                placeholder="Message"
                className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition"
              />

              <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 hover:scale-[1.01] transition">
                Confirm Appointment
              </button>

              <p className="text-xs text-gray-400 text-center">
                By booking, you agree to our terms
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}