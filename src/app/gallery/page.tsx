import Image from "next/image";
import { Metadata } from "next";

const metadata: Metadata = {
    title: `D-Labs Photography - Gallery`,
    openGraph: {
      url: "https://dlabs.photo/gallery",
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
    {
      id: 1,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad1.jpg",
      alt: "Graduation Picture 1",
      width: 500,
      height: 750,
    },
    {
      id: 2,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad2.jpg",
      alt: "Graduation Picture 2",
      width: 500,
      height: 750,
    },
    {
      id: 3,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad3.jpg",
      alt: "Graduation Picture 3",
      width: 500,
      height: 750,
    },
    {
      id: 4,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad4.jpg",
      alt: "Graduation Picture 4",
      width: 500,
      height: 750,
    },
    {
      id: 5,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad5.jpg",
      alt: "Graduation Picture 5",
      width: 500,
      height: 750,
    },
    {
      id: 6,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad6.jpg",
      alt: "Graduation Picture 6",
      width: 500,
      height: 750,
    },
    {
      id: 7,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad7.jpg",
      alt: "Graduation Picture 7",
      width: 500,
      height: 750,
    },
    {
      id: 8,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad8.jpg",
      alt: "Graduation Picture 8",
      width: 500,
      height: 750,
    },
    {
      id: 9,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad9.jpg",
      alt: "Graduation Picture 9",
      width: 500,
      height: 750,
    },
    {
      id: 10,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad10.jpg",
      alt: "Graduation Picture 10",
      width: 500,
      height: 750,
    },
    {
      id: 11,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad11.jpg",
      alt: "Graduation Picture 11",
      width: 500,
      height: 750,
    },
    {
      id: 12,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad12.jpg",
      alt: "Graduation Picture 12",
      width: 500,
      height: 750,
    },
    {
      id: 13,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad13.jpg",
      alt: "Graduation Picture 13",
      width: 500,
      height: 750,
    },
    {
      id: 14,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad14.jpg",
      alt: "Graduation Picture 14",
      width: 500,
      height: 750,
    },
    {
      id: 15,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad15.jpg",
      alt: "Graduation Picture 15",
      width: 500,
      height: 750,
    },
    {
      id: 16,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad16.jpg",
      alt: "Graduation Picture 16",
      width: 500,
      height: 750,
    },
    {
      id: 17,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad17.jpg",
      alt: "Graduation Picture 17",
      width: 500,
      height: 750,
    },
    {
      id: 18,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad18.jpg",
      alt: "Graduation Picture 18",
      width: 500,
      height: 750,
    },
    {
      id: 19,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad19.jpg",
      alt: "Graduation Picture 19",
      width: 500,
      height: 750,
    },
    {
      id: 20,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad20.jpg",
      alt: "Graduation Picture 20",
      width: 500,
      height: 750,
    },
    {
      id: 21,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad21.jpg",
      alt: "Graduation Picture 21",
      width: 500,
      height: 750,
    },
    {
      id: 22,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad22.jpg",
      alt: "Graduation Picture 22",
      width: 500,
      height: 750,
    },
    {
      id: 23,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad23.jpg",
      alt: "Graduation Picture 23",
      width: 500,
      height: 750,
    },
    {
      id: 24,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad24.jpg",
      alt: "Graduation Picture 24",
      width: 500,
      height: 750,
    },
    {
      id: 25,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad25.jpg",
      alt: "Graduation Picture 25",
      width: 500,
      height: 750,
    },
    {
      id: 26,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad26.jpg",
      alt: "Graduation Picture 26",
      width: 500,
      height: 750,
    },
    {
      id: 27,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad27.jpg",
      alt: "Graduation Picture 27",
      width: 500,
      height: 750,
    },
    {
      id: 28,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad28.jpg",
      alt: "Graduation Picture 28",
      width: 500,
      height: 750,
    },
    {
      id: 29,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad29.jpg",
      alt: "Graduation Picture 29",
      width: 500,
      height: 750,
    },
    {
      id: 30,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad30.jpg",
      alt: "Graduation Picture 30",
      width: 500,
      height: 750,
    },
    {
      id: 31,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad31.jpg",
      alt: "Graduation Picture 31",
      width: 500,
      height: 750,
    },
    {
      id: 32,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad32.jpg",
      alt: "Graduation Picture 32",
      width: 500,
      height: 750,
    },
    {
      id: 33,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad33.jpg",
      alt: "Graduation Picture 33",
      width: 500,
      height: 750,
    },
    {
      id: 34,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad34.jpg",
      alt: "Graduation Picture 34",
      width: 500,
      height: 750,
    },
    {
      id: 35,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad35.jpg",
      alt: "Graduation Picture 35",
      width: 500,
      height: 750,
    },
    {
      id: 36,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad36.jpg",
      alt: "Graduation Picture 36",
      width: 500,
      height: 750,
    },
    {
      id: 37,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad37.jpg",
      alt: "Graduation Picture 37",
      width: 500,
      height: 750,
    },
    {
      id: 38,
      type: "graduation",
      src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad38.jpg",
      alt: "Graduation Picture 38",
      width: 500,
      height: 750,
    },
  ];
export default function GalleryPage() {
  return (
    <main>
        <h1 className="text-7xl pl-8 pt-4 font-thin">All</h1>
        <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((image) => (
            <div key={image.id} className="gallery-item">
            <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                layout="responsive"
                className="rounded-lg shadow-lg"
                loading="lazy"
                quality={75}
            />
            </div>
        ))}
        </div>
    </main>
  );
}
