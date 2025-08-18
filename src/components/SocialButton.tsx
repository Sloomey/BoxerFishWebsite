// SocialButton.tsx
import type { ReactNode } from "react";

type SocialButtonProps = {
  url: string;
  icon: ReactNode;
  label: string;
};

export default function SocialButton({ url, icon, label }: SocialButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
    >
      {icon}
    </a>
  );
}