import Image from "next/image";

const images = [
  {
    id: 1,
    src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad1.jpg",
    alt: "Graduation Picture 1",
    width: 500,
    height: 750,
  },
  {
    id: 2,
    src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad2.jpg",
    alt: "Graduation Picture 2",
    width: 500,
    height: 750,
  },
  {
    id: 3,
    src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad3.jpg",
    alt: "Graduation Picture 3",
    width: 500,
    height: 750,
  },
  {
    id: 4,
    src: "https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad4.jpg",
    alt: "Graduation Picture 4",
    width: 500,
    height: 750,
  },
];

export default function GalleryOption() {
  return (
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
          />
        </div>
      ))}
    </div>
  );
}
