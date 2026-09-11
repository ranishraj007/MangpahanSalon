export const siteUrl = "https://mangpahang.com.np";

// Shared by navigation, prerendering, the sitemap and IndexNow.
export const servicePages = [
  { path: "/services/haircut", label: "Haircut", serviceId: 1,
    question: "What is included in a haircut appointment?",
    answer: "The haircut service includes consultation, shampoo, cut and styling. The menu also lists fringe or bangs cuts, beard trims and clean shaves separately.",
  },
  { path: "/services/hair-color", label: "Hair Color & Highlights", serviceId: 2,
    question: "Which coloring options are available?",
    answer: "The salon menu includes global color, root and front touch-ups, half and full highlights, ombré, balayage and quick toning. Global color is priced per tube, and balayage has a starting price; discuss the final quote with the team.",
  },
  { path: "/services/hair-treatments", label: "Hair Smoothing Treatments", serviceId: 11,
    question: "Which smoothing treatments are on the menu?",
    answer: "The menu lists G.K. treatments, Amazon series cysteine, Extreme protein, hair botox and nanoplastia. Prices are shown as ranges. Ask the stylist which option suits your hair and confirm the final quote before booking.",
  },
  { path: "/services/bridal-makeup", label: "Bridal & Occasion Makeup", serviceId: 13,
    question: "Is bridal makeup priced the same as party makeup?",
    answer: "No. Bridal, reception, party, soft glam and mehendi makeup have separate entries on the menu. Check the price table above for your occasion, and ask the team what is included in your selected service.",
  },
];

export const publicRoutes = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/gallery", label: "Gallery" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  ...servicePages,
];
