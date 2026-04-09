
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Database, Globe, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton.jsx';
import { Button } from '@/components/ui/button';

function ServicesPage() {
  const services = [
    {
      icon: FileText,
      title: 'Digitalização de processos',
      description: 'Transforme processos manuais em sistemas automatizados que economizam tempo e reduzem erros.',
      benefits: [
        'Automação de tarefas repetitivas',
        'Redução de erros humanos',
        'Aumento da produtividade',
        'Rastreamento em tempo real',
        'Relatórios automáticos',
        'Integração com sistemas existentes'
      ]
    },
    {
      icon: Database,
      title: 'Sistemas e banco de dados',
      description: 'Organize e proteja suas informações com sistemas personalizados e banco de dados seguros.',
      benefits: [
        'Armazenamento seguro de dados',
        'Acesso rápido às informações',
        'Backup automático',
        'Controle de permissões',
        'Escalabilidade garantida',
        'Suporte técnico especializado'
      ]
    },
    {
      icon: Globe,
      title: 'Criação de sites profissionais',
      description: 'Presença digital moderna e responsiva que transmite credibilidade e atrai clientes.',
      benefits: [
        'Design moderno e responsivo',
        'Otimização para mecanismos de busca (SEO)',
        'Carregamento rápido',
        'Integração com redes sociais',
        'Formulários de contato',
        'Painel administrativo intuitivo'
      ]
    },
    {
      icon: Mail,
      title: 'E-mails corporativos',
      description: 'Comunicação profissional com domínio próprio para fortalecer sua marca no mercado.',
      benefits: [
        'Domínio personalizado (@suaempresa.com)',
        'Caixas de e-mail ilimitadas',
        'Proteção anti-spam',
        'Acesso de qualquer dispositivo',
        'Armazenamento generoso',
        'Suporte técnico dedicado'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços - ZEOXY</title>
        <meta name="description" content="Conheça nossos serviços de digitalização de processos, sistemas personalizados, criação de sites profissionais e e-mails corporativos." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
        <Header />
        <FloatingWhatsAppButton />

        <section className="pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10 md:mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Nossos serviços
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Soluções completas em tecnologia para transformar sua empresa e impulsionar seu crescimento
              </p>
            </motion.div>

            <div className="space-y-8 md:space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 md:p-12 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-2xl">
                        <service.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                        {service.title}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="mb-6 md:mb-8">
                        <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">O que está incluído:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link to="/contato" className="block sm:inline-block">
                        <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] min-h-[44px]">
                          Solicitar orçamento
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-12 md:mt-16 p-8 md:p-12 bg-card rounded-2xl border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
                Pronto para transformar sua empresa?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer com tecnologia
              </p>
              <Link to="/contato" className="block sm:inline-block">
                <Button className="w-full sm:w-auto px-6 md:px-8 py-4 md:py-6 text-base md:text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] min-h-[44px]">
                  Fale com um especialista
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ServicesPage;
