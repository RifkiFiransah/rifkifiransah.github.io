import React from "react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-8 text-ink bg-surface">
      <div className="px-4 mx-auto max-w-7xl">
        {/* top: info + social */}
        <div className="grid items-start grid-cols-1 gap-8 mb-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-extrabold uppercase md:text-2xl text-ink">Rifki Firansah</h3>
            <p className="leading-relaxed text-ink/70 max-w-prose">
              Frontend-focused Web Developer building fast, accessible and maintainable user interfaces. I help turn ideas into polished products through clean code and close collaboration.
            </p>
          </div>

          <div className="text-left md:text-right">
            <h4 className="mb-3 text-lg font-bold tracking-wider uppercase">Social</h4>
            <div className="flex items-center gap-4 md:justify-end">
              <a href="https://www.linkedin.com/in/muhammad-rifki-firansah-670109249" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink/70 hover:text-ink">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98h4.52V24H.22V8.98zM8.98 8.98h4.34v2.06h.06c.6-1.13 2.06-2.32 4.24-2.32 4.54 0 5.38 2.99 5.38 6.88V24h-4.52v-7.68c0-1.83-.03-4.18-2.55-4.18-2.56 0-2.95 2-2.95 4.03V24H8.98V8.98z"/></svg>
              </a>

              <a href="https://github.com/rifkifiransah" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink/70 hover:text-ink">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.9 5.34.9 11.6c0 4.78 3.07 8.83 7.33 10.26.54.1.74-.24.74-.53 0-.26-.01-1-.02-1.96-2.98.65-3.6-1.44-3.6-1.44-.49-1.24-1.2-1.57-1.2-1.57-.98-.67.07-.66.07-.66 1.08.08 1.65 1.12 1.65 1.12.96 1.65 2.52 1.17 3.13.9.1-.7.38-1.17.69-1.44-2.38-.27-4.88-1.19-4.88-5.28 0-1.17.42-2.12 1.11-2.87-.11-.27-.48-1.35.11-2.81 0 0 .9-.29 2.95 1.1a10.2 10.2 0 012.69-.36c.91.01 1.83.12 2.69.36 2.05-1.39 2.95-1.1 2.95-1.1.59 1.46.22 2.54.11 2.81.69.75 1.11 1.7 1.11 2.87 0 4.1-2.5 5-4.88 5.27.39.34.73 1.01.73 2.04 0 1.47-.02 2.66-.02 3.02 0 .29.2.64.75.53 4.25-1.44 7.32-5.49 7.32-10.26C23.1 5.34 18.27.5 12 .5z"/></svg>
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-ink/70 hover:text-ink">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.56 8.56 0 01-2.72 1.04 4.27 4.27 0 00-7.28 3.9A12.12 12.12 0 013 4.79a4.27 4.27 0 001.32 5.69 4.24 4.24 0 01-1.93-.53v.05a4.27 4.27 0 003.42 4.19c-.47.13-.98.2-1.49.08a4.27 4.27 0 003.99 2.96A8.57 8.57 0 012 19.54 12.09 12.09 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0022.46 6z"/></svg>
              </a>

              <a href="https://www.instagram.com/505mrifkif.nt/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ink/70 hover:text-ink">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 6.2s-.2-1.66-.82-2.4c-.78-.9-1.66-.9-2.06-1C16.72 2.5 12 2.5 12 2.5h-.02s-4.7 0-8.6.3c-.4.05-1.28.1-2.06 1C.72 4.54.5 6.2.5 6.2S.28 8.1.28 10v.02c0 1.9.22 3.78.22 3.78s.22 1.66.84 2.4c.78.9 1.79.87 2.24.97 1.62.2 6.9.3 6.9.3s4.7 0 8.6-.3c.4-.05 1.28-.1 2.06-1 .62-.74.82-2.4.82-2.4s.22-1.88.22-3.78V10c0-1.9-.22-3.78-.22-3.78zM9.75 15.02V8.98l6.1 3.02-6.1 3.02z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="pt-6 border-t border-ink/10">
          <p className="text-sm text-center text-ink/60">
            &copy; {new Date().getFullYear()}. Made by{" "}
            <a href="https://github.com/rifkifiransah" className="font-bold underline text-ink" target="_blank" rel="noopener noreferrer">
              Rifki Firansah
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
