import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import "../assets/styles/Contact.scss";

type Status = "idle" | "sending" | "success" | "error";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [status, setStatus] = useState<Status>("idle");

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    if (name === "" || email === "" || message === "") {
      return;
    }

    const templateParams = { name, email, message };

    setStatus("sending");
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "" }
      )
      .then(
        () => {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send message:", error);
          setStatus("error");
        }
      );
  };

  const fieldProps = {
    variant: "filled" as const,
    fullWidth: true,
    InputProps: { disableUnderline: true },
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="section__inner contact-grid">
        <div className="contact-info">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together"
            subtitle="Got a project waiting to be realized? Send me a message and I'll get back to you as soon as I can."
          />
          <Reveal delay={0.1}>
            <ul className="contact-info__list">
              <li>
                <a className="contact-item" href={`mailto:${profile.email}`}>
                  <span className="contact-item__icon">
                    <FiMail />
                  </span>
                  <span className="contact-item__text">
                    <span className="contact-item__label">Email</span>
                    <span className="contact-item__value">{profile.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a className="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <span className="contact-item__icon">
                    <FiLinkedin />
                  </span>
                  <span className="contact-item__text">
                    <span className="contact-item__label">LinkedIn</span>
                    <span className="contact-item__value">John Lloyd Macalino</span>
                  </span>
                </a>
              </li>
              <li>
                <div className="contact-item">
                  <span className="contact-item__icon">
                    <FiMapPin />
                  </span>
                  <span className="contact-item__text">
                    <span className="contact-item__label">Location</span>
                    <span className="contact-item__value">{profile.location}</span>
                  </span>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form className="contact-form" noValidate autoComplete="off" onSubmit={sendEmail}>
            <div className="contact-form__row">
              <TextField
                {...fieldProps}
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(event) => setName(event.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                {...fieldProps}
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              {...fieldProps}
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={7}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            {status === "success" && (
              <Alert severity="success">Thanks for reaching out! Your message has been sent.</Alert>
            )}
            {status === "error" && (
              <Alert severity="error">Sorry, your message couldn't be sent. Please email me directly instead.</Alert>
            )}
            <div className="contact-form__footer">
              <motion.button
                type="submit"
                className="btn btn--primary"
                disabled={status === "sending"}
                whileTap={{ scale: 0.97 }}
              >
                {status === "sending" ? "Sending..." : "Send Message"} <FiSend />
              </motion.button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
