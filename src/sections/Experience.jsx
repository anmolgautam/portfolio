const experiences = [
  {
    period: "Oct 2024 — Present",
    role: "Lead Applied Scientist (AI/ML)",
    company: "8bit.ai",
    description:
      "Leading the design and development of production-grade GenAI systems, including a multi-agent workflow automation platform combining RAG, Text-to-SQL, and tool-based information retrieval. Built GPU-backed inference infrastructure using vLLM and Ray, and developed model pruning and quantization pipelines for high-throughput, low-latency inference.",
    technologies: [
      "LLMs",
      "vLLM",
      "Ray",
      "Text-to-SQL",
      "RAG",
      "Multi-Agent Systems",
      "Model Quantization",
      "FastAPI",
      "Python",
      "Azure",
    ],
    current: true,
  },
  {
    period: "Nov 2023 — Oct 2024",
    role: "Applied Scientist (AI/ML)",
    company: "SuperAGI",
    description:
      "Built enterprise-grade conversational AI systems using Text-to-SQL and RAG, and developed fully autonomous multi-agent platforms from scratch. Led applied research and productionization of SuperCoder 2.0, achieving 33% on SWE-Bench-Lite. Owned projects end-to-end, from research and experimentation to deployment on AWS.",
    technologies: [
      "Multi-Agent Systems",
      "RAG",
      "Text-to-SQL",
      "Open-Source LLMs",
      "SFT",
      "DPO",
      "AWS",
    ],
    current: false,
  },
  {
    period: "Aug 2022 — Oct 2023",
    role: "Associate Consultant (AI/ML)",
    company: "Oracle",
    description:
      "Developed enterprise AI solutions including document understanding, closed-domain question answering, and search systems using RAG. Fine-tuned OCR and NER models, built vector-based retrieval pipelines, and deployed AI workloads on OCI infrastructure.",
    technologies: [
      "RAG",
      "OCR",
      "NER",
      "Falcon",
      "LLaMA",
      "Vector Databases",
      "OCI",
    ],
    current: false,
  },
  {
    period: "May 2021 — Apr 2022",
    role: "Research Intern",
    company: "NVIDIA",
    description:
      "Conducted applied research in NLP and computer vision. Built English-to-Hindi machine translation systems using NVIDIA NeMo and Hugging Face models, and worked on object detection and image segmentation pipelines using transfer learning.",
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
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
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
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};