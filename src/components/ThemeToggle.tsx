import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
        className={`overflow-hidden bg-transparent border-2 p-2 transition-all ${
          theme === 'dark' ? 'border-blue-700/30 bg-blue-800/40 hover:bg-blue-800/50' : 'border-yellow-400/30 bg-yellow-100/80 hover:bg-yellow-100/50'
        }`}
      >
        {theme === 'light' ? (                  
          <motion.div
              initial={{ y: -20, rotate: 20, scale: 0 }}
              animate={{ y: 0, rotate: 0, scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
          >
              <Sun className="text-yellow-600 h-[1.2rem] w-[1.2rem] transition-all dark:-rotate-90 dark:scale-0" />
          </motion.div>
        ) : (
          <motion.div
              initial={{ y: -20, rotate: 20, scale: 0 }}
              animate={{ y: 0, rotate: 0, scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
          >
              <Moon className="text-blue-200 lg:mr-0.5 min-[320px]:-mr-0.5 h-[1.2rem] w-[1.2rem] transition-all dark:rotate-0 dark:scale-100" />
          </motion.div>
        )}
      </Button>
  );
};