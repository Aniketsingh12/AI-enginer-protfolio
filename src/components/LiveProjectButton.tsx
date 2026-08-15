import { ArrowUpRight } from 'lucide-react';

type LiveProjectButtonProps = {
  href?: string;
  label?: string;
  className?: string;
};

/** Ghost/outline pill used on project cards. */
export default function LiveProjectButton({
  href = '#',
  label = 'Live Project',
  className = '',
}: LiveProjectButtonProps) {
  const external = href.startsWith('http');

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-300 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      {label}
      <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
    </a>
  );
}
