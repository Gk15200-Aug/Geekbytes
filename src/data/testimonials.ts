export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "David Chen",
    role: "CTO, NexPay",
    avatar: "/images/testimonials/david-chen.webp",
    rating: 5,
    quote: "GeekBytes transformed our legacy payment system into a modern, scalable platform. Their team delivered ahead of schedule and the results exceeded our expectations.",
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, MediConnect",
    avatar: "/images/testimonials/sarah-jenkins.webp",
    rating: 5,
    quote: "Working with GeekBytes on our healthcare platform was seamless. They understood compliance requirements from day one and built a solution that our patients and staff love.",
  },
  {
    name: "Marcus Thorne",
    role: "Dir. E-commerce, Lumina",
    avatar: "/images/testimonials/marcus-thorne.webp",
    rating: 5,
    quote: "Our conversion rate jumped 40% after GeekBytes redesigned our e-commerce platform. Their attention to UX and performance optimization made all the difference.",
  },
];
