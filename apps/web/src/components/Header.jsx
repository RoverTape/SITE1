import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/servicos', label: 'Serviços' },
  { path: '/contato', label: 'Contato' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* ── Floating pill nav ── */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-5 px-4 pointer-events-none">

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto w-full max-w-3xl"
        >
          <div
            className={`
              flex items-center justify-between gap-3 px-5 py-3 rounded-2xl
              transition-all duration-500
              ${isScrolled
                ? 'bg-background/85 backdrop-blur-2xl border border-border/70 shadow-2xl shadow-black/40'
                : 'bg-background/55 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20'
              }
            `}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 pl-1">
              <img
                src="https://horizons-cdn.hostinger.com/7893b7cf-26ca-45d0-b19a-09e753364893/e2c0dff7aa53b5af8dace603d8917542.png"
                alt="ZEOXY"
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop nav links — centered */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 text-sm font-medium rounded-xl transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-foreground'
                      : 'text-foreground/50 hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA button */}
            <Link
              to="/contato"
              className="hidden md:inline-flex items-center px-5 py-2 bg-foreground text-background rounded-xl text-sm font-semibold hover:bg-foreground/85 transition-all duration-200 active:scale-[0.97] flex-shrink-0"
            >
              Fale conosco
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors rounded-xl hover:bg-white/5"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: 'block' }}
                  >
                    <X className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: 'block' }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile dropdown — attached below the pill */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ originY: 0 }}
                className="mt-2 bg-background/95 backdrop-blur-2xl border border-border/70 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
              >
                <nav className="flex flex-col p-3 gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground/70 hover:bg-white/5 hover:text-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    to="/contato"
                    className="mt-1 px-4 py-3 bg-foreground text-background rounded-xl text-sm font-semibold text-center hover:bg-foreground/85 transition-all duration-200 active:scale-[0.98]"
                  >
                    Fale conosco
                  </Link>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>
    </>
  );
}

export default Header;
