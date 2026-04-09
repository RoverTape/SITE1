
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div className="flex flex-col items-start">
            <img src="https://horizons-cdn.hostinger.com/7893b7cf-26ca-45d0-b19a-09e753364893/4c06e1296f254a156617f3ae5f320ddf.png" alt="ZEOXY" className="h-8 md:h-10 w-auto mb-4" />
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Transformando empresas através da tecnologia e inovação digital.
            </p>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold text-foreground mb-4">Links rápidos</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/servicos" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link to="/contato" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold text-foreground mb-4">Contato</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="break-all">comercial@zeoxy.tech</span>
              </div>
              <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>(19) 99791-3426</span>
              </div>
              <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs md:text-sm text-muted-foreground">
              © {currentYear} ZEOXY. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/contato" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/contato" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
