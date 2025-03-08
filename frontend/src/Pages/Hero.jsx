import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Calendar,
  Calculator,
  FileText,
  DollarSign,
  TrendingUp,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";
import Services from "./Services";
const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  // Australian tax key dates for the current tax year
  const taxDates = [
    { date: "1 July", description: "Start of financial year" },
    { date: "31 October", description: "Tax return deadline" },
    { date: "21 each month", description: "BAS lodgment due" },
    { date: "30 June", description: "End of financial year" },
  ];

  // Main tax services
  const taxServices = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Tax Returns",
      description: "Simple & complex returns for individuals",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Tax Refunds",
      description: "Maximize your eligible deductions",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Business Tax",
      description: "ABN, GST & company returns",
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "ATO Compliance",
      description: "Stay compliant with tax laws",
    },
  ];

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?q=80&w=1920&auto=format&fit=crop",
      title: "Expert Smart Tax Solutions",
      subtitle: "Maximize your refund with our ATO-compliant tax services",
      ctaText: "Start Your Return",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1920&auto=format&fit=crop",
      title: "Personal & Business Tax",
      subtitle: "From individual returns to complex business structures",
      ctaText: "Explore Services",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=1920&auto=format&fit=crop",
      title: "Stay On Top of Tax Changes",
      subtitle: "Navigate the latest ATO regulations with confidence",
      ctaText: "Learn More",
    },
  ];

  return (
    <div className="dark:bg-gray-900 dark:text-white duration-300 relative">
      {/* Hero Slider Section */}
      <div className="relative w-full h-[600px] md:h-[650px] lg:h-[700px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          loop={true}
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative">
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/40 z-10"></div>

              {/* Background image */}
              <img
                src={slide.image || "/placeholder.svg"}
                alt={`Australian Tax Services - ${slide.title}`}
                className="w-full h-full object-cover"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <div
                  className="max-w-4xl mx-auto"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium text-lg transition-all 
                    shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 mx-auto"
                  >
                    {slide.ctaText}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Australian map logo watermark */}
        <div className="absolute bottom-6 right-6 z-30 opacity-30">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M85.4,29.7c0.4-0.6,0.3-1.5-0.3-1.9c-0.6-0.4-1.5-0.3-1.9,0.3l-3.2,4.7c-0.3,0.5-0.3,1.1,0,1.6l2.2,3.2
                  c0.4,0.6,1.3,0.7,1.9,0.3c0.6-0.4,0.7-1.3,0.3-1.9l-1.6-2.3L85.4,29.7z"
              fill="currentColor"
            />
            <path
              d="M79.1,40.5c0.4-0.6,0.3-1.5-0.3-1.9c-0.6-0.4-1.5-0.3-1.9,0.3l-4.8,7c-0.3,0.5-0.3,1.1,0,1.6l3.2,4.7
                  c0.4,0.6,1.3,0.7,1.9,0.3c0.6-0.4,0.7-1.3,0.3-1.9l-2.6-3.8L79.1,40.5z"
              fill="currentColor"
            />
            <path
              d="M73.4,55.6c0.4-0.6,0.3-1.5-0.3-1.9c-0.6-0.4-1.5-0.3-1.9,0.3l-2.2,3.2c-0.3,0.5-0.3,1.1,0,1.6l1.6,2.4
                  c0.4,0.6,1.3,0.7,1.9,0.3c0.6-0.4,0.7-1.3,0.3-1.9l-1-1.5L73.4,55.6z"
              fill="currentColor"
            />
            <path
              d="M66.1,62.5c-0.6-0.4-1.5-0.3-1.9,0.3l-7,10.2c-0.3,0.5-0.3,1.1,0,1.6l2.9,4.3c0.4,0.6,1.3,0.7,1.9,0.3
                  c0.6-0.4,0.7-1.3,0.3-1.9l-2.3-3.4l6.4-9.3C66.8,63.8,66.7,62.9,66.1,62.5z"
              fill="currentColor"
            />
            <path
              d="M59.6,56.4c-0.4,0.6-0.3,1.5,0.3,1.9c0.6,0.4,1.5,0.3,1.9-0.3l2.2-3.2c0.3-0.5,0.3-1.1,0-1.6l-1.6-2.3
                  c-0.4-0.6-1.3-0.7-1.9-0.3c-0.6,0.4-0.7,1.3-0.3,1.9l0.9,1.4L59.6,56.4z"
              fill="currentColor"
            />
            <path
              d="M53.4,31.6c-0.6-0.4-1.5-0.3-1.9,0.3l-5.1,7.5c-0.3,0.5-0.3,1.1,0,1.6l3.5,5.1c0.4,0.6,1.3,0.7,1.9,0.3
                  c0.6-0.4,0.7-1.3,0.3-1.9l-2.9-4.2l4.6-6.6C54.1,32.9,54,32,53.4,31.6z"
              fill="currentColor"
            />
            <path
              d="M44.3,27c0.4-0.6,0.3-1.5-0.3-1.9c-0.6-0.4-1.5-0.3-1.9,0.3l-2.9,4.2c-0.3,0.5-0.3,1.1,0,1.6l2.2,3.2
                  c0.4,0.6,1.3,0.7,1.9,0.3c0.6-0.4,0.7-1.3,0.3-1.9l-1.6-2.3L44.3,27z"
              fill="currentColor"
            />
            <path
              d="M31.4,43.4c-0.4,0.6-0.3,1.5,0.3,1.9c0.6,0.4,1.5,0.3,1.9-0.3l4.8-7c0.3-0.5,0.3-1.1,0-1.6l-3.2-4.7
                  c-0.4-0.6-1.3-0.7-1.9-0.3c-0.6,0.4-0.7,1.3-0.3,1.9l2.6,3.8L31.4,43.4z"
              fill="currentColor"
            />
            <path
              d="M24.4,39.9c-0.6-0.4-1.5-0.3-1.9,0.3l-8.3,12.1c-0.3,0.5-0.3,1.1,0,1.6l4.5,6.6c0.4,0.6,1.3,0.7,1.9,0.3
                  c0.6-0.4,0.7-1.3,0.3-1.9l-3.8-5.6l7.7-11.2C25.1,41.2,25,40.3,24.4,39.9z"
              fill="currentColor"
            />
            <path
              d="M27.3,68.7c-0.6-0.4-1.5-0.3-1.9,0.3l-3.5,5.1c-0.3,0.5-0.3,1.1,0,1.6l4.2,6.1c0.4,0.6,1.3,0.7,1.9,0.3
                  c0.6-0.4,0.7-1.3,0.3-1.9l-3.6-5.2l2.9-4.2C28,69.9,27.9,69.1,27.3,68.7z"
              fill="currentColor"
            />
            <path
              d="M40.2,73.2c-0.6-0.4-1.5-0.3-1.9,0.3l-4.5,6.5c-0.3,0.5-0.3,1.1,0,1.6l2.2,3.2c0.4,0.6,1.3,0.7,1.9,0.3
                  c0.6-0.4,0.7-1.3,0.3-1.9l-1.6-2.3l3.9-5.7C40.9,74.5,40.8,73.6,40.2,73.2z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Key information section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-10 relative z-30 -mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
          {/* Quick Tax Calculator Promo */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-10 border-b border-gray-200 dark:border-gray-700">
            <div className="md:w-2/3" data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Calculate Your Estimated Tax Return
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Use our simple tax calculator to estimate your ATO tax refund in
                just a few minutes. Fast, accurate, and secure.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all 
                  shadow-lg hover:shadow-blue-500/20 flex items-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Start Calculation
                </button>
                <button
                  className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white 
                  border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Key Tax Dates
                </button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center" data-aos="fade-left">
              <div className="relative h-48 w-48">
                <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full animate-pulse"></div>
                <div
                  className="absolute inset-4 bg-blue-600/20 dark:bg-blue-600/30 rounded-full animate-pulse"
                  style={{ animationDelay: "300ms" }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <DollarSign className="h-20 w-20 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-10" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Our Tax Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {taxServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 hover:shadow-md transition-all"
                  data-aos="fade-up"
                  data-aos-delay={150 + index * 100}
                >
                  <div className="bg-blue-100 dark:bg-blue-900/40 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Tax Dates */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Smart Tax Dates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {taxDates.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center gap-3"
                  data-aos="fade-up"
                  data-aos-delay={150 + index * 100}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {item.date}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Hero;
