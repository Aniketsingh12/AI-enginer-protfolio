import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import LiveProjectButton from '../components/LiveProjectButton';
import { RESUME_HREF, SOCIALS } from '../data/links';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-[#0C0C0C] px-5 pb-10 pt-20 sm:px-8 sm:pt-24 md:px-10 md:pt-28"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Let&apos;s talk
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.15}
        y={20}
        className="mt-8 max-w-[560px] text-center font-light leading-relaxed text-[#D7E2EA]/75 sm:mt-10"
        style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)' }}
      >
        Open to full-time roles and freelance work — scoping a new idea, building out a
        model, or getting an existing prototype the rest of the way to production. Fastest
        reply is by email.
      </FadeIn>

      <FadeIn
        delay={0.3}
        y={20}
        className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:mt-12"
      >
        <ContactButton>Contact Me</ContactButton>
        <LiveProjectButton href={RESUME_HREF} label="Download Resume" />
      </FadeIn>

      <FadeIn delay={0.4} y={20} className="mt-10 flex items-center gap-3 sm:mt-12">
        {SOCIALS.map((social) => {
          const Icon = social.icon;
          const external = social.href.startsWith('http');
          return (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA] transition-colors duration-300 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10"
            >
              <Icon className="h-4 w-4" strokeWidth={1.8} />
            </a>
          );
        })}
      </FadeIn>

      <footer className="mt-20 flex w-full max-w-6xl flex-col items-center justify-between gap-3 border-t border-[#D7E2EA]/15 pt-8 text-xs font-light uppercase tracking-[0.2em] text-[#D7E2EA]/45 sm:mt-24 sm:flex-row">
        <p>© {new Date().getFullYear()} Aniket Singh</p>
        <p>Built with care</p>
      </footer>
    </section>
  );
}
