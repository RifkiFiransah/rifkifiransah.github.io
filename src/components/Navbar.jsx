import React, { useState, useEffect } from "react";
import PictMe from "../assets/pict-me.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#certification", label: "Certification" },
    { href: "#contact", label: "Contact" },
  ];

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Initialize theme on mount
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      const initialTheme = saved || "light";
      setTheme(initialTheme);
      
      const root = document.documentElement;
      root.classList.remove("dark", "light");
      root.classList.add(initialTheme);
    }
  }, []);

  useEffect(() => {
    // Update theme when state changes
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      root.classList.remove("dark", "light");
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
      console.log("Theme changed to:", theme); // Debug log
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    console.log("Toggling theme from", theme, "to", newTheme); // Debug log
  };

  return (
    <nav className="fixed z-40 w-full shadow-md bg-surface/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-4.5">
        <div className="flex items-center justify-between">
          {/* brand & logo */}
          <a href="#home" className="flex items-center gap-3">
            {/* <span className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white rounded-full bg-accent">
              RF
            </span> */}
            <img src={PictMe} alt="profile" className="w-12 h-12 rounded-full" />
            <span className="text-xl font-semibold md:text-2xl text-ink">
              Rifki Firansah
            </span>
          </a>

          {/* desktop navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-wide uppercase transition-colors duration-200 text-ink/80 hover:text-primary"
              >
                {item.label}
              </a>
            ))}

            {/* theme toggle */}
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center w-10 h-10 ml-2 transition border rounded-md border-ink/10 hover:bg-section text-ink"
              aria-label="Toggle dark mode"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                // Sun icon
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 4v2m0 12v2m8-8h-2M6 12H4m12.95 5.657-1.414-1.414M6.464 7.05 5.05 5.636m12.9 0-1.414 1.414M6.464 16.95 5.05 18.364" />
                  <circle cx="12" cy="12" r="3.5" strokeWidth="2" />
                </svg>
              ) : (
                // Moon icon
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                </svg>
              )}
            </button>
          </div>

          {/* hamburger button */}
          <button
            className="flex items-center justify-center w-10 h-10 transition-colors md:hidden text-ink/80 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* mobile navigation */}
        {isOpen && (
          <div className="absolute left-0 right-0 border-t shadow-lg border-ink/10 md:hidden top-full bg-surface/95 backdrop-blur">
            <div className="px-4 py-2">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-between w-full px-2 py-3 transition rounded-md text-ink hover:bg-section"
                aria-label="Toggle dark mode"
              >
                <span className="text-sm font-medium tracking-wide uppercase">Theme</span>
                {theme === "dark" ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 4v2m0 12v2m8-8h-2M6 12H4m12.95 5.657-1.414-1.414M6.464 7.05 5.05 5.636m12.9 0-1.414 1.414M6.464 16.95 5.05 18.364" />
                      <circle cx="12" cy="12" r="3.5" strokeWidth="2" />
                    </svg>
                    Light
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                    </svg>
                    Dark
                  </span>
                )}
              </button>
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleMenuClick}
                  className="block px-2 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-200 rounded-md text-ink/80 hover:text-primary hover:bg-section"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}