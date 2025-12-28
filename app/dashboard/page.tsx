import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TopDestinations from "@/components/sections/TopDestinations";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import BookingProcess from "@/components/sections/BookingProcess";
import MomentsGallery from "@/components/sections/MomentsGallery";
import Footer from "@/components/sections/Footer";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar isLoggedIn={true} />
      <HeroSection />
      <TopDestinations />
      <AboutSection />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <BookingProcess />
      <MomentsGallery />
      <Footer />
    </div>
  );
}
