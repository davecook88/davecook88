import { CONTACT_FORM_URL, EMAIL_ADDRESS } from "#/constants";
import React, { useRef, useState } from "react";
import { Collapsible } from "#/components/Collapsible";

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
        <Collapsible title="Contact Information" defaultOpen={true}>
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
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-accent-400">Social Media</h3>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="https://www.linkedin.com/in/david-cook-a1549ba2/"
                      className="hover:text-accent-400 transition-colors duration-200 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="19" height="19" fill="none" viewBox="0 0 382 382" className="mr-1">
                        <path
                          d={`M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z`}
                          fill="currentColor"
                        />
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/davecook88"
                      className="hover:text-accent-400 transition-colors duration-200 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="mr-1">
                        <path
                          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Send a Message" defaultOpen={true}>
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
        </Collapsible>
      </div>
    </section>
  );
};
