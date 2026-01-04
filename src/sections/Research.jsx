import { ExternalLink } from "lucide-react";

const papers = [
  {
    title:
      "SuperCoder 2.0: Exploring the Feasibility of LLMs as Autonomous Programmers",
    venue: "arXiv",
    year: "2024",
    description:
      "A technical study on multi-agent autonomous code generation and navigation systems, evaluated on SWE-Bench-Lite. Explores how LLM-driven agents can reason, plan, and execute code-level tasks.",
    link: "https://arxiv.org/abs/2409.11190",
  },
  {
    title: "Veagle: Advancements in Multimodal Representation Learning",
    venue: "arXiv",
    year: "2024",
    description:
      "Research on multimodal representation learning, focusing on improved alignment across vision and language modalities.",
    link: "https://arxiv.org/abs/2403.08773",
  },
  {
    title:
      "SAU-NET: Scale-Aware Polyp Segmentation using Encoder–Decoder Networks",
    venue: "IEEE",
    year: "2022",
    description:
      "Introduces a scale-aware segmentation architecture for biomedical imaging, achieving state-of-the-art performance and outperforming UNet and DeepLab variants.",
    link: "https://ieeexplore.ieee.org/abstract/document/9864338",
  },
  {
    title: "ED-NET: Educational Teaching Video Classification Network",
    venue: "Springer",
    year: "2022",
    description:
      "Proposes a deep learning architecture for classifying educational videos, combining CNN and RNN-based temporal modeling.",
    link: "https://link.springer.com/chapter/10.1007/978-981-19-7867-8_12",
  },
];

export const Research = () => {
  return (
    <section id="research" className="py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,80,80,0.08),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Research
          </span>
          <h2 className="text-4xl md:text-5xl mt-4 mb-6 animate-fade-in animation-delay-100">
            Research that informs
            <span className="block font-serif italic font-normal text-white mt-2">
              real-world AI systems.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Alongside building production AI platforms, I actively publish and
            experiment on problems across LLMs, multimodal learning, and
            computer vision. My research focuses on ideas that translate into
            practical, deployable systems.
          </p>
        </div>

        {/* Papers */}
        <div className="grid md:grid-cols-2 gap-8">
          {papers.map((paper, idx) => (
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

              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-medium">
                    {paper.venue} • {paper.year}
                  </span>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-lg font-semibold">{paper.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {paper.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
