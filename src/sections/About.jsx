import { Cpu, Network, Database, FlaskConical } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Production LLM Systems",
    description:
      "Designing, optimizing, and deploying large-scale LLM pipelines with GPU-backed inference, pruning, and quantization.",
  },
  {
    icon: Database,
    title: "Enterprise RAG & Text-to-SQL",
    description:
      "Building reliable retrieval and structured-query systems used in real enterprise workflows.",
  },
  {
    icon: Network,
    title: "Agentic Architectures",
    description:
      "Developing multi-agent platforms with tool orchestration, planning, and execution in production environments.",
  },
  {
    icon: FlaskConical,
    title: "Applied Research → Production",
    description:
      "Translating research ideas into shipped systems, backed by evaluation, experimentation, and peer-reviewed work.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,80,80,0.08),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl leading-tight animate-fade-in animation-delay-100">
              Building the future,
              <span className="block font-serif italic font-normal text-white mt-2">
                from applied research to production AI systems.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a Lead Applied Scientist with 4+ years of experience
                architecting and shipping production-grade AI systems - from
                multi-agent platforms and Text-to-SQL engines to enterprise RAG
                and real-time multimodal solutions.
              </p>
              <p>
                My work sits at the intersection of applied research,
                large-scale system design, and real-world deployment. I have
                built and owned enterprise GenAI platforms including
                Text-to-SQL, RAG pipelines, GPU-backed inference systems, and
                multi-agent architectures running in production.
              </p>
              <p>
                Across roles at 8bit.ai, SuperAGI, Oracle, and NVIDIA, I have taken
                systems end-to-end: from research and experimentation, through
                model fine-tuning and alignment (SFT, DPO, GRPO), to deployment on scalable
                infrastructure with inference optimization using vLLM and
                SGLang.
              </p>
              <p>
                Alongside industry work, I have 6 published papers
                across IEEE, Springer, and arXiv spanning LLMs, multimodal learning,
                and computer vision. My master’s research at NIT Meghalaya,
                completed in collaboration with NVIDIA, received the Institute
                Best Thesis Award and achieved state-of-the-art results.
              </p>
            </div>

            {/* Education Highlight */}
            <div className="flex items-center gap-4 glass rounded-xl px-5 py-4 animate-fade-in animation-delay-250">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary text-lg">🎓</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  M.Tech CSE - NIT Meghalaya | Gold Medalist | 10.0 CGPA
                </p>
                <p className="text-xs text-muted-foreground">
                  Institute Best Master’s Thesis Award - Region of Interest Segmentation in Biomedical Images
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="relative glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <div className="absolute -inset-1 rounded-2xl bg-primary/20 blur-lg opacity-60 pointer-events-none" />
              <p className="relative z-10 text-lg font-medium italic text-foreground">
                “I care deeply about systems that actually ship balancing
                performance, reliability, and cost and about building AI
                products that move beyond demos into real impact.”
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group relative glass p-6 rounded-2xl 
                  transition-all duration-300 
                  hover:-translate-y-1 hover:shadow-2xl
                  hover:shadow-primary/20
                  animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(255,80,80,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 
                    flex items-center justify-center mb-4 
                    transition-colors duration-300
                    group-hover:bg-primary/20">
                    <item.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
