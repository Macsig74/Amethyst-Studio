import Link from 'next/link'
import {
    Globe,
    Share2,
    MessageCircle,
    Link as LinkIcon,
    Send,
    Feather,
} from 'lucide-react'

const links = [
    {
        title: 'Home',
        href: '#',
    },
    {
        title: 'Project',
        href: '#',
    },
    {
        title: 'Team',
        href: '#',
    },
    {
        title: 'Contact',
        href: '#',
    },
]

export default function FooterSection() {
    return (
        <footer className="relative z-10 py-8 md:py-12 border-t border-border/20 bg-background/50 backdrop-blur-sm">
            <div className="mx-auto max-w-5xl px-6 text-center">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit mb-8"
                >
                    <span className="text-xl font-bold tracking-tighter">Macsig</span>
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-purple-500 block duration-150 transition-colors">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {/* Social links with localized labels/icons */}
                    <Link
                        href="https://github.com/Macsig74"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-muted-foreground hover:text-purple-500 block duration-150 transition-colors">
                        <Share2 className="size-6" />
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Discord"
                        className="text-muted-foreground hover:text-purple-500 block duration-150 transition-colors">
                        <MessageCircle className="size-6" />
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Portfolio"
                        className="text-muted-foreground hover:text-purple-500 block duration-150 transition-colors">
                        <LinkIcon className="size-6" />
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Website"
                        className="text-muted-foreground hover:text-purple-500 block duration-150 transition-colors">
                        <Globe className="size-6" />
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Message"
                        className="text-muted-foreground hover:text-purple-500 block duration-150 transition-colors">
                        <Send className="size-6" />
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Feed"
                        className="text-muted-foreground hover:text-purple-500 block duration-150 transition-colors">
                        <Feather className="size-6" />
                    </Link>
                </div>
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} Amethyst Studio. All rights reserved.</span>
            </div>
        </footer>
    )
}
