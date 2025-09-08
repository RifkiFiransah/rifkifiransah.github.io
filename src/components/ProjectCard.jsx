import React, { useState, useRef, useEffect } from "react";

export default function ProjectCard({ experience }) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClickOutside(e) {
      if (open && modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  const {
    title,
    description,
    longDescription,
    tech = [],
    demo,
    github,
    image, // optional: image url
  } = experience;

  return (
    <>
      <article
        className="group bg-surface text-ink rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={() => setOpen(true)}
        aria-label={`Open details for ${title}`}
        role="button"
      >
        <div className="relative h-48 md:h-56 w-full bg-section">
          {image ? (
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark text-white text-2xl font-bold">
              {title.split(" ").slice(0,2).map(w => w[0]).join("")}
            </div>
          )}
          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        </div>

        <div className="p-5">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-ink/70 text-sm mb-3 line-clamp-3">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tech.slice(0, 6).map((t, i) => (
              <span
                key={i}
                className="bg-section text-ink/80 border border-ink/10 px-3 py-1 rounded-full text-xs font-medium"
              >
                {t}
              </span>
            ))}
            {tech.length > 6 && (
              <span className="text-xs text-ink/60 self-center">+{tech.length - 6} more</span>
            )}
          </div>

          <div className="flex gap-3">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-block bg-primary hover:bg-primary-dark text-white text-sm px-3 py-2 rounded-md transition"
              >
                Live Demo
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-block border border-ink/10 hover:border-ink/20 text-ink text-sm px-3 py-2 rounded-md"
              >
                GitHub
              </a>
            )}

            <button
              onClick={(e) => { e.stopPropagation(); setOpen(true); }}
              className="ml-auto text-sm bg-section hover:bg-surface border border-ink/10 px-3 py-2 rounded-md"
              aria-label={`Show more details about ${title}`}
            >
              Details
            </button>
          </div>
        </div>
      </article>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            ref={modalRef}
            className="relative z-10 max-w-4xl w-full bg-surface text-ink rounded-2xl shadow-xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} details`}
          >
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto bg-section">
                {image ? (
                  <img src={image} alt={title} className="object-cover w-full h-full" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark text-white text-4xl font-bold">
                    {title.split(" ").slice(0,2).map(w => w[0]).join("")}
                  </div>
                )}
              </div>

              <div className="md:w-1/2 p-6">
                <div className="flex items-start gap-4">
                  <h4 className="text-2xl font-bold">{title}</h4>
                  <button
                    onClick={() => setOpen(false)}
                    className="ml-auto text-ink/60 hover:text-ink"
                    aria-label="Close details"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-ink/80 mt-4 leading-relaxed">
                  {longDescription || description}
                </p>

                <div className="mt-4">
                  <h5 className="text-sm font-semibold text-ink/70 mb-2">Tech stack</h5>
                  <div className="flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                      <span key={i} className="bg-section text-ink/80 border border-ink/10 px-3 py-1 rounded-full text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Live
                    </a>
                  )}
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-ink/10 hover:border-ink/20 text-ink px-4 py-2 rounded-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Code
                    </a>
                  )}

                  <button
                    onClick={() => setOpen(false)}
                    className="ml-auto text-sm text-ink/70 hover:text-ink"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}