import { VNode } from "preact";

interface SectionProps {
  title: string;
  children: VNode | VNode[];
}

export const Section = ({ title, children }: SectionProps) => (
  <section className="mb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-accent-500 pb-2 mb-6 relative inline-block">
      {title}
      <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-accent-500 to-cyan-400 rounded-full"></span>
    </h2>
    {children}
  </section>
);
