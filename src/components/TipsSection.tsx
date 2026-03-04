import { motion } from "framer-motion";
import { Compass, CloudRain, Moon, Waves } from "lucide-react";

const tips = [
  {
    icon: Moon,
    title: "Pesca ao Crepúsculo",
    body: "As melhores capturas acontecem quando o mundo adormece. Entre o primeiro brilho da manhã e o último suspiro do dia, a água ganha vida — e os peixes também.",
  },
  {
    icon: CloudRain,
    title: "Abraça a Chuva",
    body: "A chuva leve desperta as águas. Insetos caem na superfície, a água ganha movimento e os peixes aproximam-se. Aquilo que muitos evitam é onde nós encontramos as melhores oportunidades.",
  },
  {
    icon: Waves,
    title: "Lê a Corrente",
    body: "Onde a água rápida encontra a calma, ali vivem os peixes. Aprende a observar as correntes, as linhas invisíveis do rio, e cada lançamento terá propósito.",
  },
  {
    icon: Compass,
    title: "Conhece as Tuas Águas",
    body: "Antes de lançar a linha, aprende a observar. A temperatura, a profundidade, as estruturas submersas — tudo conta uma história. Quando compreendes a água, os peixes encontram-te.",
  },
];

const TipsSection = () => {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-5xl">
          Do Terreno
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-muted-foreground">
          Sabedoria conquistada com esforço, transmitida através de acenos silenciosos e histórias partilhadas à volta da fogueira.
        </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {tips.map((tip, i) => (
            <motion.article
              key={tip.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex gap-5 rounded-lg border border-border bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-accent/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                <tip.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {tip.title}
                </h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-muted-foreground">
                  {tip.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
