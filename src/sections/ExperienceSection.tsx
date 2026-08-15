import FadeIn from '../components/FadeIn';
import { EXPERIENCE } from '../data/experience';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {EXPERIENCE.map((item, i) => (
          <FadeIn
            key={item.org}
            delay={i * 0.1}
            y={30}
            className="flex flex-col gap-4 py-8 sm:flex-row sm:gap-10 sm:py-10 md:gap-16 md:py-12"
            style={{
              borderTop: i === 0 ? '1px solid rgba(215, 226, 234, 0.15)' : undefined,
              borderBottom: '1px solid rgba(215, 226, 234, 0.15)',
            }}
          >
            <p className="shrink-0 pt-1 text-xs font-light uppercase tracking-[0.2em] text-[#D7E2EA]/50 sm:w-44 sm:text-sm">
              {item.period}
            </p>

            <div className="flex flex-col gap-3">
              <div>
                <h3
                  className="font-medium uppercase leading-tight text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2rem)' }}
                >
                  {item.role}
                </h3>
                <p className="text-sm font-light uppercase tracking-wider text-[#D7E2EA]/55 sm:text-base">
                  {item.org}
                </p>
              </div>

              <ul className="flex flex-col gap-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm font-light leading-relaxed text-[#D7E2EA]/70 sm:text-base"
                  >
                    <span aria-hidden="true" className="pt-[0.55em] text-[0.5em]">
                      ●
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
