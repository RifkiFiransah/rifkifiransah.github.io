import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] md:min-h-screen flex items-center bg-section"
    >
      {/* Dynamic SVG Pattern Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
          <defs>
            <pattern id="heroPattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="transparent"></rect>
              <path d="M30 0 L60 0 L30 60 L0 60 Z" fill="currentColor" className="text-ink/5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroPattern)" />
        </svg>
      </div>

      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-surface/80"></div>
      {/* Social Media Bar (desktop only) */}
      <div className="absolute z-10 flex-col hidden px-4 py-6 space-y-4 transform -translate-y-1/2 border rounded-lg shadow-lg md:flex left-4 top-1/2 bg-surface/90 backdrop-blur-sm border-ink/10">
        <a
          href="https://linkedin.com/in/muhammad-rifki-firansah-670109249"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="flex items-center justify-center w-10 h-10 transition-colors rounded-md hover:bg-section"
        >
          <svg
            className="w-6 h-6 transition-colors text-primary hover:text-primary-dark"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98h4.52V24H.22V8.98zM8.98 8.98h4.34v2.06h.06c.6-1.13 2.06-2.32 4.24-2.32 4.54 0 5.38 2.99 5.38 6.88V24h-4.52v-7.68c0-1.83-.03-4.18-2.55-4.18-2.56 0-2.95 2-2.95 4.03V24H8.98V8.98z" />
          </svg>
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className="flex items-center justify-center w-10 h-10 transition-colors rounded-md hover:bg-section"
        >
          <svg
            className="w-6 h-6 transition-colors text-primary hover:text-primary-dark"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.56 8.56 0 01-2.72 1.04 4.27 4.27 0 00-7.28 3.9A12.12 12.12 0 013 4.79a4.27 4.27 0 001.32 5.69 4.24 4.24 0 01-1.93-.53v.05a4.27 4.27 0 003.42 4.19c-.47.13-.98.2-1.49.08a4.27 4.27 0 003.99 2.96A8.57 8.57 0 012 19.54 12.09 12.09 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0022.46 6z" />
          </svg>
        </a>

        <a
          href="https://www.instagram.com/505mrifkif.nt/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="flex items-center justify-center w-10 h-10 transition-colors rounded-md hover:bg-section"
        >
          <svg
            className="w-6 h-6 transition-colors text-primary hover:text-primary-dark"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24z" />
          </svg>
        </a>

        <a
          href="https://github.com/rifkifiransah"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="flex items-center justify-center w-10 h-10 transition-colors rounded-md hover:bg-section"
        >
          <svg
            className="w-6 h-6 transition-colors text-primary hover:text-primary-dark"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .5C5.73.5.9 5.34.9 11.6c0 4.78 3.07 8.83 7.33 10.26.54.1.74-.24.74-.53 0-.26-.01-1-.02-1.96-2.98.65-3.6-1.44-3.6-1.44-.49-1.24-1.2-1.57-1.2-1.57-.98-.67.07-.66.07-.66 1.08.08 1.65 1.12 1.65 1.12.96 1.65 2.52 1.17 3.13.9.1-.7.38-1.17.69-1.44-2.38-.27-4.88-1.19-4.88-5.28 0-1.17.42-2.12 1.11-2.87-.11-.27-.48-1.35.11-2.81 0 0 .9-.29 2.95 1.1a10.2 10.2 0 012.69-.36c.91.01 1.83.12 2.69.36 2.05-1.39 2.95-1.1 2.95-1.1.59 1.46.22 2.54.11 2.81.69.75 1.11 1.7 1.11 2.87 0 4.1-2.5 5-4.88 5.27.39.34.73 1.01.73 2.04 0 1.47-.02 2.66-.02 3.02 0 .29.2.64.75.53 4.25-1.44 7.32-5.49 7.32-10.26C23.1 5.34 18.27.5 12 .5z" />
          </svg>
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-5xl px-4 py-24 mx-auto text-center">
        <div className="p-8 border shadow-xl rounded-2xl bg-surface/90 backdrop-blur-sm border-ink/10">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight uppercase md:text-5xl lg:text-6xl text-ink">
            Hello, I'm Rifki Firansah
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-base leading-relaxed text-ink/80 md:text-lg">
            I am a passionate web developer specializing in creating dynamic and
            beautiful web pages. Welcome to my portfolio! 
          </p>
          <a
            href="#projects"
            className="inline-block px-8 py-4 text-sm font-semibold text-white transition-all rounded-lg shadow-lg bg-primary hover:bg-primary-dark hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View My Projects
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute z-10 transform -translate-x-1/2 bottom-6 left-1/2">
        <div className="flex items-start justify-center p-1 border-2 rounded-full w-7 h-11 border-ink/30">
          <div className="w-2 h-2 rounded-full animate-bounce bg-ink/40"></div>
        </div>
      </div>
    </section>
  );
}
