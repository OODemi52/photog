import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="flex flex-col md:flex-row w-full md:h-screen my-16 md:my-0 md:mb-16">
            <section className="relative md:w-1/2 w-full h-1/2 md:h-full flex items-center justify-center transition-opacity duration-500">
                <div className="relative w-3/5 h-3/5 z-[-1]">
                <h1 className="text-xl font-thin bottom-0 mb-4 text-center z-[-1]">Demi Daniel-Akanle</h1>
                    <Image
                        src="https://raw.githubusercontent.com/OODemi52/photogImages/main/creative/crea1.jpg"
                        alt="Demi Daniel-Akanle"
                        className="h-full w-full rounded-lg drop-shadow-[0_0_5px_#A855F7] animate-fade-in z-[-1]"
                        width={500}
                        height={750}
                        style={{ objectFit: 'contain' }}
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
