import { motion } from "framer-motion";
import { Eye, Fish, Shield } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Anónimato",
    description: "Sem nomes, sem fama. Apenas tu, a cana e as águas.",
  },
  {
    icon: Fish,
    title: "Autênticas",
    description: "Real stories from real waters. No filters, no exaggeration.",
  },
  {
    icon: Eye,
    title: "Observadores",
    description: "Lemos a água, o vento e o silêncio entre as mordidas.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32"
      style={{ background: "var(--gradient-ocean)" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-5xl">
            Quem somos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-muted-foreground">
            Uma irmandade de pescadores que acredita que as melhores histórias de pesca são aquelas sussurradas ao amanhecer.
            A identidade fica em terra — aqui, apenas a arte importa.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-[var(--shadow-glow)]"
            >
              <pillar.icon className="mb-4 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <h3 className="font-display text-xl font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
