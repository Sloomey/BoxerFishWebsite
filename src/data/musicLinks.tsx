import type { ReactNode } from "react";
import {FaSpotify, FaApple, FaBandcamp, FaYoutubeSquare, FaDeezer } from "react-icons/fa";

export type MusicLink = {
  name: string;
  url: string;
  icon: ReactNode;
};

export const musicLinks: MusicLink[] = [
  { name: "Spotify", url: "https://instagram.com/boxerfishband", icon: <FaSpotify /> },
  { name: "Apple Music", url: "https://instagram.com/boxerfishband", icon: <FaApple /> },
  { name: "Bandcamp", url: "https://instagram.com/boxerfishband", icon: <FaBandcamp /> },
  { name: "Youtube Music", url: "https://instagram.com/boxerfishband", icon: <FaYoutubeSquare /> },
  { name: "Deezer", url: "https://instagram.com/boxerfishband", icon: <FaDeezer /> }
];