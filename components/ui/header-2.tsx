'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

import { ThemeToggle } from '@/components/ui/theme-toggle';
import { ContactDrawer } from '@/components/ui/contact-drawer';

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);

    const links = [
        { label: 'Dev', href: '#dev' },
        { label: 'Build', href: '#build' },
        { label: 'À propos', href: '#about' },
    ];

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className="sticky top-4 z-50 mx-auto w-full max-w-5xl rounded-md border border-border bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg shadow md:transition-all md:ease-out"
        >
            <nav
                className={cn(
                    'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
                    { 'md:px-2': scrolled },
                )}
            >
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tighter">Amethyst Studio</span>
                </div>
                
                <div className="hidden items-center gap-4 md:flex">
                    {links.map((link, i) => (
                        <a key={i} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                    <div className="flex items-center gap-2 border-l pl-4 border-border/50">
                        <ThemeToggle />
                        <ContactDrawer 
                            name="us"
                            trigger={<Button size="sm">Nous contacter</Button>}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle className="w-14 h-7" />
                    <Button size="icon" variant="outline" onClick={() => setOpen(!open)}>
                        <MenuToggleIcon open={open} className="size-5" duration={300} />
                    </Button>
                </div>
            </nav>

            <div
                className={cn(
                    'bg-background/90 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden transition-all duration-300',
                    open ? 'opacity-100 visible' : 'opacity-0 invisible',
                )}
            >
                <div
                    className={cn(
                        'flex h-full w-full flex-col justify-between gap-y-2 p-6 bg-background',
                        open ? 'translate-y-0' : '-translate-y-4'
                    )}
                >
                    <div className="grid gap-y-4 mt-8">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                className={cn(
                                    buttonVariants({ variant: 'ghost', className: 'justify-center text-xl h-14' })
                                )}
                                href={link.href}
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4 mb-12">
                        <ContactDrawer 
                            name="us"
                            trigger={
                                <Button className="w-full h-14 text-lg font-bold" onClick={() => setOpen(false)}>
                                    Nous contacter
                                </Button>
                            }
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
