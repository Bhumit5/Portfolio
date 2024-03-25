import React from "react";
import { Form } from "./Form";
import { socials } from "../listJs/contact";
import { contacts } from "../listJs/contact";

export default function Contact() {
  return (
    <>
      <div id="contact">
        <div id="contact-section">
          <p className="heading-font section-heading">Contact</p>
        </div>

        <div className="form-container">
          <div className="fixed-grid">
            <div className="center">
              <div className="form-component">
                <div className="message">
                  <p className="touch">Get In Touch</p>
                </div>
                <Form />
              </div>
            </div>
            <div className="contacts center">
              <div className="contact-info">
                <div >
                  {contacts.map((contact, index) => (
                    <div className="flex" key={index}>
                      <img
                        src={contact.src}
                        alt={contact.title}
                        className="logo"
                      />
                      <p>{contact.content}</p>
                    </div>
                  ))}
                </div>

                <div className="socials center">
                  {socials.map((media,index) =>{
                    return (
                      <a key={index} href={media.src} className="center" target="_b">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d={media.path}></path>
                        </svg>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
