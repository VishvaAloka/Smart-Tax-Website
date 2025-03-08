import React from "react";
import {
  FaUserFriends,
  FaBuilding,
  FaFileInvoiceDollar,
  FaDollarSign,
} from "react-icons/fa";

const skillsData = [
  {
    name: "Individuals and Families",
    icon: (
      <FaUserFriends className="text-5xl text-blue-500 group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Tax and super information for individuals and families.",
    aosDelay: "0",
    image: "src/assets/family.jpg",
  },
  {
    name: "Businesses and Organizations",
    icon: (
      <FaBuilding className="text-5xl text-blue-500 group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Tax and super information for business and organisations, including not-for-profits.",
    aosDelay: "500",
    image: "src/assets/businesses.jpg",
  },
  {
    name: "Tax and professionals",
    icon: (
      <FaFileInvoiceDollar className="text-5xl text-blue-500 group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Information for tax and super professionals.",
    aosDelay: "1000",
    image: "src/assets/professionals.jpg",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
              {/* Tax Animated Icon */}
              <FaDollarSign className="inline-block ml-4 text-4xl text-yellow-500 animate-bounce duration-300" />
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-white duration-300 text-white hover:text-black rounded-lg relative overflow-hidden"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-blue-500 group-hover:text-blue-700 duration-300"
                >
                  Learn more
                </a>
                {/* Image that appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
