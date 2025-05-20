import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AiVoice } from "./ai-voice";

export const MainFeature = () => (
  <div className="w-full py-20 lg:py-20" id="fonctionnalités">
    <div className="container mx-auto">
      <div className="flex gap-4 py-20 lg:py-20 flex-col items-center">
        <div>
          <Badge>Platform</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            Laissez-vous tenter par l’IA
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
           Une nouvelle façon de gérer vos appels et campagnes, sans prise de tête.
          </p>
        </div>
        <AiVoice 
         audioSrc="/audio/agent_ai_voice.mp3" 
        />
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Créer votre agent IA </p>
                <p className="text-muted-foreground text-sm">
                 Construis ton agent vocal en quelques clics, sans écrire une ligne.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Voix ultra réaliste</p>
                <p className="text-muted-foreground text-sm">
                  Ton IA parle comme un humain. Fluide, naturelle, crédible.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Actif en continu</p>
                <p className="text-muted-foreground text-sm">
                  Ton agent répond et appelle, jour et nuit, sans pause.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Lance des campagnes</p>
                <p className="text-muted-foreground text-sm">
                  Planifie des appels ou automatise des séquences à grande échelle.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Faible latence</p>
                <p className="text-muted-foreground text-sm">
                  L’IA réagit en quelques millisecondes, pour des conversations fluides et naturelles.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Tout est transcrit</p>
                <p className="text-muted-foreground text-sm">
                 Suis l’appel en direct, mot pour mot, en temps réel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);