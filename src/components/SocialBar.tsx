// SocialBar.tsx
import { socialLinks } from "../data/socialLinks.tsx";
import SocialButton from "./SocialButton";

export default function SocialBar() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <SocialButton
          key={link.name}
          url={link.url}
          icon={link.icon}
          label={link.name}
        />
      ))}
    </div>
  );
}