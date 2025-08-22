import type { ReactNode } from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

export type SocialLink = {
  name: string;
  url: string;
  icon: ReactNode;
};

export const socialLinks: SocialLink[] = [
  { name: "Instagram", url: "https://instagram.com/boxerfishband", icon: <FaInstagram /> },
  { name: "Twitter", url: "https://twitter.com/boxerfishband", icon: <FaTwitter /> },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61579053274906#", icon: <FaFacebook /> },
  { name: "TikTok", url: "https://tiktok.com/boxerfishband", icon: <FaTiktok /> },
  { name: "Youtube", url: "https://www.youtube.com/@BoxerfishBand", icon: <FaYoutube /> },
];
