import React from "react";

function ContactForm() {
  return (
    <div>
      <form
        id="contact-form"
        method="POST"
        action="send"
        encType="multipart/form-data"
        className="flex flex-col gap-4 text-black "
      >
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Name"
          className="brdr p-3 pointer-events-none"
        />
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email"
          className="brdr p-3 pointer-events-none "
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Under Construction!"
          className="brdr p-3 resize-none pointer-events-none"
        ></textarea>
        <button className="cursor-not-allowed bg-white brdr py-2 text-lg">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
