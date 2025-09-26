import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white px-6 md:px-20 py-12">
      <div className="grid md:grid-cols-4 gap-12">
        {/* Institute Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">IELTS Institute</h3>
          <p>
            47, Raja Ram Mohan Roy Sarani , Kolkata – 700110 (WB)
          </p>
          <p className="flex items-center gap-2 mt-4"><FaPhoneAlt /> +91 890105 76500</p>
          <p className="flex items-center gap-2"><FaEnvelope /> info@ielts.com</p>
        </div>

        {/* Courses */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
          <ul className="space-y-2">
            <li>Spoken English</li>
            <li>IELTS Preparation</li>
            <li>TOEFL Preparation</li>
            <li>Foreign Language</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Student Login</li>
            <li>Franchise</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect with us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">
              <FaFacebook size={24} className="hover:text-yellow-400 cursor-pointer" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter size={24} className="hover:text-yellow-400 cursor-pointer" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={24} className="hover:text-yellow-400 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/mohit-saha-chowdhury/" aria-label="LinkedIn">
              <FaLinkedin size={24} className="hover:text-yellow-400 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
        © 2025 IELTS Institute. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
