import { Check, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PricingBox from "@/components/pricing_box"; // <-- Assure-toi du bon chemin

export const Pricing = () => (
  <div className="w-full py-20 lg:py-40" id="tarifs">
    <div className="container mx-auto">
      <div className="flex text-center justify-center items-center gap-4 flex-col">
        <Badge>Pricing</Badge>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
            Un prix qui a du sens !
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Payez uniquement ce que vous utilisez
          </p>
        </div>

        {/* SECTION PRINCIPALE RESPONSIVE */}
        <div className="flex flex-col lg:flex-row gap-8 w-full pt-20 px-4 lg:px-0">
          {/* SECTION DE GAUCHE - PRICING DETAILS */}
          <div className="grid text-left w-full lg:w-2/3 grid-cols-2 divide-x">
            <div className="col-span-1"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
              <p className="text-2xl">Payer à la minute</p>
              <p className="text-sm text-muted-foreground">
                Profitez d’un agent IA vocal ultra-réaliste, sans engagement.
                Payez uniquement les minutes utilisées. Parfait pour tester ou démarrer simplement.
              </p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                <span className="text-4xl">0,35€</span>
                <span className="text-sm text-muted-foreground"> / min</span>
              </p>
              <Button className="gap-4 mt-8">
                Try it <MoveRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="px-3 lg:px-6 col-span-1 py-4">
              <b>Features</b>
            </div>
            <div></div>

            {/* Features list */}
            {[
              ["Voix IA ultra réaliste", true],
              ["Appels entrants & sortants", true],
              ["Agent IA personnalisé", true],
              ["Disponibilité 24/7", true],
              ["Workflow", true],
              ["Sans engagement", true],
            ].map(([label, value]) => (
              <div key={label as string} className="contents">
                <div className="px-3 lg:px-6 col-span-1 py-4">{label}</div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  {value === true ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    <p className="text-muted-foreground text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* SECTION DE DROITE - PRICING BOX */}
          <div className="w-full lg:w-1/3">
            <PricingBox />
          </div>
        </div>
      </div>
    </div>
  </div>
);
