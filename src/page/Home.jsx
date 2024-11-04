// // src/App.js
// import React from "react";
// import "./index.css"; // Make sure Tailwind CSS is imported here.

// function App() {
//   return (
//     <div className="font-sans text-gray-900">
//       {/* Navbar */}
//       <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-10">
//         <ul className="flex justify-center space-x-8 p-4">
//           <li><a href="#home" className="text-blue-500 hover:text-blue-700">Home</a></li>
//           <li><a href="#about" className="text-blue-500 hover:text-blue-700">About</a></li>
//           <li><a href="#classes" className="text-blue-500 hover:text-blue-700">Classes</a></li>
//           <li><a href="#gallery" className="text-blue-500 hover:text-blue-700">Gallery</a></li>
//           <li><a href="#contact" className="text-blue-500 hover:text-blue-700">Contact</a></li>
//         </ul>
//       </nav>

//       {/* Home Section */}
//       <div id="home" className="pt-20">
//         <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}>
//           <div className="text-center text-white">
//             <h1 className="text-5xl font-bold mb-4">Welcome to Flexify Yoga</h1>
//             <p className="text-xl mb-6">Find your inner peace and strength with Flexify</p>
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               Book a Class
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* About Section */}
//       <div id="about" className="py-16 px-8 bg-gray-100 text-center">
//         <h2 className="text-4xl font-bold mb-4">About Me</h2>
//         <p className="text-lg max-w-2xl mx-auto">
//           I am a certified yoga instructor with Flexify, committed to guiding individuals through their wellness journey with personalized, mindful yoga practices.
//         </p>
//       </div>

//       {/* Classes Section */}
//       <div id="classes" className="py-16 px-8">
//         <h2 className="text-4xl font-bold text-center mb-8">Classes Offered</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h3 className="text-2xl font-bold mb-2">Hatha Yoga</h3>
//             <p>A gentle introduction to yoga.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h3 className="text-2xl font-bold mb-2">Vinyasa Flow</h3>
//             <p>A dynamic flow connecting breath with movement.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h3 className="text-2xl font-bold mb-2">Power Yoga</h3>
//             <p>An intense workout to build strength and stamina.</p>
//           </div>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <div id="gallery" className="py-16 px-8 bg-gray-100">
//         <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           <img src="/path/to/image1.jpg" alt="Yoga pose" className="rounded-lg shadow-md" />
//           <img src="/path/to/image2.jpg" alt="Yoga pose" className="rounded-lg shadow-md" />
//           <img src="/path/to/image3.jpg" alt="Yoga pose" className="rounded-lg shadow-md" />
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div id="contact" className="py-16 px-8 text-center bg-white">
//         <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
//         <form className="max-w-lg mx-auto">
//           <input type="text" placeholder="Name" className="block w-full p-3 mb-4 border border-gray-300 rounded" />
//           <input type="email" placeholder="Email" className="block w-full p-3 mb-4 border border-gray-300 rounded" />
//           <textarea placeholder="Message" className="block w-full p-3 mb-4 border border-gray-300 rounded"></textarea>
//           <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;
