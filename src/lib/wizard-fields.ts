export type FieldType = "text" | "email" | "tel" | "date" | "number" | "select" | "textarea";

export type WizardField = {
  name: string;
  label: string;
  placeholder?: string;
  type?: FieldType;
  options?: readonly string[];
  required?: boolean;
};

export const WIZARD_FIELDS: Record<number, readonly WizardField[]> = {
  1: [
    {
      name: "destination",
      label: "Primary destination",
      placeholder: "e.g. Dubai, Safari — Tanzania, Amalfi Coast",
      required: true,
    },
    {
      name: "tripType",
      label: "Trip type",
      type: "select",
      options: [
        "Safari package",
        "Vacation rental",
        "Flight + hotel package",
        "Multi-city itinerary",
        "Other — describe in notes",
      ],
      required: true,
    },
    { name: "departureDate", label: "Departure date", type: "date", required: true },
    { name: "returnDate", label: "Return date", type: "date", required: true },
    { name: "travelers", label: "Number of travelers", type: "number", placeholder: "2", required: true },
    {
      name: "budget",
      label: "Approximate budget (optional)",
      placeholder: "e.g. USD 8,000 total",
    },
  ],
  2: [
    { name: "departureAirport", label: "Departure airport / city", placeholder: "London Heathrow (LHR)", required: true },
    { name: "arrivalAirport", label: "Arrival airport / city", placeholder: "Dubai (DXB)", required: true },
    {
      name: "flightClass",
      label: "Class preference",
      type: "select",
      options: ["Economy", "Premium Economy", "Business", "First", "Flexible — advise me"],
    },
    {
      name: "flexibleDates",
      label: "Date flexibility",
      type: "select",
      options: ["Fixed dates only", "± 1 day", "± 3 days", "Very flexible"],
    },
  ],
  3: [
    {
      name: "accommodationType",
      label: "Accommodation type",
      type: "select",
      options: ["Hotel", "Vacation rental / villa", "Safari lodge", "Boutique guesthouse", "Mix — advise me"],
      required: true,
    },
    { name: "rooms", label: "Rooms & board", placeholder: "1 double · Breakfast included", required: true },
    {
      name: "accommodationNotes",
      label: "Location or amenity preferences",
      type: "textarea",
      placeholder: "Sea view, walkable to medina, family-friendly, etc.",
    },
  ],
  4: [
    {
      name: "transfers",
      label: "Airport & ground transfers",
      placeholder: "Private car · Airport ↔ Hotel · Day trips",
    },
    {
      name: "activities",
      label: "Activities & tours",
      type: "textarea",
      placeholder: "Desert safari, city tour, wine tasting, park fees, spa, etc.",
    },
  ],
  5: [
    {
      name: "insurance",
      label: "Travel insurance",
      type: "select",
      options: ["Include in quote", "I have my own", "Advise me on options"],
    },
    {
      name: "visaAssistance",
      label: "Visa assistance needed?",
      type: "select",
      options: ["No", "Yes — please advise", "Unsure"],
    },
    {
      name: "specialRequests",
      label: "Dietary, mobility, or other requirements",
      type: "textarea",
      placeholder: "Halal meals, wheelchair access, anniversary surprise, etc.",
    },
  ],
  6: [
    { name: "fullName", label: "Full name", placeholder: "Sarah Mitchell", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com", required: true },
    { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+1 ...", required: true },
    {
      name: "contactMethod",
      label: "Preferred contact",
      type: "select",
      options: ["Email", "Phone call", "WhatsApp"],
    },
    {
      name: "additionalNotes",
      label: "Anything else for your planner",
      type: "textarea",
      placeholder: "Past trips with us, must-see sights, pace of travel...",
    },
  ],
} as const;
