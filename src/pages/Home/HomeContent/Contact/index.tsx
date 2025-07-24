import { CONTACT_FORM_URL, EMAIL_ADDRESS } from "#/constants";
import React, { useRef, useState } from "react";

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validateForm = (name: string, email: string, message: string) => {
  const errors: { name?: string; email?: string; message?: string } = {};
  if (!name.trim()) errors.name = "Name is required.";
  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!validateEmail(email.trim())) {
    errors.email = "Invalid email address.";
  }
  if (!message.trim()) errors.message = "Message is required.";
  if (Object.keys(errors).length > 0) {
    return errors;
  }
  return null;
};

export const ContactContent = () => {
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    let error = "";
    if (name === "name" && !value.trim()) {
      error = "Name is required.";
    }
    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required.";
      } else if (!validateEmail(value.trim())) {
        error = "Invalid email address.";
      }
    }
    if (name === "message" && !value.trim()) {
      error = "Message is required.";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    )?.value.trim();
    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    )?.value.trim();
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    )?.value.trim();

    const newErrors = validateForm(name, email, message) || {};
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setIsSubmitting(true);
    try {
      const res = await fetch(CONTACT_FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        alert("Message sent successfully!");
        form.reset();
        setErrors({});
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-effect rounded-xl p-6">
          <h2 className="text-2xl font-bold text-accent-500 mb-4">
            Get in Touch
          </h2>
          <p className="text-primary-200 mb-6">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out using the form or through my social media
            profiles.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-accent-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-accent-400">Email</h3>
                <p className="text-primary-200">{EMAIL_ADDRESS}</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-accent-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h3 className="font-semibold text-accent-400">Location</h3>
                <p className="text-primary-200">Tula de Allende, Mexico</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6">
          <h2 className="text-2xl font-bold text-accent-500 mb-4">
            Send a Message
          </h2>
          <form className="" onSubmit={handleSubmit} noValidate ref={formRef}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                className={`w-full p-3 rounded-lg bg-primary-800/50 border ${
                  errors.name ? "border-error-500" : "border-primary-700"
                } focus:outline-none focus:ring-2 focus:ring-accent-500`}
                placeholder="Your Name"
                required
                onBlur={handleBlur}
              />
              {errors.name && (
                <div className="text-error-500 text-sm mt-1">{errors.name}</div>
              )}
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                className={`w-full p-3 rounded-lg bg-primary-800/50 border ${
                  errors.email ? "border-error-500" : "border-primary-700"
                } focus:outline-none focus:ring-2 focus:ring-accent-500`}
                placeholder="Your Email"
                required
                onBlur={handleBlur}
              />
              {errors.email && (
                <div className="text-error-500 text-sm mt-1">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                className={`w-full p-3 rounded-lg bg-primary-800/50 border ${
                  errors.message ? "border-error-500" : "border-primary-700"
                } focus:outline-none focus:ring-2 focus:ring-accent-500`}
                rows={5}
                placeholder="Your Message"
                required
                onBlur={handleBlur}
              />
              {errors.message && (
                <div className="text-error-500 text-sm mt-1">
                  {errors.message}
                </div>
              )}
            </div>

            <div className="w-full flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting || Object.keys(errors).length > 0}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting || Object.keys(errors).length > 0
                    ? "bg-primary-700 text-primary-400 cursor-not-allowed"
                    : "bg-accent-600 text-white hover:bg-accent-500 shimmer-hover"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
