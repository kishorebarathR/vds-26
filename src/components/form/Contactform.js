import React, { useState } from "react";
import axios from "axios";

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ================= INPUT CHANGE =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        name === "phone"
          ? value.replace(/\D/g, "").slice(0, 10)
          : value,
    });
  };

  // ================= VALIDATION =================
  const validate = () => {
    const newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Phone Validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);
    setErrors({});
    setMessage("");

    try {
      const submitData = new FormData();

      // MUST MATCH CONTACT FORM 7 FIELD NAMES
      submitData.append("your-name", formData.name);
      submitData.append("your-phone", formData.phone);
      submitData.append("your-email", formData.email);

      // REQUIRED FOR CF7
      submitData.append("_wpcf7_unit_tag", "react-form");

      const response = await axios.post(
        "https://docs.vdsatheesan.com/wp-json/contact-form-7/v1/contact-forms/6/feedback",
        submitData
      );

      if (response.data.status === "mail_sent") {
        setMessage("Form submitted successfully!");

        // RESET FORM
        setFormData({
          name: "",
          phone: "",
          email: "",
        });

        // CLEAR SUCCESS MESSAGE AFTER 4 SECONDS
        // setTimeout(() => {
        //   setMessage("");
        // }, 4000);
      } else {
        setErrors({
          submit:
            response.data.message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setErrors({
        submit:
          error.response?.data?.message ||
          "Failed to submit form",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-[#072D46] p-8 rounded-2xl shadow-xl"
      >
        {/* Heading */}
        <h2 className="text-white text-center text-3xl font-semibold mb-8">
          Be My Friend
        </h2>

        {/* Error Message */}
        {errors.submit && (
          <div className="mb-5 animate-pulse">
            <p className="text-red-300 text-center bg-red-500/10 border border-red-500/20 py-3 rounded-xl">
              {errors.submit}
            </p>
          </div>
        )}

        {/* Success Message */}
        {message && (
          <div className="mb-5 animate-bounce">
            <p className="text-green-300 text-center bg-green-500/10 border border-green-500/20 py-3 rounded-xl">
              {message}
            </p>
          </div>
        )}

        {/* Name */}
        <div className="mb-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#033B5F] text-white rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#4DA8DA] transition-all duration-300"
          />

          {errors.name && (
            <p className="text-red-400 mt-2 text-sm animate-pulse">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-5">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-[#033B5F] text-white rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#4DA8DA] transition-all duration-300"
          />

          {errors.phone && (
            <p className="text-red-400 mt-2 text-sm animate-pulse">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-6">
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#033B5F] text-white rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#4DA8DA] transition-all duration-300"
          />

          {errors.email && (
            <p className="text-red-400 mt-2 text-sm animate-pulse">
              {errors.email}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-44 py-3 rounded-xl border border-white text-white font-medium transition-all duration-300 flex items-center justify-center gap-3
              
              ${
                isLoading
                  ? "bg-white/10 cursor-not-allowed"
                  : "hover:bg-white hover:text-[#072D46] hover:scale-105"
              }`}
          >
            {isLoading ? (
              <>
                {/* Spinner */}
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactform;
