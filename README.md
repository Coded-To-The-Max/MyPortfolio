# Max's Repo

A personal portfolio website to showcase GitHub projects, skills, and experience. Built with Next.js, Tailwind CSS, and shadcn/ui.

## Development

```sh
npm ci
npm run dev
npm run typecheck
npm run build
```

The homepage uses the components in `src/components/portfolio`, with scoped styles in `src/app/portfolio.css` and shared tokens in `tokens.css`. Project content lives in `src/components/portfolio/projects.ts`; experience and skills remain in `src/lib/data.ts`.

The four `public/images/*-cover.png` assets are original generated typography-only covers. Their titles are centered with safe margins for responsive cropping. Next Image serves optimized versions. The four `*-symbol.png` assets are centered, text-free project symbols used only in the exploration gallery. No generated photos are used.

GSAP handles the entrance, gallery parallax, and marquee. Motion handles section reveals and the optional first-visit intro. HLS video loads only near the viewport, uses hls.js with a native fallback, and has a dark fallback if unavailable. The pause control and system reduced-motion preference disable continuous motion. Gallery images open in a keyboard-accessible dialog.

Contact links point to the GitHub profile; the experience section replaces a downloadable resume. No fictional journal articles, clients, or experience statistics are displayed.

Recent thoughts are four concise personal research notes in `src/components/portfolio/journal-data.ts`, with primary-source links and reading times calculated from the text. They expand in place with keyboard-accessible native disclosure controls.
