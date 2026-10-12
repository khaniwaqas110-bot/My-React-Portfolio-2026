
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#About" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Future", href: "#future" },
    { name: "Contact", href: "#contact" },
  ];

  // NAVIGATION SCROLL FUNCTION
  const navigateTo = (event, href) => {
    event.preventDefault();

    setMenuOpen(false);

    const id = href.slice(1);
    const target = document.getElementById(id);

    if (!target) {
      console.warn(`Section not found: ${id}`);
      return;
    }

    const top =
      window.scrollY +
      target.getBoundingClientRect().top -
      (id === "home" ? 0 : 100);

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "instant",
    });

    window.history.replaceState(null, "", href);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-slate-700/60 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-xl lg:rounded-full lg:px-6">

        {/* MAIN NAVBAR */}
        <div className="flex items-center justify-between gap-4">

          {/* LOGO */}
          <a
            href="#home"
            onClick={(event) => navigateTo(event, "#home")}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 font-bold text-white">
              MW
            </div>

            <span className="text-xl font-bold text-white">
              Waqas
              <span className="text-cyan-400">.dev</span>
            </span>
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) =>
                  navigateTo(event, link.href)
                }
                className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* DESKTOP HIRE ME */}
          <a
            href="#contact"
            onClick={(event) =>
              navigateTo(event, "#contact")
            }
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 lg:flex"
          >
            Hire Me
            <FiArrowUpRight />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-400 lg:hidden"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 flex flex-col gap-1 border-t border-slate-700 pt-4">

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(event) =>
                      navigateTo(event, link.href)
                    }
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors duration-300 hover:bg-cyan-400/10 hover:text-cyan-400"
                  >
                    {link.name}
                    <FiArrowUpRight />
                  </a>
                ))}

                {/* MOBILE HIRE ME */}
                <a
                  href="#contact"
                  onClick={(event) =>
                    navigateTo(event, "#contact")
                  }
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold text-white"
                >
                  Hire Me
                  <FiArrowUpRight />
                </a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
