'use client';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, MoveRight, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header = ({ onClickPreInscription }: { onClickPreInscription: () => void }) => {
  const navigationItems = [
    {
      title: 'Accueil',
      href: '#accueil',
      description: '',
    },
    {
      title: 'Fonctionnalités',
      href: '#fonctionnalités',
      description: '',
    },
     {
      title: 'Tarifs',
      href: '#tarifs',
      description: '',
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-white/70 backdrop-blur-md border-b">
  <div className="container mx-auto flex items-center justify-between min-h-14 px-4 py-2 gap-4">
    
    {/* Logo + texte */}
    <Link href="/" className="flex items-center gap-3 flex-shrink-0">
      <Image src="/images/vocalis_logo.svg" alt="Logo"  width={20} height={20} />
      <p className="font-bold text-lg font-sans">Vocalis AI</p>
    </Link>

    {/* Navigation - peut prendre plus d’espace */}
    <div className="flex-1 lg:flex lg:justify-center hidden">
      <NavigationMenu className="flex justify-center">
        <NavigationMenuList className="flex space-x-4">
          {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink href={item.href}>
                        <Button variant='ghost'>{item.title}</Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className='font-medium text-sm hidden lg:flex'>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='!w-[450px] p-4'>
                        <div className='flex flex-col lg:grid grid-cols-2 gap-4'>
                          <div className='flex flex-col h-full justify-between'>
                            <div className='flex flex-col'>
                              <p className='text-base'>{item.title}</p>
                              <p className='text-muted-foreground text-sm'>
                                {item.description}
                              </p>
                            </div>
                            <Button size='sm' className='mt-10'>
                              Book a call today
                            </Button>
                          </div>
                          <div className='flex flex-col text-sm h-full justify-end'>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className='flex justify-end w-full gap-4'>
          <div className='border-r hidden md:inline'></div>
           <Button variant='outline' onClick={onClickPreInscription}>
      Pré-inscription
    </Button>
        </div>
        <div className='flex w-12 shrink lg:hidden items-end justify-end'>
          <Button variant='ghost' onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
          </Button>
          {isOpen && (
            <div className='absolute top-14 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8'>
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className='flex flex-col gap-2'>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className='flex justify-between items-center'
                      >
                        <span className='text-lg'>{item.title}</span>
                        <MoveRight className='w-4 h-4 stroke-1 text-muted-foreground' />
                      </Link>
                    ) : (
                      <p className='text-lg'>{item.title}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
