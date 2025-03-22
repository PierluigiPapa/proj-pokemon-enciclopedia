import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PokemonLogo from "../assets/pokemon-logo.svg";

export function HomePage() {
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowLogo(true), 1000);
    setTimeout(() => setShowText(true), 3000);
  }, []);


  return (
    <div className="w-full h-screen flex justify-center items-center bg-gameboy flex-col">
      {showLogo && (
        <motion.img
          src={PokemonLogo}
          alt="Pokemon Logo"
          className="w-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 1 }}
        />
      )}

      {showText && (
        <motion.span
          className="text-accedi"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          Press Start
        </motion.span>
      )}
    </div>
  );
}
