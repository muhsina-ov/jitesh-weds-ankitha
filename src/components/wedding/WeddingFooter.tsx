import { useState } from "react";
import { couple } from "@/lib/wedding";
import { useParallax } from "@/hooks/use-reveal";
import footerWash from "@/assets/punjabi-opener-poster.jpg";
const floral = "https://media.invitestory.in/seashell-vows/src/assets/floral-spray.png";
const lantern = "https://media.invitestory.in/seashell-vows/src/assets/watercolor-lantern.png";
const lanterns = "https://media.invitestory.in/seashell-vows/src/assets/lantern-constellation.png";

export function WeddingFooter() {
  const drift = useParallax(0.18);
  const [shareStatus, setShareStatus] = useState("Share this invitation");

  async function copyInvitation() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareStatus("Invitation link copied");
    } catch {
      setShareStatus("Copy the link from your browser");
    }
  }

  return (
    <footer className="footer-scene relative isolate min-h-[38rem] overflow-hidden">
      <img
        src={footerWash}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1024}
        height={1280}
        className="absolute inset-0 -z-30 h-full w-full object-cover"
        style={{ transform: `translate3d(0, ${-drift * 0.32}px, 0) scale(1.12)` }}
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,var(--color-background)_0%,oklch(0.983_0.014_92_/_0.6)_30%,oklch(0.983_0.014_92_/_0.9)_100%)]" />
      <img
        src={lanterns}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1024}
        height={1536}
        className="pointer-events-none absolute -right-24 -top-32 -z-10 h-[110%] w-auto opacity-35"
      />
      <img
        src={lantern}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1024}
        height={1536}
        className="lantern-breathe pointer-events-none absolute -left-10 top-24 -z-10 w-28 opacity-60"
      />

      <div className="mx-auto flex min-h-[38rem] max-w-lg flex-col items-center justify-end px-5 pb-10 pt-24 text-center">
        <div className="card-soft relative z-10 w-full max-w-sm rounded-2xl border border-primary/35 bg-background/94 p-6 shadow-2xl backdrop-blur-md">
          <img
            src={floral}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1024}
            height={1024}
            className="mx-auto w-20 opacity-80"
          />
          <p className="mt-3 script text-lg text-primary">We cannot wait to celebrate with you</p>
          <h2 className="mt-3 font-display text-[2.4rem] leading-[1.05] text-foreground">
            {couple.groom} <span className="script text-2xl text-primary">&</span> {couple.bride}
          </h2>

          <div className="mt-6 grid w-full grid-cols-2 border-y border-primary/25 py-3.5 text-left">
            <div className="border-r border-primary/25 pr-3">
              <p className="text-[0.62rem] uppercase tracking-wider text-muted-foreground">The wedding</p>
              <p className="mt-1 font-display text-base font-medium text-foreground">21 Sept 2026</p>
            </div>
            <div className="pl-3">
              <p className="text-[0.62rem] uppercase tracking-wider text-muted-foreground">The place</p>
              <p className="mt-1 font-display text-base font-medium text-foreground">Imperial Castle, Punjab</p>
            </div>
          </div>

          <button
            type="button"
            onClick={copyInvitation}
            className="press mt-6 flex min-h-[48px] w-full items-center justify-center rounded-sm bg-primary px-5 text-[0.68rem] uppercase tracking-[0.2em] text-primary-foreground shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Copy invitation link
          </button>
          <p aria-live="polite" className="mt-2.5 min-h-5 text-xs text-muted-foreground">
            {shareStatus}
          </p>

          <p className="mt-5 text-xs leading-relaxed text-foreground/80">
            With love & best compliments from the Jain Family & Relatives
          </p>
        </div>

        <a
          href="https://www.instagram.com/invitestory.in/"
          target="_blank"
          rel="noreferrer"
          className="relative z-10 mt-6 text-[0.58rem] uppercase tracking-[0.18em] text-foreground/60 transition-colors hover:text-primary"
        >
          Follow @invitestory.in on Instagram
        </a>
      </div>
    </footer>
  );
}
