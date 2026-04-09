
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      className="group relative p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
        <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 flex-grow">{description}</p>
      <Link
        to="/contato"
        className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 mt-auto w-fit"
      >
        Saiba mais
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

export default ServiceCard;
