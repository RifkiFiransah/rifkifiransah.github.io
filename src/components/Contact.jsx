import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen pt-5 pb-32 bg-section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="pt-20 mb-4 text-3xl font-bold uppercase text-ink">Contact Me</h2>
        <span className="block w-16 h-1 mx-auto mb-4 bg-ink"></span>
        <p className="max-w-2xl mx-auto mt-5 mb-10 leading-relaxed text-ink/70">
          Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-2xl p-8 mx-auto rounded-lg shadow bg-surface">
        <form
          action="https://formspree.io/f/mnqyojwp"
          method="POST"
          className="space-y-6"
        >
          <div className="mb-8">
            <label
              htmlFor="name"
              className="block mb-3 text-sm font-semibold text-ink"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              autoComplete="off"
              name="name"
              required
              className="w-full p-4 font-semibold border-2 rounded-lg bg-section border-ink/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="email"
              className="block mb-3 text-sm font-semibold text-ink"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              autoComplete="off"
              name="email"
              required
              className="w-full p-4 font-semibold border-2 rounded-lg bg-section border-ink/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="message"
              className="block mb-3 text-sm font-semibold text-ink"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter Your Message"
              autoComplete="off"
              name="message"
              rows={10}
              required
              className="w-full p-4 font-semibold border-2 rounded-lg bg-section border-ink/10 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="px-10 py-3 font-semibold tracking-wide text-white uppercase transition rounded-md shadow-md bg-primary hover:bg-primary-dark"
              aria-label="Submit Message"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}