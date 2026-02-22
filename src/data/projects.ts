export interface Project {
  title: string;
  category: string;
  gridClass: string;
  image?: string;
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
    title: "EcoTravel App",
    category: "Travel",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLcoj95q27kmhEOx_NdpGsCL8mVhcyn5sJpGiI3nuIjJz_hWIQzo13SJTtj8knwZg1F5g0rg1s1ZtvArPPZ6Ll5a45zje0ge46Ky4g1ExeP-3CL6to_7BAiuszDAzU2v8_NtjkaOwpSdJo1FGxtqJ4aLm1aics0A72QLb-dRsfXNodmB2PlAkusDi2GHAtGLyh8LLu32w0Tcm8JTslLKCP4uR4LNkZpu4xrLC2rLYrlLm-dfD9JzCQKNAWGSPobZ8ZX7lo682UPOU",
    gridClass: "col-span-1 lg:col-span-2",
  },
  {
    title: "SaaS Marketing Platform",
    category: "Company Profile",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtsmHZ7NkpUD0oSLQE-fZIGh0MF0FmlJSQ9af3q16BF3A_catnouSfqBo48wXRt1v_bdZWGAry8OUJJ4NOmrIGJIgEUnqCz-V1dUGyLr6peoAI8o4tMekl0pk7_fkLdxkZmE0_DpdSrPhh6o0PnQq_PLNHkmyeq3kRjNpu1A_GLNebUIN6WV4ag0iLDLFRa6rxvT-OW4DEBaqNPbP2ZKOzwDk97HhBc28JXIT6smvsPI9cnz9ERbKTaQbUn_ePCIVJNUE-FtNC_RA",
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
  },{
    title: "Core Infrastructure Refactor",
    category: "Company Profile",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn8w4aFrXghZ_kjtccxsOd5kuRr8CkqcXuqEfSXWtnUzKdz0kTfA0qk_CVO3M2NB1TdSTuG5tnfq9KEAq0n8Gt4HHWW6h1OEffXpx-CbYDgak_Afs0-_Z73-5A5bWlSEwHuhOAH-FdKcBx33_-AyHgGAxIQvfg1ozeu6EmVBa64awiSZOUjGAdzzKmyn4HFdAtsSZSmqpFGL8KoSLZdbXw3-n2fccQIff6kdzW_3mOla3P--QgZEKMvNnXn8XjJn59GGWA01zx9Eg",
    gridClass: "col-span-1 lg:col-span-2",
  }
];
