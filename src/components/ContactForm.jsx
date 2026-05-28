import React, { useState } from "react";
import {
  MdPerson,
  MdEmail,
  MdSubject,
  MdMessage,
  MdCheckCircle,
  MdInfo
} from "react-icons/md";
import "../styles/ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "general",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Enter a valid email address";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Submitted Data:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      interest: "general",
      subject: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="form-success-container">
        <MdCheckCircle size={48} color="#16a34a" />
        <h3 className="success-title">Message Sent Successfully</h3>
        <p className="success-message">
          Thank you for contacting us. We’ll get back to you shortly.
        </p>
        <div className="success-actions">
          <button className="btn btn-primary" onClick={handleReset}>
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>

        {/* Name */}
        <div className={`form-group ${errors.name ? "error" : ""}`}>
          <label className="form-label">
            <MdPerson className="form-icon name-icon" /> Full Name
            <span className="required-badge">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            placeholder="Vikram Singh"
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className={`form-group ${errors.email ? "error" : ""}`}>
          <label className="form-label">
            <MdEmail className="form-icon email-icon" /> Email Address
            <span className="required-badge">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="vikram@gmail.com"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        {/* Interest */}
        <div className="form-group">
          <label className="form-label">
            <MdInfo className="form-icon info-icon" /> Area of Interest
          </label>
          <select
            name="interest"
            className="form-select"
            value={formData.interest}
            onChange={handleChange}
          >
            <option value="general">General Inquiry</option>
            <option value="course">Course Information</option>
            <option value="corporate">Corporate Training</option>
            <option value="support">Technical Support</option>
          </select>
        </div>

        {/* Subject */}
        <div className={`form-group ${errors.subject ? "error" : ""}`}>
          <label className="form-label">
            <MdSubject className="form-icon subject-icon" /> Subject
            <span className="required-badge">*</span>
          </label>
          <input
            type="text"
            name="subject"
            className="form-input"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Regarding course enrollment"
          />
          {errors.subject && <p className="error-message">{errors.subject}</p>}
        </div>

        {/* Message */}
        <div className={`form-group ${errors.message ? "error" : ""}`}>
          <label className="form-label">
            <MdMessage className="form-icon message-icon" /> Message
            <span className="required-badge">*</span>
          </label>
          <textarea
            name="message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            maxLength={500}
          />
          <span className="char-count">{formData.message.length}/500</span>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>

        {/* Submit */}
        <div className="form-actions">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : (
              <>
                <MdMessage /> Send Message
              </>
            )}
          </button>

          <div className="form-note">
            <MdInfo /> Fields marked with * are required
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
