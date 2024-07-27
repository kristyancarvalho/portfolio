import { Link, useLocation } from 'react-router-dom';

import { Logo } from './logo';

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Ellipsis } from 'lucide-react';
import { Github, Instagram } from "lucide-react";

const navigationArray = [
  { title: '/inicio', link: '/' },
  { title: '/sobre', link: '/about' },
  { title: '/projetos', link: '/projects' }
];

export function NavigationBar() {
  const { pathname } = useLocation();

  return (
    <nav className="flex bg-black/50 backdrop-blur-lg px-4 py-4 z-10 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="hidden sm:block">
          {navigationArray.map(({ title, link }) => (
            <Link key={link} to={link}>
              <code
                className={`${
                  pathname === link
                    ? 'text-violet-500 border-b-2 border-violet-500'
                    : 'text-gray-200/80 hover:text-white'
                } text-sm font-semibold py-4 px-3 hover: transition duration-300 ease-in-out`}
              >
                {title}
              </code>
            </Link>
          ))}
        </div>
        <div className="hidden sm:block">
          <div className='flex gap-4 text-sm'>
          <Link to="https://github.com/kristyancarvalho" target="_blank" className="text-white hover:underline">
                <code className="flex items-center gap-1">
                    <Github />
                </code>
            </Link>
            <Link to="https://www.instagram.com/carvalho.kristyan/" target="_blank" className="text-pink-300 hover:underline">
                <code className="flex items-center gap-1">
                    <Instagram />
                </code>
            </Link>
          </div>
        </div>
        <div className="sm:hidden">
          <Sheet>
              <SheetTrigger asChild>
                <Button className="border-2 border-zinc-700/30 bg-zinc-800/30 hover:bg-zinc-800/50" variant={"outline"} size="icon">
                    <Ellipsis className='text-violet-500 text-bold' size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-screen text-zinc-500 bg-zinc-950 p-0 border-none flex items-center justify-center">
                <div className='flex flex-col gap-8'>
                  {navigationArray.map(({ title, link }) => (
                      <Link key={link} to={link}>
                        <code
                          className={`${
                            pathname === link
                              ? 'text-violet-500 font-bold'
                              : 'text-gray-200/80 hover:text-white'
                          } text-3xl py-4 px-3 hover: transition duration-300 ease-in-out`}
                        >
                          {title}
                        </code>
                      </Link>
                  ))}
                    <div className='flex gap-4 text-sm items-center justify-center mt-8'>
                      <Link to="https://github.com/kristyancarvalho" target="_blank" className="text-white hover:underline">
                          <code className="flex items-center gap-1">
                              <Github />
                          </code>
                      </Link>
                      <Link to="https://www.instagram.com/carvalho.kristyan/" target="_blank" className="text-pink-300 hover:underline">
                          <code className="flex items-center gap-1">
                              <Instagram />
                          </code>
                      </Link>
                    </div>
                  <div className='mt-8'>
                    <Logo/>
                  </div>
                </div>
              </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}