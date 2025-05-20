import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import React, { useRef, useState } from "react";

export const CTA = React.forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

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
        if (inputRef.current) inputRef.current.value = '';
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
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>Get started</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Une nouvelle façon de gérer vos appels.
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Programmez vos campagnes, définissez les étapes à suivre, et laissez l’agent vocal gérer chaque conversation. — La version bêta arrive. Rejoignez la liste d'attente.
            </p>
          </div>
          <div className="flex flex-row gap-3  w-full max-w-lg">
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
                  Rejoignez la bêta
                </>
              )}
            </Button>
          </div>

          {message && (
            <p className="mt-4 text-center text-sm text-red-600">
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  )
});