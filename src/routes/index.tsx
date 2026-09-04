import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/wedding/Hero";
import { Countdown } from "@/components/wedding/Countdown";
import { Reveal } from "@/components/wedding/Section";
import { SectionTitle } from "@/components/wedding/Ornaments";
import { WishLantern } from "@/components/wedding/WishLantern";
import { WeddingFooter } from "@/components/wedding/WeddingFooter";
import { InvitationOpener } from "@/components/wedding/InvitationOpener";
import { couple, family, events, venue, downloadICS } from "@/lib/wedding";
import { useParallax } from "@/hooks/use-reveal";
const floral = "https://media.invitestory.in/seashell-vows/src/assets/floral-spray.png";
import mapImg from "@/assets/imperial-castle-venue.jpg";
import ringsVignette from "@/assets/punjabi-wedding-vignette.jpg";
import floralDivider from "@/assets/marigold-divider.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jitesh & Ankita | Wedding Invitation, 21 Sept 2026" },
      {
        name: "description",
        content:
          "Join Jitesh & Ankita for their wedding celebrations in Punjab. Sangeet, Haldi, Sehra Bandi, Baraat and Wedding details, countdown and directions.",
      },
      { property: "og:title", content: "Jitesh & Ankita | Wedding Invitation" },
      {
        property: "og:description",
        content:
          "Join Jitesh & Ankita for their wedding celebrations on 20-21 September 2026 in Punjab. All event details and venue directions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

function Invitation() {
  const drift = useParallax(0.18);

  return (
    <main className="paper overflow-x-hidden">
      <InvitationOpener />
      <Hero />

      {/* Countdown */}
      <section className="px-6 py-14">
        <Reveal>
          <p className="text-center text-[0.62rem] uppercase tracking-airy text-muted-foreground">
            Counting down to the auspicious moment
          </p>
          <div className="mt-6">
            <Countdown iso={couple.weddingISO} />
          </div>
        </Reveal>
      </section>

      {/* Story / Auspicious Beginning */}
      <section className="relative px-7 pb-16">
        <img
          src={floral}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1024}
          height={1024}
          className="pointer-events-none absolute -right-16 -top-6 w-40 opacity-40"
          style={{ transform: `translate3d(0, ${-drift * 0.4}px, 0)` }}
        />
        <Reveal>
          <SectionTitle overline="Our Invitation" title="Auspicious Beginnings" />
          <p className="text-center font-display text-[1.18rem] leading-[1.85] text-foreground/90">
            With the divine blessings of Lord Jinendra, our respected elders, and beloved families,
            we embark on this sacred journey of love, friendship, and togetherness. We warmly invite
            you to grace our wedding celebrations with your presence and blessings.
          </p>
          <p className="mt-6 script text-center text-lg text-primary">{couple.tagline}</p>
          <img
            src={ringsVignette}
            alt="Watercolor auspicious floral vignette"
            loading="lazy"
            width={1536}
            height={1024}
            className="mx-auto mt-7 w-60 object-contain"
          />
        </Reveal>
      </section>

      {/* Family & Blessings Section */}
      <section className="relative px-6 pb-16">
        <Reveal>
          <SectionTitle overline="With Elder Blessings" title="Family & Regards" />
          <div className="space-y-4">
            {/* Parents Card */}
            <div className="card-soft p-5">
              <div className="grid grid-cols-1 gap-5 text-center sm:grid-cols-2">
                <div className="border-b border-primary/20 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
                  <p className="text-[0.62rem] uppercase tracking-airy text-primary">
                    Groom's Parents
                  </p>
                  <h3 className="mt-2 font-display text-xl text-foreground">
                    {family.groomParents.mother}
                  </h3>
                  <p className="font-display text-lg text-muted-foreground">
                    & {family.groomParents.father}
                  </p>
                </div>
                <div className="pt-1 sm:pl-4 sm:pt-0">
                  <p className="text-[0.62rem] uppercase tracking-airy text-primary">
                    Bride's Parents
                  </p>
                  <h3 className="mt-2 font-display text-xl text-foreground">
                    {family.brideParents.mother}
                  </h3>
                  <p className="font-display text-lg text-muted-foreground">
                    & {family.brideParents.father}
                  </p>
                </div>
              </div>
            </div>

            {/* Regards & Grandparents Card */}
            <div className="card-soft p-5 text-center">
              <p className="text-[0.62rem] uppercase tracking-airy text-primary">
                With Sacred Blessings & Fond Remembrance
              </p>
              <div className="mt-3 space-y-1">
                {family.grandparents.map((gp) => (
                  <p key={gp} className="font-display text-base text-foreground/90">
                    {gp}
                  </p>
                ))}
              </div>
              <div className="mt-4 border-t border-primary/20 pt-3">
                <p className="text-xs italic text-muted-foreground">{family.compliments}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Events */}
      <section className="relative px-6 pb-16">
        <img
          src={floralDivider}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={2172}
          height={724}
          className="pointer-events-none mx-auto mb-8 w-full max-w-md opacity-80"
        />
        <Reveal>
          <SectionTitle overline="Ceremonies & Celebrations" title="Wedding Itinerary" />
        </Reveal>
        <ul className="space-y-4">
          {events.map((ev, i) => (
            <li key={ev.name}>
              <Reveal delay={i * 60}>
                <article className="card-soft press p-5">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary/30 text-primary">
                      {ev.glyph}
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-2xl">{ev.name}</h3>
                      <p className="text-[0.62rem] uppercase tracking-airy text-muted-foreground">
                        {ev.date} · {ev.time}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-foreground">{ev.venue}</p>
                    {ev.address && (
                      <p className="mt-0.5 text-xs text-muted-foreground">{ev.address}</p>
                    )}
                  </div>
                  <p className="mt-2 text-xs italic text-foreground/80">{ev.note}</p>
                  {ev.mapsUrl && (
                    <a
                      href={ev.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center text-[0.64rem] uppercase tracking-wider text-primary hover:underline"
                    >
                      📍 View Location on Map →
                    </a>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <Reveal>
        <WishLantern />
      </Reveal>

      {/* Venue */}
      <section className="px-6 pb-16">
        <Reveal>
          <SectionTitle overline="Main Wedding Venue" title="The Venue" />
          <div className="card-soft overflow-hidden">
            <img
              src={mapImg}
              alt={`Illustrated map of ${venue.name}`}
              loading="lazy"
              width={1024}
              height={768}
              className="h-44 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-display text-2xl">{venue.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{venue.address}</p>
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="press mt-5 flex min-h-[48px] items-center justify-center rounded-sm bg-primary px-5 text-[0.68rem] uppercase tracking-airy text-primary-foreground"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Calendar CTA in the thumb zone */}
      <section className="px-6 pb-20">
        <Reveal>
          <div className="card-soft p-6 text-center">
            <p className="script text-lg text-primary">Save our date</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Add every ceremony to your calendar in one tap.
            </p>
            <button
              type="button"
              onClick={downloadICS}
              className="press mt-5 flex min-h-[52px] w-full items-center justify-center rounded-sm border border-primary/45 bg-secondary text-[0.68rem] uppercase tracking-airy text-foreground"
            >
              Add to Calendar
            </button>
          </div>
        </Reveal>
      </section>

      <WeddingFooter />
    </main>
  );
}
