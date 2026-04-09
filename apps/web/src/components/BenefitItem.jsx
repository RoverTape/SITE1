
import React from 'react';
import { motion } from 'framer-motion';

function BenefitItem({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      className="flex flex-col items-start p-5 md:p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg mb-4 flex-shrink-0">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
      </div>
      <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default BenefitItem;
