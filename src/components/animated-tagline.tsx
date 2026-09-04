interface AnimatedTaglineProps { text: string; className?: string; }

export function AnimatedTagline({ text, className }: AnimatedTaglineProps) {
  return <p className={className}>{text}</p>;
}
