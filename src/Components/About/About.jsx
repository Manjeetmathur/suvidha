import React, { useEffect } from 'react';
import p1 from '../../assets/p1.png'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    })
  }, [])
  const blogs = [
    {
      id: '8',
      title: <p>Why Suvidha? </p>,
      description: <p>
        Tailored for NRIs:
        : Suvidha is designed specifically for the global Indian diaspora, addressing the complexities of cross-border investments, taxes, and financial regulations. We provide solutions that cater to your unique needs.
      </p>,
    },
    {
      id: '9',
      title: <p>What If Suvidha Went Bankrupt? </p>,
      description: <p>
        1. Your Investments and Money Stay Safe:

        At Suvidha, your investments and financial assets are held securely with regulated financial institutions (such as banks, brokers, or custodians) and not directly with us. </p>

    },
  ]
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        {/* Description */}
        <p className="text-lg mb-8 leading-relaxed">
          Welcome to <span className="font-semibold">Our Website</span>, where we are dedicated to providing exceptional services and experiences.
          Our mission is to deliver value, foster innovation, and create a positive impact in everything we do.
        </p>

        {/* Image Section */}
        <div className="mb-8" data-aos='zoom-in'>
          <img
            src={p1}
            alt="About Us"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Values Section */}
        <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
        <ul className="space-y-3 text-left max-w-lg mx-auto">
          <li>
            <span className="font-bold">🌟 Integrity:</span> We act with honesty and transparency in all our interactions.
          </li>
          <li>
            <span className="font-bold">🚀 Innovation:</span> We embrace new ideas and technologies to improve our services.
          </li>
          <li>
            <span className="font-bold">🤝 Customer Commitment:</span> Your satisfaction is our top priority.
          </li>
        </ul>
        <div className="grid gap-8 md:grid-cols-2 mt-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              data-aos='zoom-in'
            >
              <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
              <div className="mt-2 text-gray-600">{blog.description}</div>
              <Link
                to={`/readmore/${blog.id}`}
                className="inline-block mt-4 text-indigo-600 hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="mt-10">
          <a
            href="/contact"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
