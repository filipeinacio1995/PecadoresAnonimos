import { Anchor } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-card/30 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center">
        <Anchor className="h-6 w-6 text-primary opacity-60" />
        <p className="font-display text-lg italic text-muted-foreground">
          “Dá um peixe a um homem e ele come por um dia. Ensina-o a pescar e nunca mais o vês aos fins de semana.”
        </p>
        <p className="font-body text-xs uppercase tracking-widest text-muted-foreground/60">
          © 2026 O Pescador Anónimo Filipe Amorim · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
