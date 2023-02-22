import React from "react";
import { ImLinkedin, ImGithub, ImYoutube } from "react-icons/im";
import ContactForm from "./ContactForm";

function ContactSection({ bgcolor }) {
  return (
    <div>
      <section
        style={{ backgroundColor: bgcolor === "purple" ? "#7019f3" : "" }}
        // className="pt-1"
      >
        <h1 className="text-6xl font-bold py-7">Lets connect!</h1>
        <div className="flex gap-9">
          <div className="text-left">
            <h1 className="text-3xl py-3">Feel free to send me an email.</h1>
            <ContactForm />
          </div>
          <div className="text-right">
            <h1 className="text-3xl py-1">
              Don't forget to check out my socials!
            </h1>
            <div className="flex flex-row-reverse gap-5 text-3xl">
              <a
                href="https://github.com/donomcc"
                target="_blank"
                className="transition ease-in-out hover:scale-125 cursor-pointer hover:text-darkpurple"
              >
                <ImGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/donovanmccollum/"
                target="_blank"
                className="transition ease-in-out hover:scale-125 cursor-pointer hover:text-darkpurple"
              >
                <ImLinkedin />
              </a>
              <a
                href="https://www.youtube.com/channel/UCs3Rba3vlokcxLOyMyoracg"
                target="_blank"
                className="transition ease-in-out hover:scale-125 cursor-pointer hover:text-darkpurple"
              >
                <ImYoutube />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;
