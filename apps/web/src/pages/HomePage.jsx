
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Globe, Mail, FileText, CheckCircle, TrendingUp } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import BenefitItem from '@/components/BenefitItem.jsx';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton.jsx';
import { Button } from '@/components/ui/button';

function HomePage() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Transforme sua empresa para o digital";

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 75); // 75ms per letter

    return () => clearInterval(interval);
  }, []);

  const services = [{
    icon: FileText,
    title: 'Digitalização de processos',
    description: 'Automatize tarefas manuais e ganhe eficiência operacional com sistemas personalizados para seu negócio.'
  }, {
    icon: Database,
    title: 'Sistemas e banco de dados',
    description: 'Organize suas informações com segurança e acesse dados em tempo real de qualquer lugar.'
  }, {
    icon: Globe,
    title: 'Criação de sites profissionais',
    description: 'Presença digital moderna e responsiva que transmite credibilidade e atrai clientes.'
  }, {
    icon: Mail,
    title: 'E-mails corporativos',
    description: 'Comunicação profissional com domínio próprio para fortalecer sua marca no mercado.'
  }];

  const benefits = [{
    icon: CheckCircle,
    title: 'Mais organização',
    description: 'Centralize informações e processos em um único sistema acessível.'
  }, {
    icon: TrendingUp,
    title: 'Redução de erros',
    description: 'Minimize falhas humanas com automação e validação de dados.'
  }, {
    icon: ArrowRight,
    title: 'Mais produtividade',
    description: 'Libere sua equipe de tarefas repetitivas para focar no crescimento.'
  }, {
    icon: Database,
    title: 'Acesso rápido às informações',
    description: 'Consulte dados importantes em segundos, de qualquer dispositivo.'
  }, {
    icon: Globe,
    title: 'Imagem profissional',
    description: 'Transmita confiança com presença digital moderna e organizada.'
  }, {
    icon: CheckCircle,
    title: 'Preparação para crescimento',
    description: 'Infraestrutura escalável que acompanha a evolução do seu negócio.'
  }];

  return (
    <>
      <Helmet>
        <title>ZEOXY - Transforme sua empresa para o digital</title>
        <meta name="description" content="Soluções digitais completas para empresas que querem crescer. Digitalização de processos, sistemas personalizados, sites profissionais e e-mails corporativos." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
        <Header />
        <FloatingWhatsAppButton />

        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://horizons-cdn.hostinger.com/7893b7cf-26ca-45d0-b19a-09e753364893/gemini_generated_image_xwncacxwnaaaaacacxwnc-x602b.png" 
              alt="Tecnologia futurista" 
              className="w-full h-full object-cover brightness-[1.2]" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight min-h-[90px] md:min-h-[120px]" 
              style={{ letterSpacing: '-0.02em' }} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              {typedText}
              <span className="animate-pulse inline-block ml-1 w-[2px] md:w-[3px] h-[1em] bg-primary align-middle -mt-1 md:-mt-2"></span>
            </motion.h1>

            <motion.p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2" 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Soluções completas em tecnologia para empresas que querem crescer com eficiência, organização e presença digital profissional.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
              className="px-4 sm:px-0"
            >
              <Link to="/contato" className="block sm:inline-block">
                <Button className="w-full sm:w-auto px-6 md:px-8 py-6 text-base md:text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] min-h-[44px]">
                  Fale com um especialista
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-10 md:mb-16" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sua empresa ainda depende de processos manuais?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Planilhas desorganizadas, informações perdidas, retrabalho constante e falta de controle sobre dados importantes. Isso custa tempo, dinheiro e oportunidades de crescimento.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-10 md:mb-16" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nós levamos sua empresa para o próximo nível
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Com tecnologia sob medida, você automatiza processos, organiza informações e projeta uma imagem profissional que atrai clientes e facilita o crescimento sustentável.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-10 md:mb-16" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossos serviços
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Soluções completas para digitalizar e profissionalizar sua empresa
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index} 
                  icon={service.icon} 
                  title={service.title} 
                  description={service.description} 
                  index={index} 
                />
              ))}
            </div>

            <motion.div 
              className="text-center mt-10 md:mt-12 px-4 sm:px-0" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/servicos" className="block sm:inline-block">
                <Button className="w-full sm:w-auto px-6 md:px-8 py-6 text-base md:text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] min-h-[44px]">
                  Ver todos os serviços
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-10 md:mb-16" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Benefícios da transformação digital
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Veja como a tecnologia pode impulsionar seu negócio
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <BenefitItem 
                  key={index} 
                  icon={benefit.icon} 
                  title={benefit.title} 
                  description={benefit.description} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Soluções pensadas para empresas reais
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10">
                Entendemos os desafios do dia a dia empresarial. Por isso, criamos tecnologia que resolve problemas práticos, aumenta a eficiência e prepara sua empresa para o futuro.
              </p>
              <div className="px-4 sm:px-0">
                <Link to="/contato" className="block sm:inline-block">
                  <Button className="w-full sm:w-auto px-6 md:px-8 py-6 text-base md:text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] min-h-[44px]">
                    Comece sua transformação digital
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
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

export default HomePage;
