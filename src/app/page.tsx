"use client"
import Image from "next/image";
import image from "../../public/img1.jpg";
import { useRef } from "react";
import { useIsVisible } from "@/components/useIsVisible";

export default function Home() {
  const ref1 = useRef<HTMLElement>(null);
  const ref2 = useRef<HTMLElement>(null);
  const ref3 = useRef<HTMLElement>(null);
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  const isVisible3 = useIsVisible(ref3);


  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <section className="relative grid grid-cols-1 px-4 md:px-12 w-full lg:w-4/5 border-b py-8">
          <div className="lg:absolute lg:top-1/2 lg:transform lg:-translate-x-1/4 lg:-translate-y-1/2 text-center md:max-w-none z-[-1]">
            <h1 className="text-4xl lg:text-6xl sm:mx-40 font-thin w-full sm:w-auto">Photos that are felt, not just seen.</h1>
            <p className="lg:relative md:text-base font-thin sm:text-sm pb-4">Every image tells a story, let us tell yours.</p>
          </div>
          <Image
              className="h-full w-full object-cover animate-fade-down z-[-2]"
              src="https://raw.githubusercontent.com/OODemi52/photogImages/main/hero/img4.jpg"
              alt="Graduation Picture 5"
              width={500}
              height={750}
              style={{ objectFit: 'cover' }}
          />
        </section>
        <section ref={ref1} className="flex flex-col md:flex-row items-center justify-center w-full px-8 pt-8">
          <div className="w-1/2 md:w-1/2 text-center">
            <h2 className="text-6xl font-thin">Capturing moments one frame at a time. || Bring your vision to life</h2>
            <p className="font-thin">Life happens moment by moment. We go through many different experiences.</p>
          </div>
          <div className={`w-full md:w-1/2 px-24 transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            <Image src={image} alt="logo" layout="responsive" width={500} height={500} />
          </div>
        </section>
        <section ref={ref2} className="flex flex-col md:flex-row items-center justify-center w-full px-8">
          <div className={`w-full md:w-1/2 px-24 transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
            <Image src={image} alt="logo" layout="responsive" width={500} height={500}/>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-6xl font-thin">Capturing moments one frame at a time.</h2>
            <p className="font-thin">Life happens moment by moment. We go through many different experiences.</p>
          </div>
        </section>
        <section ref={ref3} className="flex flex-col md:flex-row items-center justify-center w-full px-8">
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-6xl font-thin">The Look Good Feel Good Effect.</h2>
            <p className="font-thin">The essence of a photograph can&apos;t be expressed in words, nor [blank], but is rather felt.</p>
          </div>
          <div className={`w-full md:w-1/2 px-24 transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
            <Image src={image} alt="logo" layout="responsive" width={500} height={500} />
          </div>
        </section>
      </main>
    </>
  );
}
