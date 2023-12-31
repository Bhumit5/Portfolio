import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f2yke84",
        "template_lo9uzyp",
        form.current,
        "CREcje4acn7WuMTij"
      )
      .then(
        (result) => {
          e.target.reset();
          alert("Your message has been sent");
        },
        (error) => {
          e.target.reset();
          alert("Your message has not been sent");
        }
      );
  };

  return (
    <form onSubmit={sendEmail} ref={form} class="form">
      <input
        required
        class="input"
        type="text"
        name="user_name"
        id="contactName"
        placeholder="Your name"
        autoComplete="off"
      />

      <input
        required
        class="input"
        type="email"
        name="user_email"
        id="contactEmail"
        placeholder="Your email"
        autoComplete="off"
      />

      <textarea
        required
        class="input"
        name="message"
        id="message"
        placeholder="Give your message..."
        rows="6"
        autoCorrect="true"
        autoComplete="off"
      />
      <input class="send-button" type="submit" value="Send" href="#popup" />
    </form>
  );
};
