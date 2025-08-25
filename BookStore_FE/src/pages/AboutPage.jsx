import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowRight,
  FaUsers,
  FaLightbulb,
  FaClock,
  FaBook,
  FaHeart,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

// Placeholder images - replace with actual images
const OverviewImg = "src/assets/images/bookscover.jpg";
const TeamP1 = "src/assets/images/paras.jpg"
const TeamP2 = "src/assets/images/Sakshi.jpg";
const TeamP3 = "src/assets/images/komalJ.jpg";
const Mentor1 = "src/assets/images/kiranMaam.png";
const Mentor2 = "src/assets/images/AniketSir.png";
const Mentor3 = "src/assets/images/ShwetaMam.jpeg";

const AboutUs = () => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("auto");

  // Update image height to match content height
  useEffect(() => {
    if (contentRef.current) {
      const updateHeight = () => {
        const height = contentRef.current.offsetHeight;
        setContentHeight(`${height}px`);
      };

      // Initial measurement
      updateHeight();

      // Add resize listener
      window.addEventListener('resize', updateHeight);

      // Cleanup
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 w-full overflow-x-hidden">
      {/* Header - Same as Home Page */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              BookStore
            </span>
          </div>

          <nav className="flex items-center space-x-4">
            <Link
              to="/"
              className="px-6 py-2.5 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/about"
              className="px-6 py-2.5 text-blue-600 transition-all duration-300 font-medium relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
            </Link>
            <Link
              to="/login"
              className="px-6 py-2.5 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Login
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">Register</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 opacity-90 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-16 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 tracking-tight">
              About BookStore
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white italic font-medium leading-relaxed mb-4 md:mb-6">
              Where Stories Come Alive, Dreams Take Flight
            </p>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-yellow-300 to-orange-300 mx-auto"></div>
          </div>
        </div>

        {/* Wave shape divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            fill="#ffffff"
          >
            <path d="M0,96L80,85.3C160,75,320,53,480,58.7C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-6 sm:py-8 w-full">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12 items-center w-full">
          <div className="w-full md:w-3/5 px-0 sm:px-2" ref={contentRef}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-800 mb-3 md:mb-4">
              Our Story
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-3 md:mb-4 text-gray-700">
              Welcome to{" "}
              <span className="font-semibold text-blue-600">BookStore</span>,
              your gateway to literary adventures and endless knowledge. Since 2020, we've been connecting readers with extraordinary stories that inspire, educate, and transform lives.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              From classic literature to contemporary bestsellers, from academic resources to children's tales, BookStore curates collections that celebrate the magic of reading. We believe every book has the power to open new worlds and spark imagination.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-6 mt-4 md:mt-6">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 rounded-full p-2">
                  <FaUsers className="text-blue-600 text-lg" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">50,000+</p>
                  <p className="text-xs text-gray-600">Happy Readers</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-purple-100 rounded-full p-2">
                  <FaBook className="text-purple-600 text-lg" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">25,000+</p>
                  <p className="text-xs text-gray-600">Books Available</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="bg-indigo-100 rounded-full p-2">
                  <FaClock className="text-indigo-600 text-lg" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">24/7</p>
                  <p className="text-xs text-gray-600">Online Access</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/5 mt-6 md:mt-0 px-2">
            <div className="relative max-w-sm mx-auto md:max-w-none">
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 border-t-4 border-l-4 border-blue-500"></div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 border-b-4 border-r-4 border-purple-500"></div>
              <img
                src={OverviewImg}
                className="rounded-lg shadow-xl w-full object-cover z-10 relative"
                alt="BookStore Overview"
                style={{
                  maxWidth: '100%',
                  height: contentHeight
                }}
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-8 sm:mb-12 py-2 sm:py-4 w-full">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-800 mb-2 sm:mb-3">
              Why Choose BookStore?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-bold px-4">
              A curated experience designed to nurture your love for reading and learning.
            </p>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 sm:mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-2 md:px-4">
            {[
              {
                title: "Curated Collections",
                desc: "Handpicked books across genres, ensuring quality and diversity in every recommendation for readers of all tastes.",
                color: "blue",
                icon: "📚",
              },
              {
                title: "Expert Recommendations",
                desc: "Our literary experts provide personalized suggestions to help you discover your next favorite read.",
                color: "purple",
                icon: "🎯",
              },
              {
                title: "Community Reviews",
                desc: "Real reviews from fellow book lovers to help you make informed choices and connect with like-minded readers.",
                color: "indigo",
                icon: "⭐",
              },
              {
                title: "Fast Delivery",
                desc: "Quick and secure delivery to get your books to you as soon as possible, because we know you can't wait to start reading.",
                color: "blue",
                icon: "🚚",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white p-3 sm:p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-blue-500 group"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-8 sm:mb-12 w-full">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-800 mb-2 sm:mb-3">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4 font-bold">
              The passionate book lovers behind BookStore's success and innovation.
            </p>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 sm:mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-2 md:px-4">
            {[
              {
                name: "Paras Kuranjekar",
                role: "Software Developer",
                stack: "Springboot, SpringSecurity, MySQL, Rest API",
                img: TeamP1,
                linkedin: "https://www.linkedin.com/in/paras-kuranjekar/",
                twitter: "https://twitter.com/",
                email: "paraskuranjekar@gmail.com",
                color: "blue",
              },
              {
                name: "Sakshi Jadhav",
                role: "Backend Developer",
                stack: "React, Tailwind CSS, JS, REST API",
                img: TeamP2,
                linkedin: "https://www.linkedin.com/in/sakshi-jadhav-790892322/",
                twitter: "https://twitter.com/michaelchen",
                email: "sakshijadhav@gmail.com",
                color: "purple",
              },
              {
                name: "Komal Jagtap",
                role: "Associate Developer",
                stack: "HTML, CSS, JS, SQL, MySQL, Rest API",
                img: TeamP3,
                linkedin: "https://www.linkedin.com/in/komal-jagtap-171285221/",
                twitter: "https://twitter.com/emilyrodriguez",
                email: "komaljagtap@gmail.com",
                color: "indigo",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl"
              >
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-3 sm:p-4">
                  <div className="mb-3 sm:mb-4 mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-blue-100 shadow-md">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-black font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-xs mb-3 pb-3 border-b border-gray-100">
                      <span className="font-medium">Expertise:</span>{" "}
                      {member.stack}
                    </p>

                    <div className="flex justify-center gap-4 sm:gap-5 text-gray-400">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors text-lg sm:text-xl"
                        title="LinkedIn"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors text-lg sm:text-xl"
                        title="Twitter"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href={member.email}
                        className="hover:text-blue-600 transition-colors text-lg sm:text-xl"
                        title="Email"
                      >
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentor Section */}
        <div className="mb-8 sm:mb-12 w-full">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-800 mb-2 sm:mb-3">
              Special Thanks to Our Mentors 
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 sm:mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-2 md:px-4">
            {[
              {
                name: "Dr.Kiran Waghmare",
                description: "Course Co-ordinator",
                img: Mentor1,
              },
              {
                name: "Aniket Takmare",
                description: "Module Co-ordinator",
                img: Mentor2,
              },
              {
                name: "Shweta Bhere",
                description: "Spot Evaluator",
                img: Mentor3,
              },
            ].map((mentor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl"
              >
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="p-3 sm:p-4">
                  <div className="mb-3 sm:mb-4 mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-blue-100 shadow-md">
                    <img
                      src={mentor.img}
                      alt={mentor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-blue-600 transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-gray-600 text-xs mb-3 pb-3 border-b border-gray-100">
                      <span className="font-medium"></span>{" "}
                      {mentor.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8 px-4">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-4 sm:px-6 py-6 sm:py-8 text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                Ready to start your next reading adventure?
              </h2>
              <p className="text-blue-100 text-sm mb-4 sm:mb-6 max-w-2xl mx-auto">
                Join thousands of book lovers who have discovered their next favorite read with BookStore.
              </p>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-5 sm:px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Reading <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;