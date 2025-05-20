"use client";

import WorkflowSchema from "@/components/worflow_schema";

export const Features = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-accent/20">
            <div className="flex gap-2 flex-col items-center text-center">
                <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
                    Créez des workflows intelligents.
                </h2>
                <p className="text-lg max-w-xl leading-relaxed tracking-tight text-muted-foreground">
                   Crée des scénarios intelligents où chaque réponse oriente l’appel vers la bonne suite logique, sans jamais perdre le fil.
                </p>
            </div>


            <div className="p-4 rounded-xl">
                <WorkflowSchema
                    badgeTexts={{
                        first: "DIRE",
                        second: "CONDITION",
                        third: "ACTION",
                        fourth: "TRANSITION"
                    }}
                    title="Un enchaînement fluide de questions et d’actions."
                />
            </div>
        </div>
    );
};
