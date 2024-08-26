import { BsDiscord } from "react-icons/bs";
import { PiPlus } from "react-icons/pi";

type IconData = {
  id: number;
  src: string;
  alt: string;
};

export const userData: IconData[] = [
  { id: 1, src: "/avatars/1.jpg", alt: "user" },
  { id: 2, src: "/avatars/2.jpg", alt: "user" },
];

export const serverData: IconData[] = [
  { id: 1, src: "/avatars/1.jpg", alt: "user" },
  { id: 2, src: "/avatars/2.jpg", alt: "user" },
  { id: 3, src: "/avatars/3.jpg", alt: "user" },
  { id: 4, src: "/avatars/4.jpg", alt: "user" },
  { id: 5, src: "/avatars/5.jpg", alt: "user" },
  { id: 6, src: "/avatars/6.jpg", alt: "user" },
  { id: 7, src: "/avatars/7.jpg", alt: "user" },
  { id: 8, src: "/avatars/3.jpg", alt: "user" },
  { id: 9, src: "/avatars/1.jpg", alt: "user" },
];

export const PlusIcon = PiPlus;
export const DiscordIcon = BsDiscord;
