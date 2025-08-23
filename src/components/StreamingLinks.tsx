import { musicLinks } from "../data/musicLinks.tsx";
import SocialButton from "./SocialButton";

export default function StreamingLinks() {
  return (
    <div className="flex gap-4" style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
            }}>
      {musicLinks.map((link) => (
        <div key={link.name}>
            {link.name} 
            -<SocialButton
                key={link.name}
                url={link.url}
                icon={link.icon}
                label={link.name}
            />
        </div>


      ))}
    </div>
  );
}