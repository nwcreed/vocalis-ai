'use client';

import { Ripple } from "@/components/magicui/ripple";
import { motion } from 'framer-motion';
import { MoveRight, PhoneCall } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from './ui/input';
import React, { useImperativeHandle, useRef, useState } from "react";

export const Hero = React.forwardRef((props, ref) => {
 const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current?.focus();
    },
  }));
  
  const handleSubmit = async () => {
    setMessage(null);
    const email = inputRef.current?.value;

    if (!email || !email.includes('@')) {
      setMessage("Merci d'entrer un email valide.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/emails', {  // adapte ce chemin à ta route API
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Merci ! Email enregistré: ${data.email}`);
        if(inputRef.current) inputRef.current.value = '';
      } else {
        setMessage(data.error || "Erreur lors de l'enregistrement.");
      }
    } catch (error) {
      setMessage("Erreur réseau. Réessayez plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-screen px-4 md:px-0 overflow-hidden" id="accueil">
      
      {/* Ripple background */}
      <div className="absolute inset-0 -z-10">
        <Ripple />
      </div>

      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className='flex gap-4 flex-col'>
            <h1 className='text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular'>
              <span className='text-spektr-cyan-50'>Révolutionnez votre relation client avec</span>
              <span className='relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1'>
                un agent IA
              </span>
            </h1>

            <p className='text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center'>
              Créez facilement votre propre agent IA personnalisé et automatisez vos appels avec une voix ultra réaliste. Vocalis AI transforme la relation client en offrant un service 24/7, naturel et efficace, tout en libérant vos équipes.
            </p>
          </div>

          <div className="flex flex-row gap-3 w-full max-w-lg">
            <Input
              ref={inputRef}
              type="email"
              placeholder="Email"
              className="flex-[2] min-w-0 focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-blue-500
    focus-visible:ring-offset-2
    focus-visible:shadow-lg
    transition
    duration-200
    ease-in-out"
              disabled={loading}
            />
            <Button size="lg" className="flex-[1]" onClick={handleSubmit} disabled={loading}>
             {loading ? "Envoi..." : (
              <>
                Pré-inscription
              </>
             )}
            </Button>
          </div>

          {message && (
            <p className="mt-4 text-center text-sm text-red-600">
              {message}
            </p>
          )}
          <label className="text-muted-foreground text-sm">Soyez le premier à tester gratuitement</label>
        </div>
      </div>
    </div>
  );
});
