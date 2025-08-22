import type { ReactNode } from "react";
import {FaSpotify, FaApple, FaBandcamp, FaYoutubeSquare, FaDeezer } from "react-icons/fa";

export type MusicLink = {
  name: string;
  url: string;
  icon: ReactNode;
};

export const musicLinks: MusicLink[] = [
  { name: "Spotify", url: "", icon: <FaSpotify /> },
  { name: "Apple Music", url: "", icon: <FaApple /> },
  { name: "Bandcamp", url: "", icon: <FaBandcamp /> },
  { name: "Youtube Music", url: "", icon: <FaYoutubeSquare /> },
  { name: "Deezer", url: "", icon: <FaDeezer /> }
];