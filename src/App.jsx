// src/App.js

//import logo1 from "./img/1.jpg";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import logo2 from "./img/2.jpg";
import logo3 from "./img/3.jpg";
import logo4 from "./img/4.jpg";
import logo5 from "./img/5.jpg";
import logo6 from "./img/6.jpg";
import BigB from "./img/bigb.png";
import logo1 from "./img/bigbphoto.jpg";
//angrez photos
import ang1 from "./img/ang1.jpg";
import ang2 from "./img/ang2.jpg";
import ang3 from "./img/ang3.jpg";
import ang4 from "./img/ang4.jpg";
import ang5 from "./img/ang5.jpg";
import ang6 from "./img/ang6.jpg";
import ang7 from "./img/ang7.jpg";
import ang8 from "./img/ang8.jpg";
import ang9 from "./img/ang9.jpg";
import "./index.css"; // Ensure Tailwind CSS is imported here.

function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-10">
        <ul className="flex justify-center space-x-8 p-4">
          <li><a href="#home" className="text-teal-500 hover:text-teal-700 font-semibold">Home</a></li>
          <li><a href="#about" className="text-teal-500 hover:text-teal-700 font-semibold">About</a></li>
          <li><a href="#classes" className="text-teal-500 hover:text-teal-700 font-semibold">Classes</a></li>
          <li><a href="#gallery" className="text-teal-500 hover:text-teal-700 font-semibold">Gallery</a></li>
          <li><a href="#contact" className="text-teal-500 hover:text-teal-700 font-semibold">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <div id="home" className="pt-20">
  <div
    className="flex flex-col md:flex-row items-center justify-center h-screen bg-cover bg-center bg-gray-800 px-6 md:px-12"
    style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}
  >
    <div className="bg-gray-900 bg-opacity-50 p-6 md:p-10 rounded-lg text-center md:text-left text-white md:w-1/2">
      <h1 className="text-6xl font-bold mb-4 text-teal-400">
        Akash <span className="text-teal-500">BARTHWAL</span>
      </h1>
      <h3 className="text-4xl font-bold mb-4">Welcome to My Yoga Practice</h3>
      <p className="text-2xl mb-6">Embrace peace, balance, and strength with personalized yoga sessions</p>
    </div>
    <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2 flex justify-center">
      <img
        src={BigB}
        alt="Yoga instructor"
        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-teal-600"
      />
    </div>
  </div>
</div>

      {/* About Section */}
      <div id="about" className="py-16 px-8 bg-teal-50 text-center">
        <h2 className="text-4xl font-bold text-teal-600 mb-4">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed mb-8">
          I am an experienced yoga teacher specializing in Body Alignment, Vinyasa Yoga, Ashtanga Vinyasa, and Hatha Yoga. My classes prioritize safety and effectiveness, grounded in a strong foundation of anatomy-based body alignment. I work to create engaging and challenging sessions that honor each student's unique needs and goals, fostering mindfulness, strength, flexibility, and overall well-being.
        </p>

        {/* Experience Section */}
        <div className="mt-8">
          <h3 className="text-3xl font-bold text-teal-600 mb-4">Experience</h3>
          <ul className="text-gray-700 text-lg">
            <li className="mb-4">
              <strong>Yoga Instructor, 2020 - 2021</strong> <br />
              Yoga Teacher, Yog Sankalp, Haridwar, India
            </li>
            <li className="mb-4">
              <strong>Yoga Instructor, 2022 - 2023</strong> <br />
              Yoga Trainer, Rishikesh Adiyogi Yoga School, Rishikesh, India
            </li>
            <li className="mb-4">
              <strong>Yoga Instructor, Currently Working</strong> <br />
              Flexifyme
            </li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="mt-8">
          <h3 className="text-3xl font-bold text-teal-600 mb-4">Education</h3>
          <ul className="text-gray-700 text-lg">
            <li className="mb-4">
              <strong>Bachelor of Arts (BA) in Yogic Science</strong> <br />
              University of Patanjali, Haridwar, India <br />
              <em>2015 - 2018</em>
            </li>
            <li className="mb-4">
              <strong>Master of Arts (MA) in Yogic Science</strong> <br />
              Gurukula Kangri University, Haridwar, India <br />
              <em>2018 - 2020</em>
            </li>
          </ul>
        </div>

        {/* Courses Section */}
        <div className="mt-8">
          <h3 className="text-3xl font-bold text-teal-600 mb-4">Courses</h3>
          <ul className="text-gray-700 text-lg">
            <li className="mb-4">
              <strong>200 Hour Yoga Teacher Training Course (TTC)</strong> <br />
              Rishikesh Adiyogi Yoga School
            </li>
            <li className="mb-4">
              <strong>300 Hour Yoga Teacher Training Course (TTC)</strong> <br />
              Rishikesh Adiyogi Yoga School
            </li>
          </ul>
        </div>
      </div>

      {/* Classes Section */}
      <div id="classes" className="py-16 px-8">
  <h2 className="text-4xl font-bold text-teal-600 text-center mb-8">Classes Offered</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
      <h3 className="text-2xl font-bold text-teal-600 mb-2">Hatha Yoga</h3>
      <p className="text-gray-600">A gentle and grounding practice, perfect for beginners and those seeking balance.</p>
    </div>
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
      <h3 className="text-2xl font-bold text-teal-600 mb-2">Ashtanga Vinyasa Flow</h3>
      <p className="text-gray-600">A dynamic, breath-centered flow that connects body and mind through movement.</p>
    </div>
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
      <h3 className="text-2xl font-bold text-teal-600 mb-2">Iyengar Yoga</h3>
      <p className="text-gray-600">A precise and alignment-focused style of yoga that uses props like belts, blocks, and blankets to help students achieve proper form in each pose.</p>
    </div>
  </div>
