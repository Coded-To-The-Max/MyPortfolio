import Link from 'next/link';
import Image from 'next/image';
import { Code, Star, GitFork } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { GithubRepo } from '@/lib/types';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

interface RepoCardProps {
  repo: GithubRepo;
  image: ImagePlaceholder;
}

export function RepoCard({ repo, image }: RepoCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader>
        <div className="aspect-video relative mb-4">
            <Image
                src={image.imageUrl}
                alt={repo.name}
                fill
                className="rounded-t-lg object-cover"
                data-ai-hint={image.imageHint}
            />
        </div>
        <CardTitle className="font-headline text-xl leading-tight">
          <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            {repo.name}
          </Link>
        </CardTitle>
        <CardDescription className="flex-grow pt-2">{repo.description || 'No description available.'}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow"></CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Code className="h-4 w-4" />
            <span>{repo.language || 'N/A'}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
