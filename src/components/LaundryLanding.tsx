
import React from "react";
import {
  WashingMachine,
  DryCleaning,
  Truck,
} from "lucide-react";

// Images from Unsplash: Using chosen images that fit laundry themes.
const services = [
  {
    title: "Wash & Fold",
    description:
      "Quick and thorough washing and folding for your everyday clothes.",
    Icon: WashingMachine,
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Dry Cleaning",
    description:
      "Professional dry cleaning for delicate and specialty fabrics.",
    Icon: DryCleaning,
    imageUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pickup & Delivery",
    description:
      "Convenient pickup and delivery services to save you time.",
    Icon: Truck,
    imageUrl:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials = [
  {
    name: "Emily R.",
    feedback:
      "Excellent service! My clothes have never looked better. Highly recommend!",
  },
  {
    name: "Michael B.",
    feedback:
      "Reliable and fast. Pickup and delivery made laundry so much easier.",
  },
  {
    name: "Sophia K.",
    feedback:
      "Friendly staff and great quality. My go-to laundry service now.",
  },
];

const LaundryLanding = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 px-6 py-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          <span className="text-blue-600">Spotless Spark</span>
          <br />
          Laundry Services that Shine
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Fast, reliable, and convenient laundry and dry cleaning solutions
          near you.
        </p>
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=900&q=80"
          alt="Woman sitting on bed with laundry"
          className="mx-auto rounded-lg shadow-lg mb-8 max-h-96 object-cover"
          loading="lazy"
        />
        <a
          href="#book"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Book a Pickup
        </a>
      </section>

      {/* Services Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {services.map(({ title, description, Icon, imageUrl }, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow flex flex-col"
            >
              <img
                src={imageUrl}
                alt={title}
                className="rounded-md mb-4 h-40 object-cover"
                loading="lazy"
              />
              <Icon
                className="mx-auto mb-3 text-blue-600"
                size={48}
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                {title}
              </h3>
              <p className="text-gray-600 flex-grow">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="mb-20 bg-blue-50 rounded-lg p-10 max-w-4xl mx-auto shadow-inner">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">About Us</h2>
        <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          At Spotless Spark, we're passionate about delivering impeccable laundry
          services that fit your busy lifestyle. With eco-friendly products and
          expert care, we ensure your clothes come back fresh, clean, and folded
          to perfection.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {testimonials.map(({ name, feedback }, index) => (
            <blockquote
              key={index}
              className="bg-white p-6 rounded-md shadow-md border-l-4 border-blue-600 italic text-gray-800"
            >
              <p>"{feedback}"</p>
              <footer className="mt-4 text-right font-semibold text-blue-700">
                – {name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="bg-blue-600 rounded-lg p-10 max-w-3xl mx-auto text-white text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <p className="mb-6 text-lg">
          Schedule your laundry pickup and experience the Spotless Spark difference.
        </p>
        <a
          href="mailto:contact@spotlessspark.com"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default LaundryLanding;
