import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Database, Globe, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton.jsx';
import { Button } from '@/components/ui/button';

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
};

const services = [
  {
    icon: FileText,
    title: 'Digitalização de processos',
    description:
      'Transforme processos manuais em sistemas automatizados que economizam tempo e reduzem erros.',
    benefits: [
      'Automação de tarefas repetitivas',
      'Redução de erros humanos',
      'Aumento da produtividade',
      'Rastreamento em tempo real',
      'Relatórios automáticos',
      'Integração com sistemas existentes',
    ],
  },
  {
    icon: Database,
    title: 'Sistemas e banco de dados',
    description:
      'Organize e proteja suas informações com sistemas personalizados e banco de dados seguros.',
    benefits: [
      'Armazenamento seguro de dados',
      'Acesso rápido às informações',
      'Backup automático',
      'Controle de permissões',
      'Escalabilidade garantida',
      'Suporte técnico especializado',
    ],
  },
  {
    icon: Globe,
    title: 'Criação de sites profissionais',
    description:
      'Presença digital moderna e responsiva que transmite credibilidade e atrai clientes.',
    benefits: [
      'Design moderno e responsivo',
      'Otimização para mecanismos de busca (SEO)',
      'Carregamento rápido',
      'Integração com redes sociais',
      'Formulários de contato',
      'Painel administrativo intuitivo',
    ],
  },
  {
    icon: Mail,
    title: 'E-mails corporativos',
    description:
      'Comunicação profissional com domínio próprio para fortalecer sua marca no mercado.',
    benefits: [
      'Domínio personalizado (@suaempresa.com)',
      'Caixas de e-mail ilimitadas',
      'Proteção anti-spam',
      'Acesso de qualquer dispositivo',
      'Armazenamento generoso',
      'Suporte técnico dedicado',
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Serviços - ZEOXY</title>
        <meta
          name="description"
          content="Conheça nossos serviços de digitalização de processos, sistemas personalizados, criação de sites profissionais e e-mails corporativos."
        />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
        <Header />
        <FloatingWhatsAppButton />

        {/* ═══ HERO ═══ */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40 z-0" />
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(192,192,192,0.06) 0%, transparent 70%)',
            }}
          />
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="max-w-4xl"
            >
              <motion.p
                variants={itemUp}
                className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary/60 mb-5"
              >
                O que oferecemos
              </motion.p>
              <motion.h1
                variants={itemUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-6"
              >
                Nossos{' '}
                <span className="animated-gradient-text">serviços</span>
              </motion.h1>
              <motion.p
                variants={itemUp}
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              >
                Soluções completas em tecnologia para transformar sua empresa e impulsionar seu crescimento
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ═══ SERVICES LIST ═══ */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-5 md:space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.75, ease }}
                  className="group relative bg-card rounded-2xl border border-border
                    hover:border-primary/40 transition-all duration-500
                    hover:shadow-2xl hover:shadow-black/40 overflow-hidden"
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/4 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                  <div className="relative z-10 p-8 md:p-12">
                    {/* Top row: icon + number */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                        <service.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                      </div>
                      <span className="text-4xl md:text-5xl font-bold text-border group-hover:text-primary/20 transition-colors duration-500 leading-none">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col lg:flex-row lg:gap-16">
                      <div className="lg:w-2/5 mb-8 lg:mb-0">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {service.title}
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                          {service.description}
                        </p>
                        <Link to="/contato" className="inline-block">
                          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]">
                            Solicitar orçamento
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>

                      <div className="lg:w-3/5">
                        <h3 className="text-sm font-semibold text-foreground/70 tracking-wider uppercase mb-5">
                          O que está incluído
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.benefits.map((benefit, bi) => (
                            <div key={bi} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease }}
              className="mt-12 md:mt-16 relative overflow-hidden bg-card rounded-2xl border border-border p-10 md:p-16 text-center"
            >
              <div className="absolute inset-0 grid-bg opacity-30 z-0" />
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(192,192,192,0.05) 0%, transparent 70%)',
                }}
              />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Pronto para transformar sua empresa?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer com tecnologia
                </p>
                <Link to="/contato">
                  <Button className="group px-8 py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 active:scale-[0.98]">
                    Fale com um especialista
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ServicesPage;
