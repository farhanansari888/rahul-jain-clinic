export const services = [
  {
    id: 1,
    name: "Root Canal",
    description: "Pain free treatment",
    price: "₹2000",
    image: "https://via.placeholder.com/300",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rahul",
    text: "Best clinic ever",
    rating: 5,
    date: "2025",
  },
];

export const galleryImages = [
  {
    id: 1,
    url: "https://via.placeholder.com/400",
    alt: "Clinic",
  },
];

export const aboutDoctor = {
  name: "Dr Rahul Jain",
  description: "Expert dentist",
  qualification: "BDS",
  experience: "15+ years",
  specializations: ["Root Canal", "Implants"],
};

export const clinicInfo = {
  name: "Dental Clinic",
  doctor: "Dr Rahul Jain",
  phone: "9999999999",
  whatsapp: "9999999999",
  address: "Ajmer",
  hours: {
    days: "Mon-Sat",
    open: "4PM",
    close: "9PM",
  },
};

export const mockBookAppointment = async () => {
  return { success: true, message: "Booked", appointmentId: "12345" };
};

export const mockContactSubmit = async () => {
  return { success: true, message: "Sent" };
};