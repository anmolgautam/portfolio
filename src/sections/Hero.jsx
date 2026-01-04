import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  X,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  // AI / LLM Systems
  "Large Language Models (LLMs)",
  "Open-Source LLM Training",
  "Fine-Tuning (SFT, DPO, ORPO)",
  "Model Pruning & Quantization",
  "vLLM",
  "SGLang",
  "Hugging Face Transformers",
  "LoRA / PEFT",
  "RAG Systems",
  "Text-to-SQL",
  "Multi-Agent Systems",
  "LangChain",
  "LangGraph",

  // Backend & Systems
  "FastAPI",
  "Python",
  "Ray",
  "Distributed Systems",
  "GPU Inference",
  "Serverless Inference",
  "Node.js",
  "GraphQL",

  // Data & Storage
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Vector Databases",
  "ETL Pipelines",

  // Infra & DevOps
  "Docker",
  "AWS",
  "CI/CD",
  "GitHub Actions",
  "Kubernetes (Basics)",

  // Frontend (Supporting)
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",

  // Tooling
  "Git",
  "Prisma",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Lead Applied Scientist (AI/ML) • Production AI & LLM Systems
                Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building{" "}
                <span className="text-primary glow-text">
                  {" "}
                  production-grade AI and LLM Systems
                </span>
                {/* <br /> */} that scale from research to
                {/* <br /> */}{" "}
                <span className="font-serif italic font-normal text-white">
                  real-world impact.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I am Anmol Gautam a Lead Applied Scientist specializing in
                large scale GenAI systems. I build, optimize, and deploy LLM
                pipelines including fine-tuning, pruning, quantization, and
                GPU backed inference for enterprise Text to SQL, RAG, and
                agentic platforms.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3 animate-fade-in animation-delay-250">
              {/* {[
                "Open-source LLM training & alignment",
                "Production Text-to-SQL & RAG",
                "GPU inference with vLLM & SGLang",
                "Multi-agent platforms in production",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex column" />
                  <p className="text-foreground/90">{point}</p>
                </div>
              ))} */}
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl">
                <li>Open-source LLM training & alignment</li>
                <li>Production Text-to-SQL & RAG</li>
                <li>GPU inference with vLLM & SGLang</li>
                <li>Multi-agent platforms in production</li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" href="#contact">
                Discuss a project <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <a
                  href="/Anmol_Gautam_resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            {/* <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/anmolgautam28/",
                },
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  target="_blank"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div> */}
          </div>
          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-12 glow-border">
                <img
                  src="/profile-photo.png"
                  alt="Anmol Gautam"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                {/* <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Contact for Collaboration
                    </span>
                  </div>
                </div> */}
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-xl font-bold text-primary">
                    Enterprise
                    <span> AI Systems</span>
                  </div>
                  {/* <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div> */}
                </div>

                {/* Social Links BELOW photo */}
                <div className="mt-3 flex flex-col items-center gap-3 animate-fade-in animation-delay-500">
                  {/* <span className="text-xs text-muted-foreground">
                    Find me on
                  </span> */}
                  <div className="relative inline-flex items-center justify-center">
                    {/* Glow */}
                    <div
                      className="absolute -inset-1 rounded-full 
    bg-primary/40 blur-md opacity-70 
    animate-pulse"
                    />

                    {/* Label */}
                    <span
                      className="relative z-10 px-3 py-1 text-xs 
    text-muted-foreground 
    rounded-full glass border border-primary/50"
                    >
                      Find me on
                    </span>
                  </div>
                  <div className="flex gap-4">
                    {[
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/anmolgautam28/",
                      },
                      {
                        icon: Github,
                        href: "https://github.com/anmolgautam",
                      },
                      {
                        icon: X,
                        href: "https://x.com/anmolgautam28",
                      },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        className="p-2 rounded-full glass 
              hover:bg-primary/10 hover:text-primary 
              transition-all duration-300"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
