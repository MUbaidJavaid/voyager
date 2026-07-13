/** Local editorial travel photography (sourced from Unsplash, bundled for reliability) */

export type TravelImage = {
  src: string;
  alt: string;
  credit: string;
};

function local(path: string): string {
  return `/images/travel/${path}`;
}

export const IMAGES = {
  hero: {
    src: local("hero-map.jpg"),
    alt: "Travel planning on a map",
    credit: "Unsplash",
  },
  heroSafari: {
    src: local("safari.jpg"),
    alt: "Elephants on the African savanna",
    credit: "Unsplash",
  },
  heroCoastal: {
    src: local("hero-coastal.jpg"),
    alt: "Turquoise beach at sunset",
    credit: "Unsplash",
  },
  heroMountains: {
    src: local("mountains.jpg"),
    alt: "Mountain peaks above clouds",
    credit: "Unsplash",
  },
  /** @deprecated use heroMountains */
  mountains: {
    src: local("mountains.jpg"),
    alt: "Mountain peaks above clouds",
    credit: "Unsplash",
  },
  amalfi: {
    src: local("amalfi.jpg"),
    alt: "Amalfi Coast cliffside village",
    credit: "Unsplash",
  },
  kyoto: {
    src: local("kyoto.jpg"),
    alt: "Fushimi Inari gates in Kyoto",
    credit: "Unsplash",
  },
  marrakech: {
    src: local("marrakech.jpg"),
    alt: "Moroccan desert at golden hour",
    credit: "Unsplash",
  },
  patagonia: {
    src: local("patagonia.jpg"),
    alt: "Patagonia peaks and glacial landscape",
    credit: "Unsplash",
  },
  dubai: {
    src: local("dubai.jpg"),
    alt: "Dubai skyline at dusk",
    credit: "Unsplash",
  },
  safariLodge: {
    src: local("safari-lodge.jpg"),
    alt: "Safari lodge in the wilderness",
    credit: "Unsplash",
  },
  cultural: {
    src: local("cultural.jpg"),
    alt: "Historic city street",
    credit: "Unsplash",
  },
  couple: {
    src: local("couple.jpg"),
    alt: "Travelers overlooking a mountain landscape",
    credit: "Unsplash",
  },
  workspace: {
    src: local("workspace.jpg"),
    alt: "Travel planning workspace",
    credit: "Unsplash",
  },
  aerial: {
    src: local("aerial.jpg"),
    alt: "View from airplane window",
    credit: "Unsplash",
  },
  desert: {
    src: local("desert.jpg"),
    alt: "Sand dunes at golden hour",
    credit: "Unsplash",
  },
  safariEast: {
    src: local("safari.jpg"),
    alt: "East Africa safari landscape",
    credit: "Unsplash",
  },
} as const satisfies Record<string, TravelImage>;
