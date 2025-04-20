
import React from "react";
import {
  WashingMachine,
  Archive,
  Truck,
} from "lucide-react";

// Data layanan laundry dengan ikon dan gambar yang relevan
const services = [
  {
    title: "Cuci & Lipat",
    description:
      "Cuci dan lipat pakaian Anda dengan cepat dan rapi untuk pakaian sehari-hari.",
    Icon: WashingMachine,
    imageUrl:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=800&q=80", // orang cuci baju di sungai
  },
  {
    title: "Dry Cleaning",
    description:
      "Dry cleaning profesional untuk kain yang halus dan khusus.",
    Icon: Archive,
    imageUrl:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Jemput & Antar",
    description:
      "Layanan jemput dan antar praktis agar menghemat waktu Anda.",
    Icon: Truck,
    imageUrl:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
  },
];

// Testimoni pelanggan dalam bahasa Indonesia
const testimonials = [
  {
    name: "Emily R.",
    feedback:
      "Pelayanan sangat bagus! Pakaian saya jadi lebih bersih dan rapi. Sangat saya rekomendasikan!",
  },
  {
    name: "Michael B.",
    feedback:
      "Cepat dan bisa diandalkan. Layanan jemput antar memudahkan urusan laundry saya.",
  },
  {
    name: "Sophia K.",
    feedback:
      "Staf yang ramah dan kualitasnya hebat. Sekarang ini laundry favorit saya.",
  },
];

const LaundryLanding = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900 px-6 py-12 max-w-6xl mx-auto">
      {/* Bagian Hero */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          <span className="text-blue-600">BajuBersih</span>
          <br />
          Layanan Laundry yang Bersih dan Rapi
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Cepat, terpercaya, dan solusi laundry serta dry cleaning yang nyaman di sekitar Anda.
        </p>
        <img
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=900&q=80"
          alt="Orang sedang mencuci baju"
          className="mx-auto rounded-lg shadow-lg mb-8 max-h-96 object-cover"
          loading="lazy"
        />
        <a
          href="#book"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Pesan Jemputan
        </a>
      </section>

      {/* Bagian Layanan */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Layanan Kami</h2>
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

      {/* Tentang Kami */}
      <section className="mb-20 bg-blue-50 rounded-lg p-10 max-w-4xl mx-auto shadow-inner">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Tentang Kami</h2>
        <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Di BajuBersih, kami berdedikasi memberikan layanan laundry terbaik yang sesuai dengan gaya hidup Anda yang sibuk. Menggunakan produk ramah lingkungan dan perawatan ahli, kami pastikan pakaian Anda kembali bersih, segar, dan terlipat dengan sempurna.
          <br /><br />
          Alamat kami: Tegal Munjul, Purwakarta.
        </p>
      </section>

      {/* Testimoni Pelanggan */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Apa Kata Pelanggan Kami
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

      {/* Bagian Pemesanan */}
      <section id="book" className="bg-blue-600 rounded-lg p-10 max-w-3xl mx-auto text-white text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Siap untuk memulai?</h2>
        <p className="mb-6 text-lg">
          Jadwalkan jemputan laundry Anda dan rasakan perbedaan layanan dari BajuBersih.
        </p>
        <a
          href="mailto:contact@spotlessspark.com"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Hubungi Kami
        </a>
      </section>
    </main>
  );
};

export default LaundryLanding;

