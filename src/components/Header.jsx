import { Phone, Clock, MapPin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-teal-600 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between flex-wrap gap-2">
          <div className="flex gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Clock size={14} /> Mon - Sat: 4PM - 9PM
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} /> Ajmer
            </span>
          </div>
          <span className="flex items-center gap-1">
            <Phone size={14} /> 0145 262 1846
          </span>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header
        className={`sticky top-0 z-50 bg-white transition ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
              RJ
            </div>
            <div>
              <h1 className="font-bold text-gray-900">Dr Rahul Jain</h1>
              <p className="text-xs text-teal-600">Dental Clinic</p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollTo("appointment")}
              className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition"
            >
              Book Appointment
            </button>
          </div>

          {/* MOBILE MENU */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="lg:hidden bg-white border-t px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block text-left w-full text-gray-700 hover:text-teal-600"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => scrollTo("appointment")}
              className="w-full bg-teal-600 text-white py-2 rounded-lg"
            >
              Book Appointment
            </button>
          </div>
        )}
      </header>
    </>
  );
}