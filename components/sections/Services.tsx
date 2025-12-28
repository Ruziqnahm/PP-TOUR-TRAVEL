import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Study Tour",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    gradient: "from-[#00bc7d]/90 to-[#009966]/90",
  },
  {
    title: "Family Gathering",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
    gradient: "from-[#2b7fff]/90 to-[#155dfc]/90",
  },
  {
    title: "Outbound",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop",
    gradient: "from-[#ad46ff]/90 to-[#9810fa]/90",
  },
  {
    title: "Company Gathering",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    gradient: "from-[#fe9a00]/90 to-[#e17100]/90",
  },
  {
    title: "Event Organizer",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    gradient: "from-[#f6339a]/90 to-[#e60076]/90",
  },
  {
    title: "Study Campus",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    gradient: "from-[#615fff]/90 to-[#4f39f6]/90",
  },
  {
    title: "Sewa ELF/Hiace/Bus",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
    gradient: "from-[#00bc7d]/90 to-[#007a55]/90",
  },
  {
    title: "Reservasi Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    gradient: "from-[#1a7ce8]/90 to-[#0d5ab8]/90",
  },
];

export default function Services() {
  return (
    <section className="relative py-20 bg-[#101828] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00bc7d]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2b7fff]/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <svg className="w-4 h-4 text-[#00bc7d]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span className="text-sm text-white font-medium">Layanan Kami</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Layanan yang Kami Sediakan
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Berbagai layanan perjalanan yang dapat disesuaikan dengan kebutuhan Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Link 
              key={index}
              href="/paket-tour"
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,188,125,0.3)] transition-all duration-500"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-end p-6">
                <div className="w-full">
                  <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Arrow Icon - appears on hover */}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-white text-sm font-medium">Lihat Detail</span>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/20 rounded-3xl transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#00bc7d] to-[#009966] rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Butuh Paket Khusus?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Kami siap membantu menyusun paket perjalanan yang sesuai dengan kebutuhan dan budget Anda
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-white text-[#00bc7d] rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              Hubungi Kami
            </Link>
            <Link 
              href="/paket-tour"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-colors duration-300"
            >
              Lihat Semua Paket
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
