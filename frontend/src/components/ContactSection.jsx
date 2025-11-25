import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_x7k9m2a",       
        "template_3h4bx2f",      
        e.target,
        "0fzcmgP8dLidKhJlw"        
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          setSuccess("Failed to send message. Try again.");
          console.log(error);
        }
      );
  };

  return (
    <section className="py-12 bg-white px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-10">

        {/* Left Info */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
            We'd Love to Hear From You
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Have questions about our products or need assistance with your order?
            Our team is here to help.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500 text-lg" />
              <span>Shop 23B, NeigbourHood Center, Wuse 2, Abuja</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-500 text-lg" />
              <span>09019510296 ,</span>
              <span>08164821443</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500 text-lg" />
              <span>luxwatchofficial@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-blue-500 text-lg" />
              <span>Monday - Saturday: 8am - 7pm</span>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <form id="form"
          onSubmit={sendEmail}
          className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md"
        >
          {success && (
            <p className="text-green-600 font-medium">{success}</p>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              className="w-full border p-2 rounded h-28 resize-none focus:ring-2 focus:ring-blue-400 outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition font-medium"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;
