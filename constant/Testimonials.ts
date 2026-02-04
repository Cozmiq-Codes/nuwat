export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Nuwat doesn't waste time selling ideas. They come in, challenge assumptions, and force decisions. It's uncomfortable at first, then everything starts working.",
    author: "Senior Project Executive",
    role: "Senior Project Executive",
    company: "EllisDon",
  },
  {
    id: 2,
    quote:
      "The level of strategic clarity Nuwat brings is unmatched. They don't just clear the fog; they build a roadmap that makes execution inevitable.",
    author: "Director of Operations",
    role: "Director of Operations",
    company: "TechFlow Solutions",
  },
  {
    id: 3,
    quote:
      "We were stuck in a cycle of endless planning. Nuwat broke the loop, realigned our leadership, and got us simplified, scalable, and moving fast.",
    author: "Chief Marketing Officer",
    role: "Chief Marketing Officer",
    company: "Apex Innovations",
  },
  {
    id: 4,
    quote:
      "They aren't just consultants; they are architects of momentum. Our brand presence went from fragmented to fortified in record time.",
    author: "Head of Brand Strategy",
    role: "Head of Brand Strategy",
    company: "Global Ventures",
  },
];
