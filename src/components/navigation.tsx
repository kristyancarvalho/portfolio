import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './logo';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Ellipsis } from 'lucide-react';
import { SocialMedia } from './social';
import { ThemeToggle } from './ThemeToggle';

const navigationArray = [
  { title: '/inicio', link: '/' },
  { title: '/sobre', link: '/about' },
  { title: '/projetos', link: '/projects' }
];

interface NavigationBarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function NavigationBar({ theme, toggleTheme }: NavigationBarProps) {
  const { pathname } = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <nav className={`flex backdrop-blur-lg lg:px-4 py-4 z-10 fixed top-0 w-full transition-colors ${
      theme === 'dark' ? 'bg-black/50' : 'bg-white/50'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <Logo theme={theme} />
        <div className="hidden sm:block">
          {navigationArray.map(({ title, link }) => (
            <Link key={link} to={link}>
              <code
                className={`${
                  pathname === link
                    ? 'text-violet-500 border-b-4 border-violet-500 font-extrabold'
                    : theme === 'dark' 
                      ? 'text-gray-200/80 hover:text-white' 
                      : 'text-zinc-900 hover:text-black'
                } text-sm py-5 px-3 hover: transition duration-300 ease-in-out`}
              >
                {title}
              </code>
            </Link>
          ))}
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <SocialMedia theme={theme} />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="sm:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button 
                className={`border-2 ${
                  theme === 'dark' 
                    ? 'border-zinc-700/30 bg-zinc-800/30 hover:bg-zinc-800/50' 
                    : 'border-zinc-300/30 bg-zinc-200/30 hover:bg-zinc-200/50'
                }`} 
                variant="outline" 
                size="icon"
              >
                <Ellipsis className='text-violet-500 text-bold' size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent 
              className={`w-screen p-0 border-none flex items-center justify-center ${
                theme === 'dark' ? 'text-zinc-500 bg-zinc-950' : 'text-zinc-700 bg-zinc-50'
              }`}
            >
              <div className='flex flex-col gap-8'>
                {navigationArray.map(({ title, link }) => (
                  <Link key={link} to={link} onClick={handleLinkClick}>
                    <code
                      className={`${
                        pathname === link
                          ? 'text-violet-500 font-extrabold'
                          : theme === 'dark'
                            ? 'text-gray-200/80 hover:text-white'
                            : 'text-zinc-900 hover:text-black'
                      } text-3xl py-5 px-3 hover: transition duration-300 ease-in-out`}
                    >
                      {title}
                    </code>
                  </Link>
                ))}
                
                <div className='flex gap-4 text-sm items-center justify-center mt-8'>
                  <SocialMedia theme={theme} />
                </div>
                <div className='flex items-center justify-center mt-8'>
                  <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
                <div className='mt-4'>
                  <Logo theme={theme}/>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}