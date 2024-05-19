import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ImageCardProps { 
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
  gradient: string;
}

export function ImageCard({ src, alt ,title, description, gradient }: ImageCardProps) {
  return (
    <Link href="/gallery">
      <Card className="w-full rounded-xs overflow-hidden relative transform" style={{ aspectRatio: '4 / 7' }}>
          <Image src={src} alt={alt} layout="fill" objectFit="cover" />
          <CardHeader className={`${gradient} absolute bottom-0 w-full`}>
              <CardTitle className="text-center">{title}</CardTitle>
          </CardHeader>
      </Card>
    </Link>
  );
}
