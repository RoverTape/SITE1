import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Por favor, insira um email válido');
      return;
    }

    setIsSubmitting(true);

    try {
      const POCKETBASE_URL = import.meta.env.VITE_POCKETBASE_URL;

      if (POCKETBASE_URL) {
        // Use PocketBase if configured
        const { default: Pocketbase } = await import('pocketbase');
        const pb = new Pocketbase(POCKETBASE_URL);
        await pb.collection('contacts').create({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }, { $autoCancel: false });
      } else {
        // Fallback: open mailto link
        const subject = encodeURIComponent(`Contato de ${formData.name}`);
        const body = encodeURIComponent(
          `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
        );
        window.open(`mailto:comercial@zeoxy.com.br?subject=${subject}&body=${body}`, '_blank');
      }

      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 w-full">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm md:text-base text-foreground">Nome completo</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome"
          className="bg-card border-border text-foreground placeholder:text-muted-foreground p-3 md:p-4 text-base min-h-[44px]"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm md:text-base text-foreground">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          className="bg-card border-border text-foreground placeholder:text-muted-foreground p-3 md:p-4 text-base min-h-[44px]"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm md:text-base text-foreground">Mensagem</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Conte-nos sobre seu projeto ou necessidade..."
          rows={5}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground resize-none p-3 md:p-4 text-base"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto min-h-[44px] px-8 py-3 md:py-6 text-base md:text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          'Enviar mensagem'
        )}
      </Button>
    </form>
  );
}

export default ContactForm;
