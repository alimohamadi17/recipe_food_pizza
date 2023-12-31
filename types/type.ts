export interface Slide {
  id: number;
  Label: string;
  href: string;
}

export interface SlideDataProps {
  id: number;
  title: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
}

export interface Menu {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}

export interface PriceProps {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
}
