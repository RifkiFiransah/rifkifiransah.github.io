import React from "react";

export default function Download() {
  const handleDownload = () => {
    const cvPath = "../public/assets/cv/CVMRifkiFiransah.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Rifki_Firansah_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="download" className="py-16 bg-gradient-to-r from-primary to-primary-dark">
      <div className="max-w-4xl px-4 mx-auto text-center">
        <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl md:p-12">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Work Together?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-white/90">
            Download my CV to see my complete professional background, skills, and experience.
            Let's discuss how I can contribute to your next project.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold transition-colors bg-white rounded-lg shadow-lg cursor-pointer text-primary hover:text-primary-dark hover:bg-section"
              aria-label="Download CV"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download CV
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white transition-colors border-2 rounded-lg border-white/60 hover:bg-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Contact Me
            </a>
          </div>

          <div className="mt-8 text-sm text-white/80">
            <p>📄 PDF Format • 📝 Updated {new Date().getFullYear()} • 🔒 Professional Resume</p>
          </div>
        </div>
      </div>
    </section>
  );
}