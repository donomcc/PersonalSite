import React from "react";

function ContactForm() {
  return (
    <div>
      <form className="flex flex-col gap-4 text-black ">
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Name"
          className="brdr p-3"
        />
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
          className="brdr p-3"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
          className="brdr p-3 resize-none"
        ></textarea>
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default ContactForm;
