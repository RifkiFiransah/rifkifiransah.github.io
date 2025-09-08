import React, { useEffect, useRef, useState } from "react";
import { awards } from "../data/awards";

export default function Certification() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
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

  const handleOpen = (item) => {
    setSelected(item);
    setOpen(true);
  };

  return (
    <section id="certification" className="pt-10 pb-24 bg-section">
      <div className="max-w-6xl px-4 pt-20 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-extrabold md:text-4xl text-ink">
            Awards & Certifications
          </h2>
          <span className="inline-block w-20 h-1 mb-6 rounded bg-ink"></span>
          <p className="max-w-2xl mx-auto leading-relaxed text-ink/70">
            Recognition and certifications that validate my skills and commitment to excellent, modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {awards.map((award, index) => (
            <article
              key={index}
              className="overflow-hidden transition shadow-md cursor-pointer group bg-surface text-ink rounded-xl hover:shadow-lg"
              onClick={() => handleOpen(award)}
              role="button"
              aria-label={`Open details for ${award.title}`}
            >
              <div className="relative w-full h-44 bg-section">
                {award.image ? (
                  <img
                    src={award.image}
                    alt={`${award.title} certificate`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
                    onError={(e) => (e.currentTarget.style.opacity = "0.2")}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-ink/50">
                    <svg width="48" height="48" viewBox="0 0 24 24" className="opacity-70">
                      <path fill="currentColor" d="M17 3H7a2 2 0 0 0-2 2v12l7-3l7 3V5a2 2 0 0 0-2-2Z" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 transition-colors bg-black/0 group-hover:bg-black/5"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-ink">{award.title}</h3>
                <div className="mt-1 font-medium text-primary">{award.organization}</div>
                <div className="mt-1 text-sm text-ink/60">{award.date}</div>
                <p className="mt-3 text-sm leading-relaxed text-ink/80 line-clamp-3">
                  {award.description}
                </p>

                <div className="flex items-center gap-3 mt-5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpen(award);
                    }}
                    className="px-4 py-2 text-sm text-white transition rounded-md bg-primary hover:bg-primary-dark"
                    aria-label={`View details of ${award.title}`}
                  >
                    View Details
                  </button>
          {award.downloadUrl && (
                    <a
                      href={award.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-4 py-2 text-sm border rounded-md border-ink/10 hover:border-ink/20"
                    >
                      Download PDF
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            ref={modalRef}
            className="relative z-10 w-full max-w-4xl overflow-hidden shadow-xl bg-surface text-ink rounded-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} details`}
          >
            <div className="md:flex">
              <div className="h-64 md:w-1/2 md:h-auto bg-section">
                {selected.image ? (
                  <img
                    src={selected.image}
                    alt={`${selected.title} certificate full`}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-ink/40">
                    <svg width="64" height="64" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M17 3H7a2 2 0 0 0-2 2v12l7-3l7 3V5a2 2 0 0 0-2-2Z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6 md:w-1/2">
                <div className="flex items-start gap-4">
                  <h4 className="text-2xl font-bold text-ink">{selected.title}</h4>
                  <button
                    onClick={() => setOpen(false)}
                    className="ml-auto text-ink/60 hover:text-ink"
                    aria-label="Close details"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-2 font-medium text-primary">{selected.organization}</div>
                <div className="mt-1 text-sm text-ink/60">{selected.date}</div>

                <p className="mt-4 leading-relaxed text-ink/80">
                  {selected.longDescription || selected.description}
                </p>

                <div className="flex gap-3 mt-6">
                  {/* {selected.credentialUrl && (
                    <a
                      href={selected.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-white transition rounded-md bg-primary hover:bg-primary-dark"
                    >
                      View Credential
                    </a>
                  )} */}
          {selected.downloadUrl && (
                    <a
                      href={selected.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
            className="px-4 py-2 border rounded-md border-ink/10 hover:border-ink/20"
                    >
                      Download PDF
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
    </section>
  );
}