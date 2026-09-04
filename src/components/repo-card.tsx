import Image from 'next/image';
import Link from 'next/link';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import type { GithubRepo } from '@/lib/types';

interface RepoCardProps { repo: GithubRepo; image: ImagePlaceholder; index: number; }

export function RepoCard({ repo, image, index }: RepoCardProps) {
  return (
    <article className="project-item">
      <Link className="project-media" href={repo.html_url} target="_blank" rel="noreferrer">
        <Image src={image.imageUrl} alt={`${repo.name} project preview`} fill sizes="(min-width: 640px) 58vw, 100vw" data-ai-hint={image.imageHint} />
      </Link>
      <div className="project-copy">
        <div className="project-meta"><span className="project-index">0{index + 1}</span><span>{repo.language || 'Software project'}</span></div>
        <h3 className="project-name"><Link href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</Link></h3>
        <p className="project-description">{repo.description || 'Project details are available in the repository.'}</p>
      </div>
    </article>
  );
}
