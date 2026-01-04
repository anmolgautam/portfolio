import { ArrowUpRight, Github, ExternalLink, Database, Cpu, Network } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "SuperCoder 2.0 : Autonomous Multi-Agent Programming System",
    description:
      "An autonomous multi-agent coding system that reasons, plans, navigates repositories, and executes code changes. SuperCoder 2.0 achieved 33% on SWE-Bench-Lite, outperforming several open coding agents and approaching proprietary systems.",
    image: "/projects/Supercoder.png",
    highlights: [
      "Multi-agent planning & execution loops",
      "Repository-level code navigation",
      "Custom RAG pipelines for code context",
      "Evaluated on SWE-Bench-Lite",
    ],
    links: [
      {
        label: "Research Paper (arXiv)",
        href: "https://arxiv.org/abs/2409.11190",
        icon: ExternalLink,
      },
      {
        label: "Technical Blog",
        href: "https://superagi.com/supercoder-benchmarks-in-swe-bench-lite/",
        icon: ExternalLink,
      },
    ],
    tags: ["Multi-Agent Systems", "Autonomous Coding", "RAG", "LLM Evaluation"],
  },
  {
    title: "SAM-7B : Small Agentic Model (Open-Source LLM)",
    description:
      "SAM is an open-source 7B parameter agentic language model fine-tuned for reasoning and task execution using explanation-trace supervision. Designed for efficiency, controllability, and strong reasoning performance in agent workflows.",
    image: "/projects/SAM.png",
    highlights: [
      "LoRA-based fine-tuning & PEFT",
      "Explanation-trace dataset construction",
      "Agent-centric instruction tuning",
      "3k+ HuggingFace downloads",
    ],
    links: [
      {
        label: "HuggingFace Model",
        href: "https://huggingface.co/SuperAGI/SAM",
        icon: ExternalLink,
      },
      {
        label: "Dataset",
        href: "https://huggingface.co/datasets/SuperAGI/SAM_Dataset",
        icon: Database,
      },
      {
        label: "Launch Blog",
        href: "https://superagi.com/introducing-sam-small-agentic-model/",
        icon: ExternalLink,
      },
    ],
    tags: ["Open-Source LLMs", "LoRA / PEFT", "Agentic Models", "Alignment"],
  },
];

const internalSystems = [
  {
    title: "Enterprise Text-to-SQL & RAG Platform",
    description:
      "A production conversational AI system translating natural-language queries into SQL and retrieval workflows over structured and unstructured enterprise data.",
    icon: Database,
    bullets: [
      "Schema-aware query generation",
      "Latency vs correctness tradeoffs",
      "Evaluation & monitoring in production",
    ],
  },
  {
    title: "LLM Inference & Optimization Platform",
    description:
      "GPU-backed inference infrastructure built using vLLM and SGLang, with autoscaling and optimization pipelines for cost-efficient deployment.",
    icon: Cpu,
    bullets: [
      "Quantization & pruning pipelines",
      "High-throughput GPU inference",
      "Autoscaling with Ray",
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-20">
          <span className="text-4xl md:text-5xl mt-4 mb-6 animate-fade-in animation-delay-100">
            Selected Systems & Research
          </span>
          <br /><br />
          {/* <h2 className="font-serif italic font-normal text-white">
            Systems I have built that
            <span className="font-serif italic font-normal text-white">
              {" "}
              ship to the real world.
            </span>
          </h2> */}
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A curated selection of applied research and production AI systems
            spanning autonomous agents, open-source LLMs, enterprise RAG, and
            large-scale inference infrastructure.
          </p>
        </div>

        {/* Main Research Projects */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              {/* Image */}
              <div className="glass rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.highlights.map((h, i) => (
                    <li key={i}>• {h}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Internal Systems */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Other Production Systems
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {internalSystems.map((sys, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <sys.icon className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-semibold">{sys.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {sys.description}
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {sys.bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};
