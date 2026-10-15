"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { PHONE_E164 } from "../../lib/site";
import "./QuoteForm.css";

const EMPTY = { firstName: "", lastName: "", email: "", phone: "", service: "" };

// Enquiry form. Sends the details to WhatsApp, as the site always has.
// Used on the home page (section and popup) and on the contact page.
export default function QuoteForm({ onSent }) {
  const [data, setData] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const change = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const message = `Hello, I'm ${data.firstName} ${data.lastName}. I'm interested in ${data.service}. You can reach me at ${data.email} or ${data.phone}.`;
    const url = `https://wa.me/${PHONE_E164.replace("+", "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setData(EMPTY);
      if (onSent) onSent();
    }, 2500);
  };

  if (sent) {
    return (
      <div className="quote-sent" role="status">
        <div className="quote-sent__icon">✓</div>
        <h3>Thanks, we'll be in touch</h3>
        <p>Our team replies within 24 hours. WhatsApp is opening so you can send your details.</p>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <div className="quote-form__row">
        <label>
          <span className="sr-only">First name</span>
          <input type="text" name="firstName" placeholder="First name" value={data.firstName} onChange={change} required />
        </label>
        <label>
          <span className="sr-only">Last name</span>
          <input type="text" name="lastName" placeholder="Last name" value={data.lastName} onChange={change} required />
        </label>
      </div>
      <label>
        <span className="sr-only">Email address</span>
        <input type="email" name="email" placeholder="Email address" value={data.email} onChange={change} required />
      </label>
      <label>
        <span className="sr-only">Phone number</span>
        <input type="tel" name="phone" placeholder="Phone number" value={data.phone} onChange={change} required />
      </label>
      <label>
        <span className="sr-only">Service you need</span>
        <select name="service" value={data.service} onChange={change} required>
          <option value="">Select a service</option>
          <option>Website Design</option>
          <option>E-Commerce</option>
          <option>Mobile App Development</option>
          <option>SEO &amp; Growth</option>
          <option>Other</option>
        </select>
      </label>
      <button type="submit" className="btn btn-primary btn-block">
        Send message <FaArrowRight />
      </button>
    </form>
  );
}
