import { FaPhoneAlt, FaEnvelope, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-indigo-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">IELTS Institute</div>

      {/* Menu Links */}
      <div className="hidden md:flex gap-6">
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#courses" className="hover:text-yellow-400">Courses</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </div>

      {/* Contact */}
      <div className="hidden md:flex items-center gap-4 text-sm">
        <FaEnvelope /> info@ielts.com
        <FaPhoneAlt /> +91 89105 76500
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setOpen(!open)} className="md:hidden">
        <FaBars size={22} />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-indigo-900 p-6 flex flex-col gap-4 md:hidden">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
