import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight, Database, Globe, Mail, FileText,
  CheckCircle, TrendingUp, Zap, Shield, BarChart3
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton.jsx';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const lineReveal = {
  hidden: { opacity: 0, y: '60%' },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

function Counter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const serviceIcons = [FileText, Database, Globe, Mail];
const benefitIcons = [CheckCircle, TrendingUp, Zap, Database, Shield, BarChart3];

function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>ZEOXY - Transforme sua empresa para o digital</title>
        <meta
          name="description"
          content="Soluções digitais completas para empresas que querem crescer. Digitalização de processos, sistemas personalizados, sites profissionais e e-mails corporativos."
        />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
        <Header />
        <FloatingWhatsAppButton />

        {/* ═══ HERO ═══ */}
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 grid-bg z-0" />
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(192,192,192,0.07) 0%, transparent 70%)' }}
          />
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-background to-transparent z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-xs font-medium text-muted-foreground mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t.home.badge}
            </motion.div>

            <motion.div variants={container} initial="hidden" animate="show" className="mb-8">
              <div className="overflow-hidden">
                <motion.h1 variants={lineReveal} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.0] tracking-tight animated-gradient-text">
                  {t.home.heroLine1}
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 variants={lineReveal} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.0] tracking-tight text-foreground">
                  {t.home.heroLine2}
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 variants={lineReveal} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.0] tracking-tight text-foreground">
                  {t.home.heroLine3Prefix}{' '}
                  <span className="animated-gradient-text">{t.home.heroLine3Suffix}</span>
                </motion.h1>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
            >
              {t.home.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contato">
                <Button className="group px-8 py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 active:scale-[0.98]">
                  {t.home.ctaPrimary}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/servicos">
                <Button variant="outline" className="px-8 py-6 text-base font-semibold border-border text-foreground/70 hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                  {t.home.ctaSecondary}
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/40 text-[11px] tracking-widest uppercase select-none"
          >
            <span>{t.home.scroll}</span>
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-7 bg-gradient-to-b from-muted-foreground/30 to-transparent"
            />
          </motion.div>
        </section>

        {/* ═══ MARQUEE ═══ */}
        <div className="py-5 border-y border-border overflow-hidden select-none">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-10 pr-10" aria-hidden={copy > 0}>
                {t.home.marquee.map((item) => (
                  <React.Fragment key={item}>
                    <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-muted-foreground/50 whitespace-nowrap">{item}</span>
                    <span className="w-1 h-1 rounded-full bg-primary/30 flex-shrink-0" />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ═══ PROBLEM ═══ */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mb-16">
              <motion.p variants={itemUp} className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary/60 mb-4">
                {t.home.problemLabel}
              </motion.p>
              <motion.h2 variants={itemUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl">
                {t.home.problemHeading}
              </motion.h2>
              <motion.div variants={itemUp} className="w-12 h-px bg-primary/30 mt-8" />
            </motion.div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-2xl overflow-hidden">
              {t.home.problems.map((item) => (
                <motion.div key={item.num} variants={itemUp} className="group bg-background p-8 md:p-10 hover:bg-card transition-colors duration-300">
                  <span className="text-5xl font-bold text-border group-hover:text-primary/20 transition-colors duration-500 block mb-8 leading-none">{item.num}</span>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ SOLUTION STATEMENT ═══ */}
        <section className="py-20 md:py-28 bg-card border-y border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease }}>
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary/60 mb-6">{t.home.solutionLabel}</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t.home.solutionHeading}{' '}
                <span className="animated-gradient-text">{t.home.solutionHeadingGradient}</span>
              </h2>
              <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.home.solutionText}</p>
            </motion.div>
          </div>
        </section>

        {/* ═══ SERVICES ═══ */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <motion.p variants={itemUp} className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary/60 mb-4">{t.home.servicesLabel}</motion.p>
                <motion.h2 variants={itemUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-xl">{t.home.servicesHeading}</motion.h2>
              </div>
              <motion.div variants={itemUp} className="flex-shrink-0">
                <Link to="/servicos">
                  <Button variant="outline" className="border-border text-foreground/70 hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                    {t.home.viewAll}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {t.home.services.map((service, i) => {
                const Icon = serviceIcons[i];
                return (
                  <motion.div key={i} variants={itemUp} className="group relative p-8 md:p-10 bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1 overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8">{service.description}</p>
                    <Link to="/contato" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300">
                      {t.home.learnMore}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ═══ BENEFITS ═══ */}
        <section className="py-24 md:py-32 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mb-16">
              <motion.p variants={itemUp} className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary/60 mb-4">{t.home.benefitsLabel}</motion.p>
              <motion.h2 variants={itemUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl">{t.home.benefitsHeading}</motion.h2>
              <motion.p variants={itemUp} className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">{t.home.benefitsSubtitle}</motion.p>
            </motion.div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {t.home.benefits.map((benefit, i) => {
                const Icon = benefitIcons[i];
                return (
                  <motion.div key={i} variants={itemUp} className="group p-7 bg-background rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50 z-0" />
          <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(192,192,192,0.06) 0%, transparent 70%)' }} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
              <motion.p variants={itemUp} className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary/60 mb-6">{t.home.ctaSectionLabel}</motion.p>
              <motion.h2 variants={itemUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                {t.home.ctaSectionHeading}{' '}
                <span className="animated-gradient-text">{t.home.ctaSectionHeadingGradient}</span>
              </motion.h2>
              <motion.p variants={itemUp} className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">{t.home.ctaSectionText}</motion.p>
              <motion.div variants={itemUp}>
                <Link to="/contato">
                  <Button className="group px-8 py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 active:scale-[0.98]">
                    {t.home.ctaSectionButton}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
