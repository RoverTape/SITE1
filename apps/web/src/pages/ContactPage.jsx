import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton.jsx';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contato - ZEOXY</title>
        <meta name="description" content="Entre em contato com a ZEOXY. Estamos prontos para transformar sua empresa com soluções digitais personalizadas." />
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
                Vamos transformar sua empresa?
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Entre em contato com nossa equipe para entender suas necessidades e apresentar as melhores soluções
              </p>
            </motion.div>

            <div className="flex justify-center">
              <motion.div 
                className="space-y-6 md:space-y-8 w-full max-w-2xl" 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Informações de contato</h2>
                  
                  <div className="space-y-5 md:space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex-shrink-0">
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div className="overflow-hidden">
                        <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-xs md:text-sm text-muted-foreground break-all">contato.zeoxy@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex-shrink-0">
                        <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">Telefone</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">(19) 99791-3426</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex-shrink-0">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-semibold text-foreground mb-1">Localização</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">São Paulo, SP</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Horário de atendimento</h2>
                  <div className="space-y-2">
                    <p className="text-xs md:text-sm text-muted-foreground">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Sábado: Fechado</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Domingo: Fechado</p>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-2xl border border-primary/20 p-6 md:p-8">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">Resposta rápida</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Nossa equipe responde todas as mensagens em até 24 horas úteis. Para atendimento imediato, utilize nosso WhatsApp.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;