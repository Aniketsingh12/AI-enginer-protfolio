import { Github, Mail, Twitter, type LucideIcon } from 'lucide-react';

export const EMAIL = 'aniketsingh12090@gmail.com';

/**
 * TODO: drop your resume PDF at `public/resume.pdf` — this path expects it
 * there. (Anything in `public/` is copied to the site root as-is.)
 */
export const RESUME_HREF = './aniket_singh_ai_engineer.pdf';

export type Social = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const SOCIALS: Social[] = [
  { label: 'GitHub', href: 'https://github.com/Aniketsingh12', icon: Github },
  { label: 'X', href: 'https://x.com/Stickysuraj', icon: Twitter },
  { label: 'Email', href: `mailto:${EMAIL}`, icon: Mail },
];
