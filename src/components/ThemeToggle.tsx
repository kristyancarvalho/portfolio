import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <Button 
      variant="outline" 
      size="icon"
      onClick={toggleTheme}
      className={`flex items-center justify-center overflow-hidden bg-transparent border-2 p-2 transition-all ${
        theme === 'dark' ? 'border-blue-700/30 bg-blue-800/40 hover:bg-blue-800/50' : 'border-yellow-400/30 bg-yellow-100/80 hover:bg-yellow-100/50'
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -30, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 30, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          {theme === 'light' ? (
            <Sun className="text-yellow-600 h-[1.2rem] w-[1.2rem] transition-all" />
          ) : (
            <Moon className="text-blue-200 h-[1.2rem] w-[1.2rem] transition-all" />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
};