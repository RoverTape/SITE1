import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton.jsx';

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contato.zeoxy@gmail.com',
    href: 'mailto:contato.zeoxy@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(19) 99791-3426',
    href: 'tel:+5519997913426',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'São Paulo, SP',
    href: null,
  },
  {
    icon: Clock,
    label: 'Horário',
    value: 'Seg–Sex: 9h às 18h',
    href: null,
  },
];

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contato - ZEOXY</title>
        <meta
          name="description"
          content="Entre em contato com a ZEOXY. Estamos prontos para transformar sua empresa com soluções digitais personalizadas."
        />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
        <Header />
        <FloatingWhatsAppButton />

        {/* ═══ HERO ═══ */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40 z-0" />
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(192,192,192,0.06) 0%, transparent 70%)',
            }}
          />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.p
                variants={itemUp}
                className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary/60 mb-5"
              >
                Entre em contato
              </motion.p>
              <motion.h1
                variants={itemUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-6"
              >
                Vamos transformar{' '}
                <span className="animated-gradient-text">sua empresa?</span>
              </motion.h1>
              <motion.p
                variants={itemUp}
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                Entre em contato com nossa equipe para entender suas necessidades e apresentar as melhores soluções
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ═══ CONTACT CARDS ═══ */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* 2×2 grid of info cards */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
            >
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemUp}
                  className="group flex items-start gap-4 p-7 bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/30"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-semibold text-muted-foreground/60 tracking-wider uppercase mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick response note */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, ease }}
              className="p-7 rounded-2xl border border-primary/20 bg-primary/5 text-center"
            >
              <h3 className="text-sm font-semibold text-foreground mb-2">Resposta rápida</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
                Nossa equipe responde todas as mensagens em até 24 horas úteis.
                Para atendimento imediato, utilize nosso WhatsApp.
              </p>
            </motion.div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
