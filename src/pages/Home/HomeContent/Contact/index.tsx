import { CONTACT_FORM_URL } from "#/constants";
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

    try {
      const res = await fetch(CONTACT_FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        alert("Message sent!");
        form.reset();
        setErrors({});
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="mb-12 h-full">
      <h2 className="text-3xl font-bold  border-b-2  pb-2 mb-6">Contact</h2>
      <form className="" onSubmit={handleSubmit} noValidate ref={formRef}>
        <input
          type="text"
          name="name"
          className="w-full p-2 border border-accent-800 rounded-md active:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500"
          placeholder="Your Name"
          required
          onBlur={handleBlur}
        />
        {errors.name && (
          <div className="text-error-500 text-sm mt-1">{errors.name}</div>
        )}

        <input
          type="email"
          name="email"
          className="w-full p-2 border border-accent-800 rounded-md active:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 mt-4"
          placeholder="Your Email"
          required
          onBlur={handleBlur}
        />
        {errors.email && (
          <div className="text-error-500 text-sm mt-1">{errors.email}</div>
        )}

        <textarea
          name="message"
          className="w-full p-2 border border-accent-800 rounded-md active:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 mt-4"
          rows={4}
          placeholder="Type your message here..."
          required
          onBlur={handleBlur}
        />
        {errors.message && (
          <div className="text-error-500 text-sm mt-1">{errors.message}</div>
        )}

        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="mt-4 text-accent-500 bg-transparent focus:outline-none focus:ring-2 focus:ring-accent-500 rounded-md px-4 py-2 cursor-pointer hover:!text-black hover:bg-[#06b6d4]"
            disabled={Object.keys(errors).length > 0}
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};
