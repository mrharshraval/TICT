export const siteConfig = {
  name: "The Inner Compass Tarot",
  description: "Authentic tarot readings for guidance, clarity, and spiritual growth.",
  url: "https://theinnercompasstarot.in",
  ogImage: "https://theinnercompasstarot.in/og.jpg",
  links: {
    twitter: "https://twitter.com/theinnercompasstarot",
    instagram: "https://instagram.com/theinnercompasstarot",
  },
  contact: {
    email: "theinnercompasstarot@gmail.com",
    phone: "+91 9316185870",
    address: "",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106148.6548682006!2d-111.85966601446702!3d34.85419163013896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b5dd%3A0x5020166d11019d!2sSedona%2C%20AZ!5e0!3m2!1sen!2sus!4v1712234000000!5m2!1sen!2sus",
  },
  googleBusiness: {
    placeId: "ChIJ3bVCuTKxLoARHbURkW0WIFo", // Placeholder
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  },
};

export type SiteConfig = typeof siteConfig;
