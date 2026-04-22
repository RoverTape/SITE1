import React, { createContext, useContext, useState } from 'react';

const translations = {
  pt: {
    nav: {
      home: 'Home',
      services: 'Serviços',
      contact: 'Contato',
      cta: 'Fale conosco',
    },
    footer: {
      tagline: 'Transformando empresas através da tecnologia e inovação digital.',
      quickLinks: 'Links rápidos',
      contact: 'Contato',
      rights: 'Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
    },
    home: {
      badge: 'Soluções digitais para empresas',
      heroLine1: 'Transforme',
      heroLine2: 'sua empresa',
      heroLine3Prefix: 'para o',
      heroLine3Suffix: 'digital',
      subtitle: 'Soluções completas em tecnologia para empresas que querem crescer com eficiência, organização e presença digital profissional.',
      ctaPrimary: 'Fale com um especialista',
      ctaSecondary: 'Conhecer serviços',
      scroll: 'scroll',
      marquee: ['Digitalização de Processos', 'Sistemas Personalizados', 'Sites Profissionais', 'E-mails Corporativos', 'Automação Empresarial', 'Transformação Digital'],
      problemLabel: 'O problema',
      problemHeading: 'Sua empresa ainda depende de processos manuais?',
      problems: [
        { num: '01', title: 'Planilhas desorganizadas', text: 'Informações espalhadas em arquivos sem controle de versão ou segurança adequada.' },
        { num: '02', title: 'Retrabalho constante', text: 'Processos manuais geram erros que consomem tempo e recursos preciosos do seu negócio.' },
        { num: '03', title: 'Sem visibilidade', text: 'Sem dados em tempo real, decisões são tomadas às cegas, comprometendo o crescimento.' },
      ],
      solutionLabel: 'A solução',
      solutionHeading: 'Nós levamos sua empresa para o',
      solutionHeadingGradient: 'próximo nível',
      solutionText: 'Com tecnologia sob medida, você automatiza processos, organiza informações e projeta uma imagem profissional que atrai clientes e facilita o crescimento sustentável.',
      servicesLabel: 'Serviços',
      servicesHeading: 'Nossos serviços',
      viewAll: 'Ver todos',
      learnMore: 'Saiba mais',
      services: [
        { title: 'Digitalização de processos', description: 'Automatize tarefas manuais e ganhe eficiência operacional com sistemas personalizados para seu negócio.' },
        { title: 'Sistemas e banco de dados', description: 'Organize suas informações com segurança e acesse dados em tempo real de qualquer lugar.' },
        { title: 'Criação de sites profissionais', description: 'Presença digital moderna e responsiva que transmite credibilidade e atrai clientes.' },
        { title: 'E-mails corporativos', description: 'Comunicação profissional com domínio próprio para fortalecer sua marca no mercado.' },
      ],
      benefitsLabel: 'Benefícios',
      benefitsHeading: 'Benefícios da transformação digital',
      benefitsSubtitle: 'Veja como a tecnologia pode impulsionar seu negócio',
      benefits: [
        { title: 'Mais organização', description: 'Centralize informações e processos em um único sistema acessível.' },
        { title: 'Redução de erros', description: 'Minimize falhas humanas com automação e validação de dados.' },
        { title: 'Mais produtividade', description: 'Libere sua equipe de tarefas repetitivas para focar no crescimento.' },
        { title: 'Acesso rápido às informações', description: 'Consulte dados importantes em segundos, de qualquer dispositivo.' },
        { title: 'Imagem profissional', description: 'Transmita confiança com presença digital moderna e organizada.' },
        { title: 'Preparação para crescimento', description: 'Infraestrutura escalável que acompanha a evolução do seu negócio.' },
      ],
      ctaSectionLabel: 'Pronto para começar?',
      ctaSectionHeading: 'Soluções pensadas para',
      ctaSectionHeadingGradient: 'empresas reais',
      ctaSectionText: 'Entendemos os desafios do dia a dia empresarial. Por isso, criamos tecnologia que resolve problemas práticos, aumenta a eficiência e prepara sua empresa para o futuro.',
      ctaSectionButton: 'Comece sua transformação digital',
    },
    services: {
      label: 'O que oferecemos',
      heading: 'Nossos',
      headingGradient: 'serviços',
      subtitle: 'Soluções completas em tecnologia para transformar sua empresa e impulsionar seu crescimento',
      included: 'O que está incluído',
      requestQuote: 'Solicitar orçamento',
      bottomCtaHeading: 'Pronto para transformar sua empresa?',
      bottomCtaText: 'Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer com tecnologia',
      bottomCtaButton: 'Fale com um especialista',
      list: [
        {
          title: 'Digitalização de processos',
          description: 'Transforme processos manuais em sistemas automatizados que economizam tempo e reduzem erros.',
          benefits: ['Automação de tarefas repetitivas', 'Redução de erros humanos', 'Aumento da produtividade', 'Rastreamento em tempo real', 'Relatórios automáticos', 'Integração com sistemas existentes'],
        },
        {
          title: 'Sistemas e banco de dados',
          description: 'Organize e proteja suas informações com sistemas personalizados e banco de dados seguros.',
          benefits: ['Armazenamento seguro de dados', 'Acesso rápido às informações', 'Backup automático', 'Controle de permissões', 'Escalabilidade garantida', 'Suporte técnico especializado'],
        },
        {
          title: 'Criação de sites profissionais',
          description: 'Presença digital moderna e responsiva que transmite credibilidade e atrai clientes.',
          benefits: ['Design moderno e responsivo', 'Otimização para mecanismos de busca (SEO)', 'Carregamento rápido', 'Integração com redes sociais', 'Formulários de contato', 'Painel administrativo intuitivo'],
        },
        {
          title: 'E-mails corporativos',
          description: 'Comunicação profissional com domínio próprio para fortalecer sua marca no mercado.',
          benefits: ['Domínio personalizado (@suaempresa.com)', 'Caixas de e-mail ilimitadas', 'Proteção anti-spam', 'Acesso de qualquer dispositivo', 'Armazenamento generoso', 'Suporte técnico dedicado'],
        },
      ],
    },
    contact: {
      label: 'Entre em contato',
      heading: 'Vamos transformar',
      headingGradient: 'sua empresa?',
      subtitle: 'Entre em contato com nossa equipe para entender suas necessidades e apresentar as melhores soluções',
      emailLabel: 'Email',
      phoneLabel: 'Telefone',
      locationLabel: 'Localização',
      locationValue: 'São Paulo, SP — Brasil',
      hoursLabel: 'Horário',
      hoursValue: 'Seg–Sex: 9h às 18h',
      quickResponseHeading: 'Resposta rápida',
      quickResponseText: 'Nossa equipe responde todas as mensagens em até 24 horas úteis. Para atendimento imediato, utilize nosso WhatsApp.',
    },
    whatsapp: {
      message: 'Olá! Gostaria de saber mais sobre os serviços da ZEOXY.',
      ariaLabel: 'Fale conosco no WhatsApp',
    },
  },

  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      contact: 'Contact',
      cta: 'Talk to us',
    },
    footer: {
      tagline: 'Transforming companies through technology and digital innovation.',
      quickLinks: 'Quick links',
      contact: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    home: {
      badge: 'Digital solutions for businesses',
      heroLine1: 'Transform',
      heroLine2: 'your business',
      heroLine3Prefix: 'to the',
      heroLine3Suffix: 'digital',
      subtitle: 'Complete technology solutions for businesses that want to grow with efficiency, organization, and professional digital presence.',
      ctaPrimary: 'Talk to an expert',
      ctaSecondary: 'Explore services',
      scroll: 'scroll',
      marquee: ['Process Digitalization', 'Custom Systems', 'Professional Websites', 'Corporate Emails', 'Business Automation', 'Digital Transformation'],
      problemLabel: 'The problem',
      problemHeading: 'Does your business still rely on manual processes?',
      problems: [
        { num: '01', title: 'Disorganized spreadsheets', text: 'Information scattered across files without proper version control or security.' },
        { num: '02', title: 'Constant rework', text: 'Manual processes generate errors that consume precious time and resources from your business.' },
        { num: '03', title: 'No visibility', text: 'Without real-time data, decisions are made blindly, compromising growth.' },
      ],
      solutionLabel: 'The solution',
      solutionHeading: 'We take your business to the',
      solutionHeadingGradient: 'next level',
      solutionText: 'With tailor-made technology, you automate processes, organize information, and project a professional image that attracts clients and drives sustainable growth.',
      servicesLabel: 'Services',
      servicesHeading: 'Our services',
      viewAll: 'View all',
      learnMore: 'Learn more',
      services: [
        { title: 'Process digitalization', description: 'Automate manual tasks and gain operational efficiency with custom systems for your business.' },
        { title: 'Systems & databases', description: 'Organize your information securely and access real-time data from anywhere.' },
        { title: 'Professional website creation', description: 'Modern, responsive digital presence that conveys credibility and attracts clients.' },
        { title: 'Corporate emails', description: 'Professional communication with your own domain to strengthen your brand in the market.' },
      ],
      benefitsLabel: 'Benefits',
      benefitsHeading: 'Benefits of digital transformation',
      benefitsSubtitle: 'See how technology can boost your business',
      benefits: [
        { title: 'More organization', description: 'Centralize information and processes in a single accessible system.' },
        { title: 'Error reduction', description: 'Minimize human errors with automation and data validation.' },
        { title: 'More productivity', description: 'Free your team from repetitive tasks to focus on growth.' },
        { title: 'Quick information access', description: 'Retrieve important data in seconds, from any device.' },
        { title: 'Professional image', description: 'Convey trust with a modern and organized digital presence.' },
        { title: 'Ready for growth', description: 'Scalable infrastructure that keeps up with your business evolution.' },
      ],
      ctaSectionLabel: 'Ready to start?',
      ctaSectionHeading: 'Solutions built for',
      ctaSectionHeadingGradient: 'real businesses',
      ctaSectionText: "We understand the daily challenges of running a business. That's why we create technology that solves practical problems, boosts efficiency, and prepares your company for the future.",
      ctaSectionButton: 'Start your digital transformation',
    },
    services: {
      label: 'What we offer',
      heading: 'Our',
      headingGradient: 'services',
      subtitle: 'Complete technology solutions to transform your business and accelerate your growth',
      included: "What's included",
      requestQuote: 'Request a quote',
      bottomCtaHeading: 'Ready to transform your business?',
      bottomCtaText: 'Get in touch with us and discover how we can help your business grow with technology',
      bottomCtaButton: 'Talk to an expert',
      list: [
        {
          title: 'Process digitalization',
          description: 'Turn manual processes into automated systems that save time and reduce errors.',
          benefits: ['Automation of repetitive tasks', 'Reduction of human errors', 'Increased productivity', 'Real-time tracking', 'Automatic reports', 'Integration with existing systems'],
        },
        {
          title: 'Systems & databases',
          description: 'Organize and protect your information with custom systems and secure databases.',
          benefits: ['Secure data storage', 'Quick information access', 'Automatic backup', 'Permission control', 'Guaranteed scalability', 'Specialized technical support'],
        },
        {
          title: 'Professional website creation',
          description: 'Modern, responsive digital presence that conveys credibility and attracts clients.',
          benefits: ['Modern and responsive design', 'Search engine optimization (SEO)', 'Fast loading', 'Social media integration', 'Contact forms', 'Intuitive admin panel'],
        },
        {
          title: 'Corporate emails',
          description: 'Professional communication with your own domain to strengthen your brand in the market.',
          benefits: ['Custom domain (@yourcompany.com)', 'Unlimited mailboxes', 'Anti-spam protection', 'Access from any device', 'Generous storage', 'Dedicated technical support'],
        },
      ],
    },
    contact: {
      label: 'Get in touch',
      heading: "Let's transform",
      headingGradient: 'your business?',
      subtitle: 'Contact our team to understand your needs and present the best solutions',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      locationValue: 'São Paulo, SP — Brazil',
      hoursLabel: 'Hours',
      hoursValue: 'Mon–Fri: 9am to 6pm',
      quickResponseHeading: 'Quick response',
      quickResponseText: 'Our team responds to all messages within 24 business hours. For immediate assistance, use our WhatsApp.',
    },
    whatsapp: {
      message: "Hello! I'd like to know more about ZEOXY's services.",
      ariaLabel: 'Chat with us on WhatsApp',
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt');
  const toggleLang = () => setLang((l) => (l === 'pt' ? 'en' : 'pt'));
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
