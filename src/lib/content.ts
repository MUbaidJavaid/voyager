import { IMAGES } from "./images";

export const SITE = {
  name: "Voyager Travel",
  tagline: "We plan it — you live it",
  description:
    "Our travel agency develops complete travel plans — flights, tour packages, vacation rentals, hotels, safaris, activities, and transfers — tailored to your dates and style.",
  email: "book.voyagertravel@gmail.com",
  phone: "+1 (941) 284-9222",
  phoneTel: "+19412849222",
  whatsapp: "+260774152828",
} as const;

export const CTA = {
  planTrip: "Plan Your Trip",
  callNow: "Call Now",
  appointment: "Make an Appointment",
  learnMore: "Learn More",
  submitRequest: "Submit Trip Request",
} as const;

export const NAV_PRIMARY = [
  { href: "/destinations", label: "Destinations" },
  { href: "/vacation-rentals", label: "Vacation Rentals" },
  { href: "/travel-styles", label: "Safari & Packages" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const NAV_SECONDARY = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

/** Internal / MVP pages — footer only */
export const NAV_PLATFORM = [
  { href: "/technology", label: "Technology" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/case-study", label: "Case Study" },
] as const;

/** Verified from the shipped MVP — no invented metrics */
export const PROJECT_FACTS = {
  type: "MVP, deployed to production",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Convex", "Vercel"],
  wizardSteps: 6,
  pipelineStages: ["New", "In Review", "Offer Sent", "Accepted", "Closed"],
  roles: ["Customer", "Agent", "Admin"],
} as const;

export const WORKFLOW_FAILURES = [
  "Trip requests arrived as free-form emails, often missing fields needed to quote.",
  "Offers lived in threads — no reliable answer to where a request stood.",
  "Customer history was scattered; repeat clients restarted from zero.",
  "Volume increased dropped balls rather than throughput.",
] as const;

export const LAUNCH_CHANGES = [
  "Every submission uses a structured wizard with enforced fields.",
  "Each request has an assignable owner and explicit status.",
  "Messages and documents attach to the request, not an inbox.",
  "Customer profiles retain past requests for returning travelers.",
  "Offers are modeled as objects with a lifecycle — the seam for payments and booking APIs.",
] as const;

export const DESTINATIONS = [
  {
    slug: "safari",
    name: "Safaris",
    region: "East Africa",
    image: IMAGES.heroSafari,
    note: "Big Five, Great Migration, luxury lodges, and expert guides.",
  },
  {
    slug: "dubai",
    name: "Dubai",
    region: "UAE",
    image: IMAGES.dubai,
    note: "Urban stays, desert camps, and seamless connection routing.",
  },
  {
    slug: "alula",
    name: "AlUla",
    region: "Saudi Arabia",
    image: IMAGES.desert,
    note: "Heritage sites, desert landscapes, and curated cultural stays.",
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    region: "Tanzania",
    image: IMAGES.heroCoastal,
    note: "Beach retreats, spice tours, and island extensions after safari.",
  },
  {
    slug: "amalfi",
    name: "Amalfi Coast",
    region: "Italy",
    image: IMAGES.amalfi,
    note: "Coastal stays, private transfers, slow itinerary pacing.",
  },
  {
    slug: "patagonia",
    name: "Patagonia",
    region: "Chile & Argentina",
    image: IMAGES.patagonia,
    note: "Expedition logistics, lodge chains, weather windows.",
  },
] as const;

export const VACATION_RENTALS = [
  {
    slug: "hawaii",
    name: "Hawaii",
    region: "USA",
    image: IMAGES.heroCoastal,
    note: "Oceanfront villas and island-hopping itineraries.",
  },
  {
    slug: "cape-town",
    name: "Cape Town",
    region: "South Africa",
    image: IMAGES.cultural,
    note: "City apartments, wine country, and coastal drives.",
  },
  {
    slug: "florida",
    name: "Florida",
    region: "USA",
    image: IMAGES.heroCoastal,
    note: "Family-friendly rentals near beaches and theme parks.",
  },
  {
    slug: "caribbean",
    name: "Caribbean",
    region: "West Indies",
    image: IMAGES.heroCoastal,
    note: "Beachfront homes and resort-adjacent villas.",
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    region: "Central America",
    image: IMAGES.heroMountains,
    note: "Rainforest lodges, surf towns, and eco retreats.",
  },
  {
    slug: "seychelles",
    name: "Seychelles",
    region: "Indian Ocean",
    image: IMAGES.amalfi,
    note: "Two-bedroom villas and private island escapes.",
  },
] as const;

export const TRAVEL_STYLES = [
  {
    slug: "safari",
    title: "Safari Packages",
    description:
      "Embark on an unforgettable safari — Big Five, Great Migration, luxury lodges, or eco camps. We coordinate guides, parks, and lodges to your dates.",
    image: IMAGES.heroSafari,
  },
  {
    slug: "rentals",
    title: "Vacation Rentals",
    description:
      "From cozy cottages to beachfront villas — curated homes with secure booking, amenities, and transfers included in your offer.",
    image: IMAGES.heroCoastal,
  },
  {
    slug: "cultural",
    title: "Worldwide Destinations",
    description:
      "Flights, hotels, activities, and tour packages assembled line by line — we know the best deals and build the plan around your brief.",
    image: IMAGES.cultural,
  },
  {
    slug: "adventure",
    title: "Custom Itineraries",
    description:
      "Multi-stop routes with recovery days, altitude and weather factored in — hand-built, not pulled from a catalog.",
    image: IMAGES.heroMountains,
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Tyne Pidor",
    location: "Orlando",
    destination: "London",
    period: "January 2025",
    quote:
      "Voyager took the stress out of booking my hotel stay for a recent trip to London. Quick to respond and truly a pleasure to work with. If you like to sit back and let someone else plan, I'd highly recommend Voyager.",
  },
  {
    name: "Jane Faber",
    location: "Zambia",
    destination: "Safari",
    period: "",
    quote:
      "What an amazing experience! Safaris are the best and worth every penny. Voyager did everything right from the get-go — service and attention to detail is everything.",
  },
  {
    name: "Yakassi Chiyesu",
    location: "Lusaka",
    destination: "Dubai",
    period: "",
    quote:
      "A very reliable company. Everything was booked according to my preference — accommodation, visa, and activities. A well organized trip from start to finish.",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Submit a structured request",
    body: "Six steps: destination, flights, accommodation, transfers, insurance, contact. Progress saves between steps.",
    image: IMAGES.couple,
  },
  {
    step: 2,
    title: "Agent builds the offer",
    body: "Line items for flights, stays, and services — assembled manually, attached to the request record.",
    image: IMAGES.workspace,
  },
  {
    step: 3,
    title: "Revise on the record",
    body: "Questions stay on the request thread. Status moves through review, offer sent, accepted, closed.",
    image: IMAGES.cultural,
  },
  {
    step: 4,
    title: "Travel with continuity",
    body: "Documents and history remain on the profile. The next trip starts with context, not a blank email.",
    image: IMAGES.aerial,
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "Do you sell fixed packages?",
    a: "No. Each offer is built from your request. The wizard exists so agents receive complete briefs, not partial emails.",
  },
  {
    q: "What happens after I submit?",
    a: "The request enters a queue with status New. An agent assigns it, reviews details, and drafts an offer on the same record.",
  },
  {
    q: "Can I pause and return to my request?",
    a: "Yes. The wizard persists progress per step.",
  },
  {
    q: "Where does communication happen?",
    a: "On the request — not in a personal inbox. That keeps context when offers are revised.",
  },
  {
    q: "Do you book vacation rentals and safaris?",
    a: "Yes. We plan flights, hotels, vacation rentals, safari lodges, transfers, insurance, and activities in one tailored offer.",
  },
  {
    q: "How do I speak with someone directly?",
    a: `Call ${SITE.phone} or email ${SITE.email}. WhatsApp: ${SITE.whatsapp} (WhatsApp only).`,
  },
] as const;

export const WIZARD_STEPS = [
  {
    id: 1,
    title: "Trip overview",
    description: "Where you want to go, when, and who's traveling.",
  },
  {
    id: 2,
    title: "Flights",
    description: "Departure points, class, and flexibility.",
  },
  {
    id: 3,
    title: "Accommodation",
    description: "Hotels, rentals, lodges, or riads — your preference.",
  },
  {
    id: 4,
    title: "Transfers & activities",
    description: "Ground transport, tours, and experiences.",
  },
  {
    id: 5,
    title: "Insurance & extras",
    description: "Coverage, visa help, and special requests.",
  },
  {
    id: 6,
    title: "Your details",
    description: "How we reach you to build your offer.",
  },
] as const;

export const PIPELINE_STAGES = [
  { id: "new", label: "New" },
  { id: "review", label: "In Review" },
  { id: "offer", label: "Offer Sent" },
  { id: "accepted", label: "Accepted" },
  { id: "closed", label: "Closed" },
] as const;

export const TECH_STACK = [
  { name: "Next.js", detail: "App Router — customer wizard and ops dashboard" },
  { name: "TypeScript", detail: "Shared types across UI and Convex functions" },
  { name: "Tailwind CSS", detail: "Layout and component styling" },
  { name: "Convex", detail: "Database, auth, file storage, real-time subscriptions" },
  { name: "Vercel", detail: "Production hosting and preview deployments" },
] as const;

export const ROADMAP = [
  {
    phase: "Shipped",
    items: [
      "Multi-step trip request wizard",
      "Operations queue with assignment",
      "Five-stage status pipeline",
      "Per-request messaging",
      "Customer profiles",
      "Role-based access (customer, agent, admin)",
    ],
  },
  {
    phase: "Next",
    items: [
      "Stripe payment on offer acceptance",
      "Email notifications on status change",
      "Quote document templates",
    ],
  },
  {
    phase: "Later",
    items: [
      "Live supplier booking APIs",
      "Automated follow-ups",
      "Multi-agency support",
    ],
  },
] as const;
