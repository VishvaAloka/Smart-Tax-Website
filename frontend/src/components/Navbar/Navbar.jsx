import React, { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { TbCalculator, TbFileInvoice, TbPigMoney } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

export const Navlinks = [
  { id: 1, name: "HOME", link: "/#" },
  { id: 2, name: "PAYMENT", link: "/#payment" },
  { id: 3, name: "FAQ", link: "/#faq" },
  { id: 4, name: "ABOUT US", link: "/#services" },
  { id: 5, name: "SUPPORT", link: "/#booking" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [activeTaxTip, setActiveTaxTip] = useState(0);

  const taxTips = [
    {
      icon: <TbCalculator className="text-2xl" />,
      title: "Tax Calculator",
      description: "Estimate your tax liability with our free calculator",
    },
    {
      icon: <TbFileInvoice className="text-2xl" />,
      title: "Filing Deadline",
      description: "Don't miss important tax deadlines - April 15th",
    },
    {
      icon: <TbPigMoney className="text-2xl" />,
      title: "Tax Savings",
      description: "Discover deductions to maximize your refund",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Auto-rotate tax tips
    const interval = setInterval(() => {
      setActiveTaxTip((prev) => (prev + 1) % taxTips.length);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [taxTips.length]);

  const toggleMenu = () => setShowMenu(!showMenu);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Tax Tip Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTaxTip}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 text-sm md:text-base"
            >
              {taxTips[activeTaxTip].icon}
              <span className="font-medium">
                {taxTips[activeTaxTip].title}:
              </span>
              <span>{taxTips[activeTaxTip].description}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 py-4 flex justify-between items-center">
        <div className="font-serif text-4xl md:text-5xl mb-4">
          Smart Tax
          <i
            className="fa-sharp fa-thin fa-copyright text-sm ml-2"
            style={{ color: "#ffffff" }}
          ></i>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-lg font-medium">
            {Navlinks.map(({ id, name, link }) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: id * 0.1 }}
              >
                <a href={link} className="relative group overflow-hidden">
                  <span
                    className={`${
                      scrolled
                        ? "text-gray-800 dark:text-gray-200"
                        : "text-gray-800 dark:text-white"
                    } transition-colors duration-300`}
                  >
                    {name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Search Bar & User Actions */}
        <div className="hidden md:flex items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="p-2 pl-10 w-64 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-400 dark:bg-gray-800/70 dark:border-gray-700 transition-all duration-300"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400 dark:text-gray-300" />
          </motion.div>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              <FaUserCircle className="text-xl" />
              <a href="/login">Sign In</a>
            </motion.button>
            {/* Dark Mode Toggle */}
            <motion.div
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full cursor-pointer"
            >
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl text-yellow-500"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl text-blue-600"
                />
              )}
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu & Dark Mode */}
        <div className="md:hidden flex items-center gap-4">
          <motion.div
            whileHover={{ rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full cursor-pointer"
          >
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-xl text-yellow-500"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-xl text-blue-600"
              />
            )}
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full cursor-pointer"
          >
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="text-2xl text-gray-800 dark:text-white"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="text-2xl text-gray-800 dark:text-white"
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <ResponsiveMenu showMenu={showMenu} navLinks={Navlinks} />
    </header>
  );
};

const ResponsiveMenu = ({ showMenu, navLinks }) => {
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="container mx-auto px-6 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ id, name, link }) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: id * 0.1 }}
                >
                  <a
                    href={link}
                    className="block text-lg font-medium text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 pl-10 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400 dark:text-gray-300" />
            </div>
            <Link to="/login">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              >
                <FaUserCircle className="text-xl" />
                Sign In
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
