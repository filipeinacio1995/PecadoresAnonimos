import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageSquare, User } from "lucide-react";

interface Story {
  id: string;
  alias: string;
  body: string;
  timestamp: number;
}

const STORAGE_KEY = "anon-fish-stories";

const getStories = (): Story[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveStories = (stories: Story[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stories));
};

const timeAgo = (ts: number) => {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
};

const defaultStories: Story[] = [
  {
    id: "default-1",
    alias: "Cana Silenciosa",
    body: "Apanhei um robalo de 6 kg às 4 da manhã num lago cujo nome nunca vou revelar. O nevoeiro era tão denso que mal conseguia ver a minha linha. Foi a melhor manhã da minha vida.",
    timestamp: Date.now() - 86400000 * 3,
  },
  {
    id: "default-2",
    alias: "Lançador Fantasma",
    body: "Pesco no mesmo ribeiro há 20 anos. Na terça-feira passada, tirei da água um isco que tinha perdido ali em 2009. O rio lembra-se.",
    timestamp: Date.now() - 86400000 * 7,
  },
  {
    id: "default-3",
    alias: "Pescador da Meia-Noite",
    body: "Há um sítio onde dois rios se encontram debaixo de uma ponte antiga. Ninguém vai lá. As trutas são do tamanho do teu braço. É tudo o que vou dizer.",
    timestamp: Date.now() - 86400000 * 14,
  },
];

const StoriesSection = () => {
  const [stories, setStories] = useState<Story[]>(() => {
    const saved = getStories();
    return saved.length > 0 ? saved : defaultStories;
  });
  const [alias, setAlias] = useState("");
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim()) return;

    const newStory: Story = {
      id: crypto.randomUUID(),
      alias: alias.trim() || "Anonymous Angler",
      body: body.trim(),
      timestamp: Date.now(),
    };

    const updated = [newStory, ...stories];
    setStories(updated);
    saveStories(updated);
    setAlias("");
    setBody("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="stories" className="bg-background pb-16 sm:pt-12">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-5xl">
            Histórias Sussurradas
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-muted-foreground">
            Cada onda guarda um segredo, cada linha lançada pode revelar uma nova memória.
          </p>
        </motion.div>
        {/* Stories Feed */}
        <div className="mx-auto max-w-2xl space-y-4">
          <AnimatePresence>
            {stories.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-lg border border-border bg-card/30 p-5 backdrop-blur-sm"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold italic text-accent">
                    {story.alias}
                  </span>
                  <span className="font-body text-xs text-muted-foreground/50">
                    {timeAgo(story.timestamp)}
                  </span>
                </div>
                <p className="font-body text-sm leading-relaxed text-secondary-foreground">
                  {story.body}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
