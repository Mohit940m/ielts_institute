import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The IELTS Institute helped me achieve Band 8 in IELTS with their structured approach.",
    name: "Riya Sharma"
  },
  {
    text: "I loved the mock tests and speaking practice sessions. Really boosted my confidence.",
    name: "Arjun Verma"
  },
  {
    text: "The trainers are excellent, and the AI Band Score predictor was very useful.",
    name: "Sneha Patel"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">What Our Students Say</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 border rounded-lg shadow-lg"
          >
            <p className="italic text-gray-700 mb-4">"{t.text}"</p>
            <h4 className="font-bold text-indigo-900">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
