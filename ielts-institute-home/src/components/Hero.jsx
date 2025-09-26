import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    h1: (
      <>
        Shaping Careers <span className="text-yellow-400">Since 1935</span>
      </>
    ),
    p: "India’s one of the oldest and finest career building institutes.",
    img: "https://images.pexels.com/photos/5940831/pexels-photo-5940831.jpeg",
    alt: "Students learning",
  },
  {
    h1: (
      <>
        Best Classrooms for <span className="text-yellow-400">Optimal Study</span>
      </>
    ),
    p: "Our modern classrooms provide the perfect environment for focused learning.",
    img: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg",
    alt: "Modern classroom",
  },
  {
    h1: (
      <>
        Our Alumni Succeed <span className="text-yellow-400">Worldwide</span>
      </>
    ),
    p: "Our alumni are at top foreign colleges and working in leading positions in India, the US, UK, and beyond.",
    img: "https://images.pexels.com/photos/12644679/pexels-photo-12644679.jpeg",
    alt: "Successful alumni graduating",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 overflow-hidden"
    >
      {/* Left Content */}
      <div className="md:w-1/2 relative h-48 md:h-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -150, opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-full"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {slides[currentSlide].h1}
            </h1>
            <p className="mt-6 text-lg">{slides[currentSlide].p}</p>
            <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
              Get in Touch
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Banner Image */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 150, opacity: 0 }}
            transition={{ duration: 1 }}
            src={slides[currentSlide].img}
            alt={slides[currentSlide].alt}
            className="rounded-lg shadow-lg w-full"
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
