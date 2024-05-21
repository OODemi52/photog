"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useIsVisible } from "@/components/useIsVisible";
import Link from "next/link";
import { Metadata } from "next";

const metadata: Metadata = {
  title: `D-Labs Photography - Home`,
  openGraph: {
    url: "https://dlabs.photo/",
    images: [
      {
        width: 512,
        height: 512,
        url: "https://raw.githubusercontent.com/OODemi52/photog/main/public/favicons/android-chrome-512x512.png",
      },
    ],
  },
};

const images = [
  "https://raw.githubusercontent.com/OODemi52/photogImages/main/hero/img1.jpg",
  "https://raw.githubusercontent.com/OODemi52/photogImages/main/hero/img2.jpg",
  "https://raw.githubusercontent.com/OODemi52/photogImages/main/hero/img3.jpg",
  "https://raw.githubusercontent.com/OODemi52/photogImages/main/hero/img4.jpg",
  "https://raw.githubusercontent.com/OODemi52/photogImages/main/hero/img5.jpg",
  "https://raw.githubusercontent.com/OODemi52/photogImages/main/hero/img6.jpg",
];

export default function Home() {
  const ref1 = useRef<HTMLElement>(null);
  const ref2 = useRef<HTMLElement>(null);
  const ref3 = useRef<HTMLElement>(null);
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  const isVisible3 = useIsVisible(ref3);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <section className="relative grid grid-cols-1 px-4 md:px-12 w-full lg:w-4/5 border-b py-8">
          <div className="lg:absolute lg:top-1/2 lg:transform lg:-translate-x-1/4 lg:-translate-y-1/2 text-center md:max-w-none z-[-1]">
            <h1 className="text-4xl lg:text-6xl sm:mx-40 font-thin w-full sm:w-auto">Photos that are felt, not just seen.</h1>
            <p className="lg:relative md:text-base font-thin sm:text-sm pb-4">Every image tells a story, let us tell yours.</p>
          </div>
          <div className="w-full h-[600px] relative -z-10 animate-fade-down">
            {images.map((src, index) => (
              <Image
                key={index}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${currentImage === index ? "opacity-100" : "opacity-0"}`}
                src={src}
                alt={`Hero Image ${index + 1}`}
                width={500}
                height={750}
                objectFit="contain"
                loading="lazy"
                quality={75}
              />
            ))}
          </div>
        </section>
        <section ref={ref1} className="flex flex-col md:flex-row items-center justify-center md:w-full md:px-8 md:pt-8 pb-32 md:pb-0 pt-16 w-[90%]">
          <div className="md:w-1/2 text-center pr-4">
            <h2 className="text-4xl lg:text-6xl font-thin">The Look Good Feel Good Effect.</h2>
            <p className="font-thin">We know that when you look good, you feel good, and that include pictures of yourself. At D-Labs, we know all about making you feel good!</p>
            <div className="py-4">
              <Link href="/gallery/graduation" className="hover:underline text-purple-500">Graduation{` >`}</Link>
            </div>
          </div>
          <div className={`w-full md:w-1/2 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <Image
              className="h-full w-full object-cover z-[-2]"
              src="https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad36.jpg"
              alt="Graduation Picture 36"
              width={500}
              height={750}
              style={{ objectFit: 'cover' }}
              loading="lazy"
                      quality={75}
            />
          </div>
        </section>
        <section ref={ref2} className="flex flex-col md:flex-row items-center justify-center md:w-full md:px-8 md:pt-8 pb-32 md:pb-0 w-[90%]">
          <div className={`w-full md:w-1/2 transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
          <div className="grid grid-cols-2 lg:my-auto sm:w-full flex-1 relative">
                    <Image
                      className="h-full w-full object-cover"
                      src="https://raw.githubusercontent.com/OODemi52/photogImages/main/portraits/port47.jpg"
                      alt="Portrait Picture 47"
                      width={500}
                      height={750}
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover"
                      src="https://raw.githubusercontent.com/OODemi52/photogImages/main/portraits/port46.jpg"
                      alt="Portrait Picture 46"
                      width={500}
                      height={750}
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover"
                      src="https://raw.githubusercontent.com/OODemi52/photogImages/main/portraits/port49.jpg"
                      alt="Portrait Picture 49"
                      width={500}
                      height={750}
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover"
                      src="https://raw.githubusercontent.com/OODemi52/photogImages/main/portraits/port48.jpg"
                      alt="Portrait Picture 48"
                      width={500}
                      height={750}
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                      quality={75}
                    />
                  </div>
          </div>
          <div className="w-full md:w-1/2 text-center pl-4">
            <h2 className="text-4xl lg:text-6xl font-thin">Bring your vision to life.</h2>
            <p className="font-thin">D-Labs is where imagination meets skill and execution. You come with want you want, and we&apos;ll handle the rest!</p>
            <div className="py-4">
              <Link href="/gallery/portraits" className="hover:underline text-purple-500">Portraits{` >`}</Link>
            </div>
          </div>
        </section>
        <section ref={ref3} className="flex flex-col md:flex-row items-center justify-center md:w-full md:px-8 md:pt-8 md:pb-0 w-[90%]">
          <div className="w-full md:w-1/2 text-center pr-4">
            <h2 className="text-4xl lg:text-6xl font-thin">Capturing moments one frame at a time.</h2>
            <p className="font-thin">Life happens moment by moment. Let us be there for you to capture the most import ones.</p>
            <div className="py-4">
              <Link href="/gallery/portraits" className="hover:underline text-purple-500">Events{` >`}</Link>
            </div>
          </div>
          <div className={`w-full md:w-1/2 transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
          <Image
              className="h-full w-full object-cover"
              src="https://raw.githubusercontent.com/OODemi52/photogImages/main/event/event57.jpg"
              alt="Graduation Picture 5"
              width={500}
              height={750}
              style={{ objectFit: 'cover' }}
              loading="lazy"
              quality={75}
            />
          </div>
        </section>
      </main>
    </>
  );
}
