export const couple = {
  groom: "Jitesh",
  bride: "Ankita",
  groomFullName: "Jitesh Jain",
  brideFullName: "Ankita Jain",
  tagline: "Two souls united by destiny, blessed by tradition",
  dateLabel: "Monday, 21 September 2026",
  weddingISO: "2026-09-21T20:00:00+05:30",
  locationLabel: "Jalandhar & Alahdad Chak · Punjab",
  websiteUrl: "https://jitesh-weds-ankitha.vercel.app",
  ogImageUrl: "https://jitesh-weds-ankitha.vercel.app/og-image.jpg",
};

export const family = {
  groomParents: {
    mother: "Smt. Neeru Jain",
    father: "Sh. Mohinder Jain",
  },
  brideParents: {
    mother: "Smt. Neelam Jain",
    father: "Sh. Upendra Jain",
  },
  grandparents: [
    "Late Smt. Shanti Devi Jain & Late Sh. Kashmiri Lal Jain",
    "Smt. Komal Jain & Sh. Kulbhushan Jain",
  ],
  compliments: "With best compliments and love from all Family Members & Relatives",
};

export type WeddingEvent = {
  name: string;
  glyph: string;
  date: string;
  time: string;
  venue: string;
  address?: string;
  mapsUrl?: string;
  note: string;
};

export const events: WeddingEvent[] = [
  {
    name: "Sangeet",
    glyph: "✧",
    date: "20 Sept 2026",
    time: "8:00 PM",
    venue: "Baba Gajja Ji Tomri",
    address: "Guru Ram Dass Nagar, Wariana, Jalandhar, Punjab 144002",
    mapsUrl:
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x391a4f28d2c5da81:0x71e802030e5b586d?entry=s&sa=X&ved=2ahUKEwjsgejhlNSWAxWYleEIHVxdDrsQ4kB6BAgVEAA&hl=en",
    note: "An evening of music, celebration and joyful dance.",
  },
  {
    name: "Haldi Ceremony",
    glyph: "❋",
    date: "21 Sept 2026",
    time: "10:00 AM",
    venue: "Baba Gajja Ji Tomri",
    address: "Guru Ram Dass Nagar, Wariana, Jalandhar, Punjab 144002",
    mapsUrl:
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x391a4f28d2c5da81:0x71e802030e5b586d?entry=s&sa=X&ved=2ahUKEwjsgejhlNSWAxWYleEIHVxdDrsQ4kB6BAgVEAA&hl=en",
    note: "Turmeric radiance, auspicious traditions & bright morning blessings.",
  },
  {
    name: "Sehra Bandi",
    glyph: "❁",
    date: "21 Sept 2026",
    time: "4:30 PM",
    venue: "Baba Gajja Ji Tomri",
    address: "Guru Ram Dass Nagar, Wariana, Jalandhar, Punjab 144002",
    mapsUrl:
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x391a4f28d2c5da81:0x71e802030e5b586d?entry=s&sa=X&ved=2ahUKEwjsgejhlNSWAxWYleEIHVxdDrsQ4kB6BAgVEAA&hl=en",
    note: "Traditional sehra bandi rituals & blessings for the groom.",
  },
  {
    name: "Departure of Baraat",
    glyph: "❖",
    date: "21 Sept 2026",
    time: "6:30 PM",
    venue: "Baba Gajja Ji Tomri",
    address: "Guru Ram Dass Nagar, Wariana, Jalandhar, Punjab 144002",
    mapsUrl:
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x391a4f28d2c5da81:0x71e802030e5b586d?entry=s&sa=X&ved=2ahUKEwjsgejhlNSWAxWYleEIHVxdDrsQ4kB6BAgVEAA&hl=en",
    note: "The celebratory Baraat procession departs with dhol & festivities.",
  },
  {
    name: "Wedding & Dinner",
    glyph: "☀",
    date: "21 Sept 2026",
    time: "8:00 PM Onwards",
    venue: "Imperial Castle",
    address: "Talwandi Road, near Happy Resorts, Alahdad Chak, Punjab 144626",
    mapsUrl:
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x391a3b70e8916ccb:0x8c410f7fd0803763?entry=s&sa=X&ved=2ahUKEwjsu72alNSWAxWIieEIHeZ1IjgQ4kB6BAgWEAA&hl=en",
    note: "Sacred Varmala, auspicious Pheras followed by Royal Dinner.",
  },
];

export const venue = {
  name: "Imperial Castle",
  address: "Talwandi Road, near Happy Resorts, Alahdad Chak, Punjab 144626",
  mapsUrl:
    "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x391a3b70e8916ccb:0x8c410f7fd0803763?entry=s&sa=X&ved=2ahUKEwjsu72alNSWAxWIieEIHeZ1IjgQ4kB6BAgWEAA&hl=en",
};

function icsStamp(d: Date) {
  return `${d.toISOString().replace(/[-:]/g, "").slice(0, 15)}Z`;
}

export function buildICS() {
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Jitesh & Ankita//Wedding//EN"];
  const starts: Record<string, string> = {
    Sangeet: "2026-09-20T20:00:00+05:30",
    "Haldi Ceremony": "2026-09-21T10:00:00+05:30",
    "Sehra Bandi": "2026-09-21T16:30:00+05:30",
    "Departure of Baraat": "2026-09-21T18:30:00+05:30",
    "Wedding & Dinner": "2026-09-21T20:00:00+05:30",
  };
  for (const ev of events) {
    const start = new Date(starts[ev.name] ?? couple.weddingISO);
    const end = new Date(start.getTime() + 3 * 60 * 60 * 1000);
    lines.push(
      "BEGIN:VEVENT",
      `UID:${ev.name.toLowerCase().replace(/\s+/g, "-")}-jitesh-ankita@wedding`,
      `DTSTAMP:${icsStamp(new Date())}`,
      `DTSTART:${icsStamp(start)}`,
      `DTEND:${icsStamp(end)}`,
      `SUMMARY:${ev.name} | ${couple.groom} & ${couple.bride}`,
      `LOCATION:${ev.venue}, ${ev.address ?? venue.address}`,
      `DESCRIPTION:${ev.note}`,
      "END:VEVENT",
    );
  }
  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function downloadICS() {
  const blob = new Blob([buildICS()], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "jitesh-ankita-wedding.ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
