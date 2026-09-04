import heroArch from "@/assets/punjabi-hero-arch.jpg";
import coupleImg from "@/assets/punjabi-couple.jpg";
const floral = "https://media.invitestory.in/seashell-vows/src/assets/floral-spray.png";
import { PetalTap } from "./PetalTap";
import { useParallax } from "@/hooks/use-reveal";
import { couple } from "@/lib/wedding";

export function Hero() {
  const bg = useParallax(0.35);
  const fg = useParallax(0.12);

  return (
    <PetalTap>
      <header className="relative min-h-[100svh] overflow-hidden paper">
        <div
          className="absolute inset-x-0 top-0 h-[78svh]"
          style={{ transform: `translate3d(0, ${bg}px, 0)`, willChange: "transform" }}
        >
          <img
            src={heroArch}
            alt="Watercolor Punjabi royal palace wedding courtyard arch"
            width={1024}
            height={1536}
            className="h-full w-full object-cover object-top animate-bloom opacity-95"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />
        </div>

        <img
          src={floral}
          alt=""
          aria-hidden="true"
          width={1024}
          height={1024}
          className="pointer-events-none absolute -left-10 top-6 w-36 opacity-70 animate-float-soft"
          style={{ transform: `translate3d(0, ${bg * 0.5}px, 0)` }}
        />
        <img
          src={floral}
          alt=""
          aria-hidden="true"
          width={1024}
          height={1024}
          className="pointer-events-none absolute -right-12 top-24 w-32 -scale-x-100 opacity-60 animate-float-soft"
          style={{ animationDelay: "1.4s", transform: `translate3d(0, ${bg * 0.35}px, 0)` }}
        />

        <div
          className="pointer-events-none absolute bottom-[27%] left-1/2 w-[68%] max-w-[290px] -translate-x-1/2 overflow-hidden rounded-3xl p-1 animate-bloom shadow-[0_16px_36px_-12px_rgba(92,80,68,0.35)]"
          style={{
            transform: `translate3d(-50%, ${-fg * 0.6}px, 0)`,
            background: "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(253,248,238,0.95) 100%)",
            border: "1px solid rgba(207,169,110,0.4)",
          }}
        >
          <img
            src={coupleImg}
            alt="Punjabi Bride and Groom in royal wedding attire"
            width={1024}
            height={1536}
            className="h-auto w-full object-contain mix-blend-multiply"
          />
        </div>

        <div
          className="relative flex min-h-[100svh] flex-col items-center justify-end px-6 pb-14 text-center"
          style={{ transform: `translate3d(0, ${-fg}px, 0)` }}
        >
          <p className="script text-lg text-primary animate-ink" style={{ animationDelay: "0.4s" }}>
            Together with our families
          </p>
          <h1
            className="mt-3 font-display text-[3.15rem] leading-[1.02] text-foreground animate-ink"
            style={{ animationDelay: "0.7s" }}
          >
            {couple.groom}
            <span className="script mx-2 block text-2xl text-primary">&</span>
            {couple.bride}
          </h1>
          <p
            className="mt-5 text-[0.66rem] uppercase tracking-airy text-muted-foreground animate-ink"
            style={{ animationDelay: "1s" }}
          >
            {couple.dateLabel}
          </p>
          <p
            className="mt-2 text-[0.66rem] uppercase tracking-airy text-muted-foreground animate-ink"
            style={{ animationDelay: "1.15s" }}
          >
            {couple.locationLabel}
          </p>
        </div>
      </header>
    </PetalTap>
  );
}
