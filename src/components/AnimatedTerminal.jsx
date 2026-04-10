import { useState, useEffect, useRef } from "react";

const projects = [
  {
    comment: "# Dendrux — Open-Source Agent Runtime",
    lines: [
      { key: "class", value: "Dendrux:" },
      { key: "    type", value: '= "agent_runtime"' },
      { key: "    tools", value: '= ["pause_resume", "persistence", "observability"]' },
      { key: "    bridge", value: '= "human-in-the-loop"' },
      { key: "    stack", value: '= "FastAPI + SSE"' },
    ],
  },
  {
    comment: "# SuperCoder 2.0 — Autonomous Coding Agent",
    lines: [
      { key: "class", value: "SuperCoder:" },
      { key: "    agents", value: '= ["planner", "navigator", "executor"]' },
      { key: "    benchmark", value: '= "SWE-Bench-Lite → 33%"' },
      { key: "    pipeline", value: '= "multi-agent + RAG"' },
    ],
  },
  {
    comment: "# SAM-7B — Small Agentic Model",
    lines: [
      { key: "class", value: "SAM:" },
      { key: "    params", value: '= "7B"' },
      { key: "    method", value: '= "LoRA + explanation-trace"' },
      { key: "    downloads", value: '= "3k+ on HuggingFace"' },
    ],
  },
  {
    comment: "# Enterprise Text-to-SQL & RAG",
    lines: [
      { key: "class", value: "TextToSQL:" },
      { key: "    queries", value: '= "natural-language → SQL"' },
      { key: "    data", value: '= ["structured", "unstructured"]' },
      { key: "    focus", value: '= "latency vs correctness"' },
    ],
  },
  {
    comment: "# LLM Inference Platform",
    lines: [
      { key: "class", value: "InferencePlatform:" },
      { key: "    engines", value: '= ["vLLM", "SGLang"]' },
      { key: "    optim", value: '= ["quantization", "pruning"]' },
      { key: "    scale", value: '= "GPU autoscaling"' },
    ],
  },
];

const TYPING_SPEED = 30;
const LINE_PAUSE = 150;
const PROJECT_DISPLAY_TIME = 2500;
const FADE_DURATION = 400;

export const AnimatedTerminal = () => {
  const [projectIdx, setProjectIdx] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | holding | fading
  const [opacity, setOpacity] = useState(1);
  const timerRef = useRef(null);

  const project = projects[projectIdx];

  // Build the full text lines for the current project
  const fullLines = [
    project.comment,
    ...project.lines.map((l) => `${l.key} ${l.value}`),
  ];

  // Typing effect
  useEffect(() => {
    if (phase !== "typing") return;

    if (currentLineIdx >= fullLines.length) {
      // All lines typed — hold for a bit then fade
      timerRef.current = setTimeout(() => {
        setPhase("fading");
        setOpacity(0);
      }, PROJECT_DISPLAY_TIME);
      return () => clearTimeout(timerRef.current);
    }

    const currentFullLine = fullLines[currentLineIdx];

    if (currentCharIdx < currentFullLine.length) {
      // Type next character
      timerRef.current = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLineIdx] = currentFullLine.slice(0, currentCharIdx + 1);
          return updated;
        });
        setCurrentCharIdx((c) => c + 1);
      }, TYPING_SPEED);
    } else {
      // Line complete — move to next line
      timerRef.current = setTimeout(() => {
        setCurrentLineIdx((l) => l + 1);
        setCurrentCharIdx(0);
        setDisplayedLines((prev) => [...prev, ""]);
      }, LINE_PAUSE);
    }

    return () => clearTimeout(timerRef.current);
  }, [phase, currentLineIdx, currentCharIdx, fullLines]);

  // After fade out, switch to next project
  useEffect(() => {
    if (phase !== "fading") return;

    timerRef.current = setTimeout(() => {
      const nextIdx = (projectIdx + 1) % projects.length;
      setProjectIdx(nextIdx);
      setDisplayedLines([""]);
      setCurrentLineIdx(0);
      setCurrentCharIdx(0);
      setOpacity(1);
      setPhase("typing");
    }, FADE_DURATION);

    return () => clearTimeout(timerRef.current);
  }, [phase, projectIdx]);

  // Initialize first line placeholder
  useEffect(() => {
    setDisplayedLines([""]);
  }, []);

  const isTypingDone = currentLineIdx >= fullLines.length;

  return (
    <div className="w-full font-mono text-sm">
      {/* Terminal window */}
      <div className="rounded-xl overflow-hidden border border-border/50 bg-[#1a2428]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#151d21] border-b border-border/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-primary/80" />
            <div className="w-3 h-3 rounded-full bg-highlight/60" />
            <div className="w-3 h-3 rounded-full bg-secondary/60" />
          </div>
          <span className="text-xs text-muted-foreground ml-2">projects.py</span>
        </div>

        {/* Code area */}
        <div
          className="p-5 min-h-[220px] flex flex-col justify-start"
          style={{
            opacity,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
          }}
        >
          {displayedLines.map((line, idx) => (
            <div key={`${projectIdx}-${idx}`} className="leading-relaxed">
              {idx === 0 ? (
                // Comment line
                <span className="text-muted-foreground/60">{line}</span>
              ) : (
                <span>
                  <span className="text-primary">
                    {line.split(" = ")[0]?.split(" ").slice(0, -1).join(" ")}{" "}
                  </span>
                  {line.includes("class") && !line.includes("=") ? (
                    // class ClassName:
                    <>
                      <span className="text-primary">class </span>
                      <span className="text-secondary">{line.replace("class ", "")}</span>
                    </>
                  ) : line.includes(" = ") ? (
                    // key = value
                    <>
                      <span className="text-foreground/80">
                        {line.split(" = ")[0]}
                      </span>
                      <span className="text-muted-foreground"> = </span>
                      <span className="text-secondary">
                        {line.split(" = ").slice(1).join(" = ")}
                      </span>
                    </>
                  ) : (
                    <span className="text-foreground/80">{line}</span>
                  )}
                </span>
              )}
              {/* Blinking cursor on current line */}
              {idx === displayedLines.length - 1 && !isTypingDone && (
                <span className="inline-block w-2 h-4 bg-primary ml-0.5 align-middle animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 pb-3">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === projectIdx
                  ? "bg-primary w-4"
                  : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
