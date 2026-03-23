import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {

  const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <footer className="bg-[#0b1220] text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
              RJ
            </div>
            <div>
              <h2 className="text-white font-bold">Dr. Rahul Jain</h2>
              <p className="text-sm text-teal-400">Dental Clinic</p>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-4">
            Providing exceptional dental care in Ajmer for over 15 years.
            Your smile is our priority.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-teal-600 transition cursor-pointer"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "About Us", id: "about" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Gallery", id: "gallery" },
  { name: "Contact", id: "contact" },
].map((item) => (
  <li
    key={item.id}
    onClick={() => scrollToSection(item.id)}
    className="hover:text-white cursor-pointer transition"
  >
    {item.name}
  </li>
))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Root Canal Treatment",
              "Dental Implant",
              "Braces Treatment",
              "Dental Bridge",
              "Teeth Whitening",
              "Dental Cleaning",
            ].map((item) => (
              <li key={item} className="text-gray-400">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Info</h3>

          <div className="space-y-4 text-sm">

  {/* ADDRESS */}
  <a
    href="https://maps.app.goo.gl/Jj9zXwUWFyqXvA8t9"
    target="_blank"
    rel="noopener noreferrer"
    className="flex gap-3 items-start hover:text-white transition"
  >
    <MapPin size={18} className="text-teal-400 mt-1 flex-shrink-0" />
    <span>
      Behind police chowki, Kaisar Ganj, Ajmer, Rajasthan
    </span>
  </a>

  {/* PHONE */}
  <a
    href="tel:01452621846"
    className="flex gap-3 items-center hover:text-white transition"
  >
    <Phone size={18} className="text-teal-400 flex-shrink-0" />
    <span>0145 262 1846</span>
  </a>

  {/* EMAIL */}
  <a
    href="mailto:info@drrahuljain.com"
    className="flex gap-3 items-center hover:text-white transition"
  >
    <Mail size={18} className="text-teal-400 flex-shrink-0" />
    <span>info@drrahuljain.com</span>
  </a>

</div>

          {/* WORKING HOURS CARD */}
          <div className="mt-5 bg-[#111827] p-4 rounded-xl">
            <p className="text-white font-semibold mb-1">
              Working Hours
            </p>
            <p className="text-sm text-gray-400">Monday - Saturday</p>
            <p className="text-teal-400 text-sm font-medium">
              4:00 PM - 9:00 PM
            </p>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-10 border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 max-w-7xl mx-auto px-4">
        <p>
          © {new Date().getFullYear()} Dr. Rahul Jain Dental Clinic. All rights reserved.
        </p>
        <p className="mt-2 md:mt-0">
          Designed by{" "}
          <a
            href="https://smartxhacker.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            Farhan Ansari
          </a>
        </p>
      </div>
    </footer>
  );
}