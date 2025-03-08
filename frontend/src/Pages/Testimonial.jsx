import React from "react";
import { FaSpinner } from "react-icons/fa"; // Importing the rotating spinner icon
import { FaFileInvoiceDollar } from "react-icons/fa"; // Importing the tax-related icon

const testimonialData = [
  {
    name: "Buying a house",
    image: "src/assets/profile1.webp",
    description:
      "Hi, my wife and I wish to buy a house together. I am an Australian citizen, and my wife is Indonesian with a 820 temporary visa waiting for a permanent visa to be approved.",
    aosDelay: "0",
  },
  {
    name: "Business Activity Statement 003",
    image: "src/assets/profile2.webp",
    description:
      "Am I prepaying payable tax on rental investment income for this financial year? And am I receiving this because I’m on a payment plan for last year’s tax owing?",
    aosDelay: "300",
  },
  {
    name: "Trustee Voluntary Payment (TVP) to ATO",
    image: "src/assets/profile3.avif",
    description:
      "Hi, I believe Colonial has made a trustee voluntary payment (TVP) to the Australian Taxation Office on my behalf as a result of the Colonial First State Fees Class Action.",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-gray-900 dark:text-white py-14 sm:pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="space-y-4 pb-12 text-center">
            <p
              data-aos="fade-up"
              className="text-3xl font-bold text-blue-500 sm:text-4xl font-serif flex items-center justify-center"
            >
              <FaFileInvoiceDollar className="animate-pulse mr-3" size={24} />{" "}
              {/* Animated tax-related icon */}
              Welcome to the ATO's Online Community
            </p>
            <p
              data-aos="fade-up"
              className="sm:px-60 text-gray-700 dark:text-gray-300"
            >
              Join the conversation and find answers to your tax and super
              questions.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonialData.map((item) => (
              <div
                key={item.name}
                data-aos="fade-up"
                data-aos-delay={item.aosDelay}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-4 border-[#3844ca]"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-full w-24 h-24 border-4 border-blue-500 shadow-md"
                  />
                </div>
                <p className="text-gray-800 dark:text-gray-200 mb-4">
                  {item.description}
                </p>
                <p className="text-lg font-semibold text-blue-500">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
