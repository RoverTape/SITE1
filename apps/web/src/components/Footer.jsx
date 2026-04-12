import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Subtle top gradient */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(192,192,192,0.3), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 md:pt-16 md:pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">

          {/* Brand */}
          <div className="flex flex-col items-start">
            <img
              src="https://horizons-cdn.hostinger.com/7893b7cf-26ca-45d0-b19a-09e753364893/4c06e1296f254a156617f3ae5f320ddf.png"
              alt="ZEOXY"
              className="h-7 md:h-8 w-auto mb-5"
            />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Transformando empresas através da tecnologia e inovação digital.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-foreground/50 mb-5">
              Links rápidos
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/servicos', label: 'Serviços' },
                { to: '/contato', label: 'Contato' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-foreground/50 mb-5">
              Contato
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="break-all">comercial@zeoxy.tech</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>(19) 99791-3426</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-muted-foreground/60">
            © {currentYear} ZEOXY. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              to="/contato"
              className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-200"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/contato"
              className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-200"
            >
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
