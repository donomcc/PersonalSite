import React from "react";
import { ImLinkedin, ImGithub, ImYoutube } from "react-icons/im";
import ContactForm from "./ContactForm";

function ContactSection({ bgcolor }) {
  return (
    <div>
      <section
        style={{ backgroundColor: bgcolor === "purple" ? "#7019f3" : "" }}
        className="text-white"
      >
        <h1 className="text-6xl font-bold py-7">Lets connect!</h1>
        <div className="flex flex-col items-center gap-9">
          <div className="text-left">
            <h1 className="text-3xl py-3">Feel free to send me an email.</h1>
            <ContactForm />
          </div>
          <div className="text-right">
            <h1 className="text-3xl py-1">
              Don't forget to check out my socials!
            </h1>
            <div className="flex justify-center gap-5 text-3xl py-2">
              <a
                href="https://github.com/donomcc"
                target="_blank"
                className="transition ease-in-out hover:scale-125 cursor-pointer hover:text-dark"
              >
                <ImGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/donovanmccollum/"
                target="_blank"
                className="transition ease-in-out hover:scale-125 cursor-pointer hover:text-dark"
              >
                <ImLinkedin />
              </a>
              <a
                href="https://www.youtube.com/channel/UCs3Rba3vlokcxLOyMyoracg"
                target="_blank"
                className="transition ease-in-out hover:scale-125 cursor-pointer hover:text-dark"
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
