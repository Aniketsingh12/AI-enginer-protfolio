import FadeIn from '../components/FadeIn';
import { STACK } from '../data/stack';

export default function StackSection() {
  return (
    <section
      id="stack"
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
        Stack
      </FadeIn>

      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 sm:gap-5">
        {STACK.map((group, i) => {
          const Icon = group.icon;
          return (
            <FadeIn
              key={group.label}
              delay={(i % 2) * 0.08}
              y={30}
              className="flex flex-col gap-4 rounded-[28px] border border-[#D7E2EA]/20 p-5 transition-colors duration-300 hover:border-[#D7E2EA]/45 sm:rounded-[34px] sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA]">
                  <Icon className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <h3 className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA] sm:text-base">
                  {group.label}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#D7E2EA]/[0.06] px-3 py-1.5 text-xs font-light text-[#D7E2EA]/75 sm:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
