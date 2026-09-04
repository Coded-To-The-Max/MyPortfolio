import Link from 'next/link';
import { userInfo } from '@/lib/data';

export function Footer() {
  return <footer className="site-footer"><div className="section-container footer-line"><p>© {new Date().getFullYear()} {userInfo.name} / Built for the web</p><Link href={`https://github.com/${userInfo.githubUsername}`} target="_blank" rel="noreferrer">github.com/{userInfo.githubUsername}</Link></div></footer>;
}
