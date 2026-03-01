import type { ImageMetadata } from 'astro';
import bottopupImg from '../assets/bottopup.png';
import travelImg from '../assets/travel.png';

export interface Project {
  title: string;
  category: string;
  gridClass: string;
  image?: string | ImageMetadata;
  isIcon?: boolean;
  iconName?: string;
}

export const projects: Project[] = [
  {
    title: "Financial Analytics Dashboard",
    category: "E-commerce",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxW91MC7UfsIBw5AbCN9Vf2KF4N3uwD1bFLvkjp5aBz47duCHV3N7zSDd7ebAxzbqqIg6v7YF-KWwwJmaWn9xy8brq420vXMyYz02ovNwrB7qpsAncyB5dEk_rz4DxwOvODeQ0AYvoucaNRLDA2Nmn_DsxS-cKFvd_dpiPVA6xzr8D-Xv13l9s8u41mTrngC-eD-J9CL4uPqDY_pe47p5oNk3F50km39iVqODFyoiTfy7ogLnWuPBY5DG072_sAA_TCOaWSSzR0j0",
    gridClass: "col-span-1 lg:col-span-2",
  },
  {
    title: "Bot WhatsApp TopUp",
    category: "Custom",
    image: bottopupImg,
    gridClass: "col-span-1 lg:col-span-2",
  },
  {
    title: "Nomads Travel",
    category: "Travel",
    image: travelImg,
    gridClass: "col-span-1 lg:col-span-2",
  },
  {
    title: "Core Infrastructure Refactor",
    category: "Company Profile",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn8w4aFrXghZ_kjtccxsOd5kuRr8CkqcXuqEfSXWtnUzKdz0kTfA0qk_CVO3M2NB1TdSTuG5tnfq9KEAq0n8Gt4HHWW6h1OEffXpx-CbYDgak_Afs0-_Z73-5A5bWlSEwHuhOAH-FdKcBx33_-AyHgGAxIQvfg1ozeu6EmVBa64awiSZOUjGAdzzKmyn4HFdAtsSZSmqpFGL8KoSLZdbXw3-n2fccQIff6kdzW_3mOla3P--QgZEKMvNnXn8XjJn59GGWA01zx9Eg",
    gridClass: "col-span-1 lg:col-span-3",
  },
  {
    title: "Natural Language Chatbot",
    category: "Custom",
    isIcon: true,
    iconName: "smart_toy",
    gridClass: "col-span-1 lg:col-span-3",
  }
];
