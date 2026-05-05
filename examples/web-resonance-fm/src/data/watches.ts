export type Watch = {
  id: string;
  name: string;
  reference: string;
  series: string;
  caliber: string;
  diameter: number; // mm
  thickness: number; // mm
  power: number;     // hours
  jewels: number;
  year: string;
  price: string;
  description: string;
  hands: { hour: number; minute: number; second: number }; // initial positions
  accent: "gold" | "silver" | "blued";
};

export const WATCHES: Watch[] = [
  {
    id: "field-001",
    name: "Field Reference",
    reference: "HC.001.W",
    series: "FIELD",
    caliber: "HC.7",
    diameter: 38,
    thickness: 8.2,
    power: 60,
    jewels: 23,
    year: "2024",
    price: "On request",
    description:
      "Our entry into mechanical watchmaking. A field instrument first, an heirloom second. Hand-finished bridges, bevelled in-house, set inside a 38mm steel case with sapphire crystal front and back.",
    hands: { hour: 10, minute: 12, second: 32 },
    accent: "silver",
  },
  {
    id: "archive-002",
    name: "Archive Roman",
    reference: "HC.002.R",
    series: "ARCHIVE",
    caliber: "HC.9",
    diameter: 36,
    thickness: 7.4,
    power: 72,
    jewels: 27,
    year: "2025",
    price: "On request",
    description:
      "A reading on small numerals. Roman indices on warm white enamel, a heat-blued seconds hand, and an off-set sub-dial at six. The HC.9 caliber sits behind 27 jewels and a free-sprung balance.",
    hands: { hour: 2, minute: 38, second: 18 },
    accent: "blued",
  },
  {
    id: "horizon-003",
    name: "Horizon Solar",
    reference: "HC.003.S",
    series: "HORIZON",
    caliber: "HC.12",
    diameter: 40,
    thickness: 10.1,
    power: 96,
    jewels: 31,
    year: "2026",
    price: "On request",
    description:
      "A perpetual indication of solar time. The HC.12 caliber drives an off-axis solar disc, complete with sunrise and sunset readings calibrated for the latitude of your choosing. Limited to twelve pieces.",
    hands: { hour: 7, minute: 50, second: 47 },
    accent: "gold",
  },
];

export const ARCHIVE_ENTRIES = [
  { date: "Mar 14, 2026", title: "On the difficulty of the second hand", excerpt: "A quiet meditation on why finishing a hand by hand still matters in 2026, and what we lose when we let machines do all the work." },
  { date: "Feb 02, 2026", title: "The HC.12 and the latitude calibration", excerpt: "Behind the development of our most ambitious caliber to date — a perpetual solar indication tuned to the buyer's chosen latitude." },
  { date: "Dec 18, 2025", title: "Twelve hours in the workshop", excerpt: "A photo essay tracking a single Field Reference from rough movement plate to finished case-back." },
  { date: "Oct 30, 2025", title: "Why we switched to enamel", excerpt: "After three years of lacquer dials, we made the move to grand feu enamel. Here's what changed." },
];
