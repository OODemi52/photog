import Image from "next/image";
import { Metadata } from "next";


const metadata: Metadata = {
    title: `D-Labs Photography - About`,
    openGraph: {
      url: "https://dlabs.photo/about",
      images: [
        {
          width: 512,
          height: 512,
          url: "https://cdn.statically.io/gh/OODemi52/photog/main/public/favicons/android-chrome-512x512.png",
        },
      ],
    },
  };

export default function AboutPage() {
    return (
        <main className="flex flex-col md:flex-row w-full md:h-screen my-16 md:my-0 md:mb-16">
            <section className="relative md:w-1/2 w-full h-1/2 md:h-full flex items-center justify-center transition-opacity duration-500">
                <div className="relative w-3/5 h-3/5 z-[-1]">
                <h1 className="text-xl font-thin bottom-0 mb-4 text-center z-[-1]">Demi Daniel-Akanle</h1>
                    <Image
                        src="https://cdn.statically.io/gh/OODemi52/photogImages/main/portraits/port.jpg"
                        alt="Demi Daniel-Akanle"
                        className="h-full w-full rounded-lg drop-shadow-[0_0_5px_#A855F7] animate-fade-in z-[-1]"
                        width={1440}
                        height={2160}
                        priority={true}
                        style={{ objectFit: 'contain', transform: "translate3d(0, 0, 0)" }}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDAQQI/8QAGRABAQEBAQEAAAAAAAAAAAAAAAIBIRIx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A82+S1K04KlltybPQrWdCi8a2t4lOtrRC19BN3oB//9k="
                    />
                </div>
            </section>
            <section className="md:w-1/2 w-full flex flex-col items-center justify-center text-center p-10 md:pt-40">
                <h1 className="text-4xl font-thin">Behind The Camera</h1>
                <h2 className="text-xs font-thin italic text-muted-foreground">
                    DMV Photographer
                </h2>
                <p className="font-thin mt-4">
                    Demi is a DMV based photographer who specializes in capturing moments that are felt, not just seen. He has a passion for photography and a keen eye for detail. His work is a reflection of his love for the art and his desire to create beautiful images that tell a story. Whether it&apos;s a portrait session, a graduation, or a special event, Demi is dedicated to providing his clients with stunning images that they will cherish for a lifetime.
                </p>
            </section>
        </main>
    );
}
