import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../components/SendEmail.css";

export const SendEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "NightCitySupport",
        "template_g0vmck8",
        form.current,
        "_-up_njjAEFbqCBYn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="name" />
    //   <label>Email</label>
    //   <input type="email" name="email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />

    // </form>
    <form ref={form} onSubmit={sendEmail}>
      <input
        name="name"
        type="text"
        className="feedback-input"
        placeholder="Your Name"
      />

      <input
        name="email"
        type="text"
        className="feedback-input"
        placeholder="Your Email"
      />

      <textarea
        name="message"
        className="feedback-input"
        placeholder="Your message"
      ></textarea>
      <input type="submit" value="Send" />
    </form>
  );
};
