import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        {/* Description */}
        <p className="text-lg mb-8 leading-relaxed">
          We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to get in touch with us.
        </p>


        {/* Contact Information */}
        <div className="mt-12">
          <p className="text-lg font-semibold">Or Reach Us At:</p>
          <p className="text-md mt-2">📞 Phone: +91 123-456-7890</p>
          <p className="text-md mt-1">📧 Email: contact@yourwebsite.com</p>
          <p className="text-md mt-1">📍 Address: 123, Your Street, Your City, Your Country</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
