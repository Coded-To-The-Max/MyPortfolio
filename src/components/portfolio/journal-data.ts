export type JournalSection = {
  heading: string;
  paragraphs: string[];
  sources?: { title: string; url: string }[];
};
export type JournalEntry = {
  id: string; title: string; category: string; cover: string; excerpt: string;
  sections: JournalSection[];
};

export const journalEntries: JournalEntry[] = [
  {
    id: 'model-collapse', title: 'Model collapse and the recursive internet',
    category: 'Training data', cover: 'Recursion',
    excerpt: 'What happens when AI increasingly learns from its own reflection?',
    sections: [
      {
        heading: 'Fluency can hide deterioration',
        paragraphs: [
          'I’m fascinated by the possibility that an internet filled with AI-generated content could gradually become a less useful place for AI to learn. “AI cannibalism” is the provocative description; model collapse is the more precise concern. When successive models repeatedly replace original observations with generated samples, they can lose fidelity to the world those observations represented.',
          'The subtle part is what disappears first. Research has shown that rare patterns can be lost before common ones. A system might remain articulate while becoming less capable of representing unusual cases. That makes me wonder how much deterioration we would miss if we measured only average performance.',
        ],
        sources: [{ title: 'Model collapse research · Nature, 2024', url: 'https://www.nature.com/articles/s41586-024-07566-y' }],
      },
      {
        heading: 'Synthetic does not automatically mean worse',
        paragraphs: [
          'There is an encouraging counterpoint: experiments that retained original data while accumulating synthetic examples avoided collapse in the settings tested. The problem is more nuanced than “AI should never train on AI.” Data composition and independent verification matter.',
          'What excites me is the engineering challenge: preserving reliable sources, tracking provenance, and testing whether uncommon perspectives survive. I want to understand how a model can learn productively from generated material without turning its own assumptions into its entire information environment. More content is easy; maintaining a connection to reality is the interesting part.',
        ],
        sources: [{ title: 'Accumulating real and synthetic data · Gerstgrasser et al.', url: 'https://arxiv.org/abs/2404.01413' }],
      },
    ],
  },
  {
    id: 'ai-data-frontier', title: 'Beyond the data frontier',
    category: 'The future of AI', cover: 'Frontier',
    excerpt: 'Will the next breakthrough come from more data, or better ways of creating evidence?',
    sections: [
      {
        heading: 'What would a data ceiling actually mean?',
        paragraphs: [
          'I keep returning to a question: what happens when scaling AI requires more high-quality text than the public internet can supply? Epoch AI’s 2024 analysis projected that then-current trends could exhaust the available stock of human-generated public text between 2026 and 2032. That is a conditional forecast, not an expiration date for AI progress.',
          'To me, the deeper challenge is quality. As generated material spreads, collecting more text may add repetition instead of insight. I’m interested in provenance, expert feedback, and evaluations that can distinguish genuinely informative examples from polished restatements.',
        ],
        sources: [{ title: 'Human-generated data limits · Epoch AI, 2024', url: 'https://epoch.ai/publications/will-we-run-out-of-data-limits-of-llm-scaling-based-on-human-generated-data' }],
      },
      {
        heading: 'Can a model help create new knowledge?',
        paragraphs: [
          'Synthetic data already has promising uses. AlphaGeometry combined synthetic training examples with a symbolic deduction engine, showing the value of generation in a domain where reasoning can be checked. That is a very different proposition from accepting a model’s answer simply because it sounds convincing.',
          'The possibility that excites me most is AI helping acquire evidence: proposing experiments, identifying informative observations, or generating solutions that survive independent tests. Original wording is not the same as original knowledge. A hypothesis becomes valuable when it leads somewhere verifiable. Perhaps the next constraint will be less about running out of tokens and more about building better feedback loops with the world.',
        ],
        sources: [{ title: 'Synthetic data and AlphaGeometry · Google DeepMind', url: 'https://deepmind.google/blog/alphageometry-an-olympiad-level-ai-system-for-geometry/' }],
      },
    ],
  },
  {
    id: 'ai-scientific-discovery', title: 'AI as an instrument of discovery',
    category: 'Science and capability', cover: 'Discovery',
    excerpt: 'The breakthroughs are exciting. Understanding what they actually establish is even more interesting.',
    sections: [
      {
        heading: 'From molecular structure to fluid dynamics',
        paragraphs: [
          'AlphaFold 3 makes me excited about AI as a scientific instrument: predicting a broad range of biomolecular structures can help researchers decide what to investigate next. It does not, by itself, establish biological function or prove a treatment works.',
          'I’m also following AI-assisted fluid dynamics. DeepMind and collaborators reported numerical discoveries of unstable singularity solutions in fluid-related equations in 2025. That is meaningful progress, but it has not solved the Navier–Stokes Millennium Problem. The gap between a promising numerical construction and a rigorous proof is precisely what makes this area so compelling.',
        ],
        sources: [
          { title: 'AlphaFold 3 · Nature, 2024', url: 'https://www.nature.com/articles/s41586-024-07487-w' },
          { title: 'Fluid-dynamics research · Google DeepMind, 2025', url: 'https://deepmind.google/blog/discovering-new-solutions-to-century-old-problems-in-fluid-dynamics/' },
          { title: 'Navier–Stokes problem status · Clay Mathematics Institute', url: 'https://www.claymath.org/millennium/navier-stokes-equation/' },
        ],
      },
      {
        heading: 'Where I want to see it go',
        paragraphs: [
          'Cyber defense is another concrete opportunity. DARPA’s AI Cyber Challenge demonstrated systems that could find and patch vulnerabilities under evaluated conditions. NASA’s autonomous navigation and scientific data work point toward a different frontier: helping spacecraft act intelligently when Earth cannot respond immediately.',
          'I want to explore how similar approaches could accelerate materials research, guide experiments, or make distant missions more capable. Stock prediction interests me too, but I would demand performance on genuinely unseen periods, after costs and changing market conditions. A persuasive backtest is not a crystal ball.',
          'I don’t think today’s limitations define AI’s permanent ceiling. I also don’t expect intelligence to eliminate uncertainty or missing information. The prospect I find most exciting is a faster, more rigorous cycle of hypothesis, experiment, and discovery, with each advance earning its credibility through evidence.',
        ],
        sources: [
          { title: 'AI Cyber Challenge results · DARPA, 2025', url: 'https://www.darpa.mil/news/2025/aixcc-results' },
          { title: 'AI in space missions · NASA', url: 'https://www.nasa.gov/organizations/ocio/dt/ai/2024-ai-use-cases/' },
        ],
      },
    ],
  },
  {
    id: 'ai-quantum-computing', title: 'Where AI meets quantum computing',
    category: 'Emerging computation', cover: 'Quantum',
    excerpt: 'A two-way relationship with remarkable potential and some very practical constraints.',
    sections: [
      {
        heading: 'AI for quantum hardware',
        paragraphs: [
          'What draws me to this intersection is that the relationship runs both ways. AI can help quantum computers work better, while quantum computers might improve selected learning tasks. Those are distinct possibilities, and progress in one does not automatically prove the other.',
          'AlphaQubit is a concrete example of the first: a neural-network decoder that improved quantum error-decoding accuracy on experimental processor data. But accuracy is only part of the challenge. A decoder also needs to keep pace with the hardware and remain reliable as it scales. I find that tension between an impressive model and a usable physical system especially interesting.',
        ],
        sources: [{ title: 'AlphaQubit · Nature, 2024', url: 'https://www.nature.com/articles/s41586-024-08148-8' }],
      },
      {
        heading: 'Quantum resources for learning',
        paragraphs: [
          'In the other direction, quantum computation is not a universal shortcut. Loading data, controlling noise, training circuits, and extracting results can erase an apparent advantage. I want to see comparisons against strong classical methods that account for the entire workflow, not just its most favorable step.',
          'Hybrid systems are what excite me: classical AI helping select or interpret specialized quantum calculations, potentially for molecular or materials research. The question is where quantum resources genuinely add something that conventional computation cannot efficiently provide.',
          'There is also a direct cybersecurity connection. NIST’s first post-quantum standards, finalized in 2024, protect against future quantum threats using algorithms that run on ordinary computers. It’s a useful reminder that this field is not only about distant breakthroughs. Some of its most consequential engineering work is preparation we can do now.',
        ],
        sources: [
          { title: 'Quantum machine learning: challenges and opportunities · Cerezo et al.', url: 'https://arxiv.org/abs/2303.09491' },
          { title: 'Post-quantum cryptography standards · NIST, 2024', url: 'https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards' },
        ],
      },
    ],
  },
];

export function readingMinutes(entry: JournalEntry) {
  const words = entry.sections.flatMap(section => section.paragraphs).join(' ').trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
