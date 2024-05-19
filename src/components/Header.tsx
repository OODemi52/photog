import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import logo from "../../public/favicons/android-chrome-512x512.png";
import Link from "next/link";

export function Header() {
    return (
        <header className="flex items-center justify-between w-full py-4 border-b">
            <div className="flex items-center pl-4 lg:pl-0">
                <Link href="/" style={{ filter: "drop-shadow(0 0 5px purple-700)" }}>
                    <Image src={logo} alt="D-Labs Logo" className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] lg:ml-8" />
                </Link>
            </div>
            <div className="flex items-center lg:hidden pr-4">
                <Navbar />
            </div>
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                <Navbar />
            </div>
        </header>
    );
}
