import { VNode } from "preact";

interface SectionProps {
  title: string;
  children: VNode | VNode[];
}

export const Section = ({ title, children }: SectionProps) => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold text-accent-500 border-b-2 border-accent-800 pb-2 mb-6">
      {title}
    </h2>
    {children}
  </section>
);
