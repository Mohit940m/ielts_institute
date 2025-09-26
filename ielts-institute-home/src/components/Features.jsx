import { FaPen, FaGraduationCap, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaPen size={30} />,
    title: "Test your knowledge",
    desc: "Get to know your suitable course through this quick test."
  },
  {
    icon: <FaGraduationCap size={30} />,
    title: "Verify your Admission",
    desc: "Enter your information and check your admission authenticity."
  },
  {
    icon: <FaCertificate size={30} />,
    title: "Verify your Certificate",
    desc: "Just enter your certificate number to know if it’s authentic."
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">CHECK YOUR SKILLS</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        Understand where you stand and which course is suitable for you.
      </p>

      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-indigo-900 text-white p-8 rounded-lg shadow-lg flex flex-col items-center"
          >
            <div className="bg-white text-indigo-900 p-4 rounded-full mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-200 mb-4">{feature.desc}</p>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">
              Learn more
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
