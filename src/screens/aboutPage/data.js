import { Shield, Cpu, Layers, Code2, Zap, Target } from "lucide-react";

export const stats = [
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "+", label: "Years Building" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 10, suffix: "+", label: "Tech Stacks" },
];

export const principles = [
  {
    icon: Shield,
    title: "Security-First",
    text: "Every system I build has security baked in from day one — not patched on later.",
    accent: "#a78bfa",
    num: "01",
  },
  {
    icon: Cpu,
    title: "Performance-Driven",
    text: "Engineered for speed, efficiency, and scalability under real-world load.",
    accent: "#60a5fa",
    num: "02",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    text: "Readable, maintainable, elegantly structured — code your future team will thank you for.",
    accent: "#34d399",
    num: "03",
  },
  {
    icon: Target,
    title: "Precision Delivery",
    text: "No scope creep. I define it, build it, ship it — on standard, on time.",
    accent: "#fbbf24",
    num: "04",
  },
];

export const processSteps = [
  { num: "01", title: "Understand", icon: Target, desc: "Deep-dive into requirements, constraints, and goals to define what success looks like." },
  { num: "02", title: "Architect", icon: Layers, desc: "Design scalable, maintainable systems with clear boundaries and future-proof foundations." },
  { num: "03", title: "Engineer", icon: Code2, desc: "Build with precision — clean code, thorough testing, and performance optimization." },
  { num: "04", title: "Deliver", icon: Zap, desc: "Ship production-ready solutions with documentation and seamless handoff." },
];

export const STORY_TEXT =
  "I operate at a standard most developers overlook — treating architecture as the foundation that guides every decision, engineering performance into the core of every system, and embedding security as an integral part of the design rather than an afterthought. My work is not built around quick fixes or temporary solutions, but around delivering production-grade systems that scale efficiently, handle real-world pressure, and maintain reliability long after deployment.";
