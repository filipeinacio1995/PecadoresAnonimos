import { motion } from "framer-motion";
import heroImage from "@/assets/hero-fishing.jpg";
import { Anchor } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-fog)" }}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Anchor className="mx-auto mb-6 h-10 w-10 text-primary opacity-70" />
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-7xl md:text-8xl">
            Os pecadores
            <br />
            <span className="italic text-primary">Anónimos</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg font-body text-lg font-light text-muted-foreground sm:text-xl">
            Onde a água guarda os teus segredos e a captura conta a tua história.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="inline-block rounded-full border border-primary/30 px-8 py-3 font-body text-sm font-medium uppercase tracking-widest text-primary transition-all hover:border-primary hover:shadow-[var(--shadow-glow)]"
          >
            Entra nas Águas
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
