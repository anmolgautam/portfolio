const experiences = [
  {
    period: "Oct 2024 - Present",
    role: "Lead Applied Scientist (AI/ML)",
    company: "8bit.ai",
    description: [
      "Architected Neutrino, a multi-agent AI platform powering enterprise search, Text-to-SQL, and workflow automation with human-in-the-loop execution and multi-LLM orchestration, deployed across 5 major ISV partners.",
      "Fine-tuned domain-specific LLMs using LoRA, DoRA, PEFT, and alignment techniques (DPO, GRPO).",
      "Built a multi-schema Text-to-SQL engine using agentic ReAct workflows across PostgreSQL and Trino.",
      "Designed end-to-end enterprise search spanning RAG ingestion, hybrid retrieval, knowledge-graph augmentation, PII tagging, and multi-tenant data discovery.",
      "Optimized inference latency and cost using vLLM and SGLang, and delivered real-time multimodal solutions including voice and sign-language AI.",
    ],
    technologies: [
      "Multi-Agent Systems",
      "Text-to-SQL",
      "RAG",
      "vLLM",
      "SGLang",
      "FastAPI",
      "SSE",
      "LoRA",
      "DPO",
      "GRPO",
      "PostgreSQL",
      "Trino",
      "Azure",
    ],
    current: true,
  },
  {
    period: "Nov 2023 - Oct 2024",
    role: "Applied Scientist (AI/ML)",
    company: "SuperAGI",
    description: [
      "Built Text-to-SQL and RAG-based conversational multi-agent systems for SuperSales.",
      "Developed SuperCoder 2.0, an autonomous code navigation and issue-resolution system achieving 33% on SWE-Bench-Lite.",
      "Architected a fully autonomous multi-agent platform using open-source and closed-source LLMs with ReAct-style execution and Planner-Orchestration patterns, taking projects from PoC to AWS production.",
      "Developed SAM-7B, an instruction-tuned Mistral-7B model achieving GPT-3.5-comparable performance and outperforming Orca on GSM8K and ARC.",
    ],
    technologies: [
      "Multi-Agent Systems",
      "RAG",
      "Text-to-SQL",
      "Open-Source LLMs",
      "SFT",
      "DPO",
      "LoRA / PEFT",
      "AWS",
    ],
    current: false,
  },
  {
    period: "Aug 2022 - Oct 2023",
    role: "Associate Consultant",
    company: "Oracle",
    description: [
      "Built document AI and information extraction pipelines using OCI Document Understanding and EasyOCR, improving NER and key-value extraction by 7%.",
      "Developed RAG-based question answering and computer vision systems using Falcon, Llama, ChromaDB, TensorFlow, and transfer learning.",
      "Built a face recognition pipeline using transfer learning that improved performance by 37%.",
    ],
    technologies: [
      "RAG",
      "OCR",
      "NER",
      "Falcon",
      "LLaMA",
      "ChromaDB",
      "TensorFlow",
      "OCI",
    ],
    current: false,
  },
  {
    period: "May 2021 - Apr 2022",
    role: "Research Intern",
    company: "NVIDIA",
    description: [
      "Worked on NLP and computer vision systems using NVIDIA NeMo, HuggingFace, and transfer learning.",
      "Built English-to-Hindi machine translation, object detection, and image segmentation pipelines.",
    ],
    technologies: [
      "NVIDIA NeMo",
      "Machine Translation",
      "Computer Vision",
      "Transformers",
      "PyTorch",
    ],
    current: false,
  },
];

// Group experiences into pairs for the open-book layout
const pairs = [];
for (let i = 0; i < experiences.length; i += 2) {
  pairs.push([experiences[i], experiences[i + 1] || null]);
}

const ExperienceCard = ({ exp, align }) => {
  const isRight = align === "right";

  return (
    <div
      className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 ${
        isRight ? "text-left" : "text-right"
      }`}
    >
      <span className="text-sm text-primary font-medium">{exp.period}</span>
      <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
      <p className="text-muted-foreground">{exp.company}</p>
      {exp.current && (
        <span className="inline-flex items-center gap-1.5 mt-1 text-xs text-green-400">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          Current
        </span>
      )}

      <ul className="text-sm text-muted-foreground mt-4 space-y-2 text-left">
        {exp.description.map((point, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div
        className={`flex flex-wrap gap-2 mt-4 ${
          isRight ? "justify-start" : "justify-end"
        }`}
      >
        {exp.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/30"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-primary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-primary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to Lead
            Applied Scientist leading teams and building products at scale.
          </p>
        </div>

        {/* Open Book Timeline */}
        <div className="space-y-16">
          {pairs.map((pair, pairIdx) => (
            <div key={pairIdx} className="relative">
              {/* Center spine */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10 timeline-glow" />

              <div
                className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0 animate-fade-in"
                style={{ animationDelay: `${(pairIdx + 1) * 200}ms` }}
              >
                {/* Left page */}
                <div className="md:pr-10">
                  <ExperienceCard exp={pair[0]} align="left" />
                </div>

                {/* Spine dot */}
                <div className="hidden md:flex flex-col items-center justify-start pt-6">
                  <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-background z-10 relative">
                    {pair[0].current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    )}
                  </div>
                </div>

                {/* Right page */}
                <div className="md:pl-10">
                  {pair[1] ? (
                    <ExperienceCard exp={pair[1]} align="right" />
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
