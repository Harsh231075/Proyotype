import React, { useState } from "react";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
    updates: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", role: "", message: "", updates: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 text-white  p-6">
      {/* Header Section */}
      <div className="text-center mt-12 mb-12">

        <p className="text-xl mt-4">
          We're here to connect with companies, colleges, and sponsors. Feel
          free to reach out or share updates with us!
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white text-black p-10 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="block text-lg font-semibold mb-2">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="Company">Company</option>
              <option value="College">College</option>
              <option value="Sponsor">Sponsor</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-lg font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your message here"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Updates Section */}
          <div>
            <label htmlFor="updates" className="block text-lg font-semibold mb-2">
              Updates (Optional)
            </label>
            <textarea
              id="updates"
              name="updates"
              value={formData.updates}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Share any updates or announcements"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-12">
        <p className="text-lg">
          Thank you for reaching out! We value your collaboration and ideas.
        </p>
      </div>
    </div>
  );
};
