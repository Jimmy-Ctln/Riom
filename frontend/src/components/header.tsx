import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Link } from "@tanstack/react-router";
import mainBackgroundImage from "@/assets/main-background-img.jpg";
import logo from "@/assets/logo.jpg";

export function Header() {
  return (
    <header className="relative">
      <AspectRatio ratio={16 / 9}>
        <img
          src={mainBackgroundImage}
          alt="Concert de Riom"
          className="object-cover"
        />
      </AspectRatio>
      <h1 className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl md:text-9xl font-bold z-20 px-8 py-4 rounded-lg bg-black/40 shadow-lg backdrop-blur-sm text-center tracking-wide">
        Riom
        <span className="block text-3xl md:text-5xl font-light mt-2">
          Sur la corde
        </span>
      </h1>
      <div className="absolute flex items-center justify-between top-0 right-0 w-full z-10 py-4 px-8">
        <div className="flex items-center gap-6">
          <img
            src={logo}
            alt="Pochette d'album de Riom"
            className="rounded-xl w-15 h-auto object-cover"
          />
          <h2 className="text-white text-xl">Riom</h2>
        </div>
        <nav>
          <ul className="flex gap-4 justify-end list-none p-4">
            <li>
              <Link to="/" className="text-white">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Qui sommes-nous ?
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Nos musiques
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