</div>
{/* Yoga Journey Gallery Section */}
{/* Yoga Journey Gallery Section */}
<div id="yoga-journey-gallery" className="py-16 px-8 bg-teal-50">
  <h2 className="text-4xl font-bold text-teal-600 text-center mb-8">Yoga Journey Gallery</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <img src={ang2} alt="Client Yoga Journey 1" className="rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl" />
    <img src={ang1} alt="Client Yoga Journey 2" className="rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl" />
    <img src={ang3} alt="Client Yoga Journey 3" className="rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl" />
    <img src={ang4} alt="Client Yoga Journey 4" className="rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl" />
    <img src={ang6} alt="Client Yoga Journey 5" className="rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl" />
    <img src={ang5} alt="Client Yoga Journey 6" className="rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl" />
    <img src={ang7} alt="Client Yoga Journey 7" className="rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl" />
    <img src={ang8} alt="Client Yoga Journey 8" className="rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl" />
    <img src={ang9} alt="Client Yoga Journey 9" className="rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl" />
  </div>
</div>


     {/* Gallery Section */}
<div id="gallery" className="py-16 px-8 bg-teal-50">
  <h2 className="text-4xl font-bold text-teal-600 text-center mb-8">Gallery</h2>
  <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed mb-8">
    Explore moments from our yoga sessions and events that embody our philosophy of wellness and community.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <img src={logo1} alt="Yoga pose" className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" />
    <img src={logo2} alt="Yoga pose" className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" />
    <img src={logo3} alt="Yoga pose" className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" />
  </div>
</div>

{/* Corporate Yoga Training Section */}
<div id="corporate-yoga" className="py-16 px-8 bg-white text-center">
  <h2 className="text-4xl font-bold text-teal-600 mb-4">Corporate Yoga Training</h2>
  <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed mb-8">
    I offer tailored corporate yoga sessions designed to enhance workplace wellness, reduce stress, and promote team cohesion. These sessions are suitable for all levels, helping professionals improve focus, manage stress, and foster overall well-being.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <img src={logo4} alt="Corporate yoga session" className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" />
    <img src={logo5} alt="Corporate yoga session" className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" />
    <img src={logo6} alt="Corporate yoga session" className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" />
  </div>
</div>



      {/* Contact Section */}
      <div id="contact" className="py-16 px-8 bg-teal-50 text-center">
  <h2 className="text-4xl font-bold text-teal-600 mb-4">Contact Me</h2>
  <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed mb-8">
    Feel free to reach out for class bookings, corporate training inquiries, or any questions regarding yoga and wellness.
  </p>
  <div className="flex flex-col items-center mb-8 border-t-4 border-teal-600 pt-4">
    <a href="mailto:akash.barthwal@example.com" className="text-teal-500 font-semibold hover:text-teal-700 text-xl mb-2 transition-colors duration-300 flex items-center">
    <IoMdMail className="w-8 h-8" />
    abarthwal912@gmail.com
    </a>
    <p className="text-2xl font-semibold text-teal-700 mb-2">
      <span role="img" aria-label="phone">📞</span> +91 72485 49647
    </p>
    <a href="https://www.instagram.com/yogi_akash_09" target="_blank" rel="noopener noreferrer" className="text-teal-500 font-semibold hover:text-teal-700 text-xl transition-colors duration-300 flex items-center">
    <FaInstagramSquare className="w-8 h-8"/>  @yogi_akash_09
    </a>
  </div>
</div>







      
    </div>
  );
}

export default App;
