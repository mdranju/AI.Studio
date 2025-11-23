export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}
