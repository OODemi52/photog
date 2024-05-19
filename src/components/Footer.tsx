import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function Footer() {
    return ( 
        <footer className="flex flex-col items-center justify-around w-screen py-4 h-28 mt-24 border-t fixed bottom-0 left-0 bg-zinc-900">
            <Link href="https://www.instagram.com/d__labs?igsh=MTNudHI2eDg0czlsbg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <InstagramLogoIcon className="h-6 w-6" />
            </Link>
            <p className="text-sm font-thin">© 2024 D-Labs Photography </p>
        </footer>
    );
}