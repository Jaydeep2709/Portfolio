import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { motion } from "framer-motion";
import "./Contact.css";
import { userData } from "../../constants/userData";

// Initialize EmailJS with the Public Key
emailjs.init({
  publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
});

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();

    // Reset error state
    setError(null);

    // Validate form inputs
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    // Validate email format
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setError("Please enter a valid email address.");
      return;
    }

    // EmailJS configuration
    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
    const privateKey = import.meta.env.VITE_APP_EMAILJS_PRIVATE_KEY; // Optional

    if (!serviceId || !templateId || !publicKey) {
      setError("EmailJS configuration is missing. Please check environment variables.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey,
        privateKey, // Include if enabled in EmailJS Security settings
      })
      .then((response) => {
        if (response.status === 200) {
          setEmailSent(true);
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => setEmailSent(false), 5000);
        } else {
          setError("Failed to send email. Please try again.");
        }
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError(err.text || "Failed to send email. Please try again.");
      });
  };

  return (
    <div className="contact" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.1, ease: "easeOut" }}
      >
        <div className="grid-mask" />
        <motion.div
          className="contact-content-left"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        >
          <div className="left-details">
            <h2>
              <WavingHandIcon className="hello-icon" />{" "}
              {userData.contactData.salutation},
            </h2>
            <h2>{userData.contactData.subTitle}</h2>
          </div>
          <div className="left-email">
            <EmailIcon sx={{ fontSize: "2.5em" }} className="email-icon" />
            <div className="email-text">
              <p>{userData.contactData.emailDesc}</p>
              <a href={`mailto:${userData.socials.email}`}>
                {userData.socials.email}
              </a>
            </div>
          </div>
          <div className="left-socials">
            <p>Socials:</p>
            <a
              href={userData.socials.linkedin}
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              {userData.contactData.linkedin}
            </a>
            <a
              href={userData.socials.github}
              aria-label="GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              {userData.contactData.github}
            </a>
          </div>
        </motion.div>
        <motion.div
          className="contact-content-right"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        >
          <div className="title">
            <h2>{userData.contactData.title}</h2>
            <RocketLaunchIcon className="rocket-icon" />
          </div>
          <form onSubmit={submitForm}>
            <div className="name-group input-group">
              <label htmlFor="name">Full Name</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="email-group input-group">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="message-group input-group">
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              disabled={emailSent}
              className="primary-button send-btn"
            >
              {emailSent ? "Sent!" : "Send"}
              {!emailSent && <SendIcon className="send-icon" />}
            </button>
          </form>
          {error && (
            <motion.div
              className="error-notification"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              {error}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      {emailSent && (
        <motion.div
          className="notification"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          Email sent successfully!
        </motion.div>
      )}
      <span className="copyright">
        <i>© 2025 | All rights reserved. Made by Jaydeep Sarjerao Khot</i>
      </span>
    </div>
  );
};

export default Contact;