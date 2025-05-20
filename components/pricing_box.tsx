'use client'
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button, Group, Input, Label, NumberField } from "react-aria-components";
import { Card } from "./ui/card";

export default function PricingBox() {
  const [minutes, setMinutes] = useState(0);
  const euros = (minutes * 0.35).toFixed(2);

  return (
    <Card className="max-w-md mx-auto p-8 border border-gray-200 rounded-2xl shadow-sm bg-white">
      <h2 className="text-2xl font-semibold tracking-tight mb-6 text-gray-800">
        <span className="font-light">Estimez votre coût</span>
      </h2>

      <div className="space-y-6">
        {/* Input */}
        <div>

          <NumberField
            value={minutes}
            onChange={setMinutes}
            minValue={0}
            className="max-w-[300px]"
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">
                Nombre de minutes
              </Label>
              <Group className="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input text-sm shadow-sm shadow-black/5 transition-shadow data-[focus-within]:border-ring data-[disabled]:opacity-50 data-[focus-within]:outline-none data-[focus-within]:ring-[3px] data-[focus-within]:ring-ring/20">
                <Button
                  slot="decrement"
                  className="-ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-lg border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Minus size={16} strokeWidth={2} aria-hidden="true" />
                </Button>
                <Input
                  className="w-full grow bg-background px-3 py-2 text-center tabular-nums text-foreground focus:outline-none"
                />
                <Button
                  slot="increment"
                  className="-me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-lg border border-input bg-background text-sm text-muted-foreground/80 transition-shadow hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Plus size={16} strokeWidth={2} aria-hidden="true" />
                </Button>
              </Group>
            </div>
          </NumberField>
        </div>

        {/* Résultat */}
        <div className="pt-6 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Total</span>
            <span className="text-3xl font-light text-gray-800">{euros} €</span>
          </div>
        </div>

        {/* Raccourcis */}
        <div className="grid grid-cols-4 gap-3 pt-6">
          {[10, 50, 100, 500].map((value) => (
            <Button
              key={value}
              type="button"
              onClick={() => setMinutes(value)}
              className={`py-2 px-1 border rounded-md text-sm font-medium transition-all ${
                minutes === value
                  ? "border-black bg-black text-white"
                  : "border-gray-200 text-gray-700 hover:border-gray-300"
              }`}
            >
              {value} min
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}
