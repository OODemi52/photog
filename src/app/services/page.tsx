import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Metadata } from "next";

const metadata: Metadata = {
    title: `D-Labs Photography - Services`,
    openGraph: {
      url: "https://dlabs.photo/services",
      images: [
        {
          width: 512,
          height: 512,
          url: "https://cdn.statically.io/gh/OODemi52/photog/main/public/favicons/android-chrome-512x512.png",
        },
      ],
    },
  };

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-4/5 h-1/6 bg-gradient-to-r border-b pt-10 px-8 mx-auto">
        <h1 className="text-5xl sm:text-6xl font-thin text-center pb-8">Services</h1>
      </section>
      <section className="w-4/5 h-1/6 pt-10 px-8 sm:mb-0 mx-auto">
        <p className="font-thin text-center">
          We offer a variety of photography services to meet your needs. Whether you&apos;re looking for graduation photos, professional headshots, or event photography, we&apos;ve got you covered. Additional Edited Images, Locations, and Outfit Changes are available for an additional fee. <Link href="/contact" className="hover:underline text-purple-500 whitespace-nowrap">Contact us</Link> today to book your session!
        </p>
      </section>
      <section className="flex-grow flex justify-center items-center">
        <Tabs defaultValue="portraits" className="w-full md:w-4/5 h-full">

          {/* Tab List */}
          <TabsList className="w-full justify-center items-center flex my-16 mt-32 md:my-6">
            <div className="flex flex-wrap gap-2 justify-center">
              <TabsTrigger value="portraits" className="py-2 px-3">Portraits</TabsTrigger>
              <TabsTrigger value="events" className="py-2 px-3">Events</TabsTrigger>
              <TabsTrigger value="headshots" className="py-2 px-3">Professional Headshots</TabsTrigger>
              <TabsTrigger value="graduation" className="py-2 px-3">Graduation</TabsTrigger>
              <TabsTrigger value="landscape" className="py-2 px-3">Landscape & Architecture</TabsTrigger>
            </div>
          </TabsList>

          {/* Graduation */}
          <TabsContent value="graduation" className="flex z-[-1]">
            <Card className="flex flex-col lg:flex-row z-[-1]">
              <div className="flex flex-col lg:flex-row w-full bg-gradient-to-r from-transparent to-purple-900">
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle className="font-thin text-6xl">Graduation</CardTitle>
                    <CardDescription className="italic font-thin text-lg justify-end">
                      Starting at $200
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 pt-2">
                      <li>3 Edited Photos</li>
                      <li>1.5 Hours</li>
                      <li>1 Outfit</li>
                      <li>1 Location</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="italic font-thin">
                    *Outfit Changes Available
                  </CardFooter>
                </div>
                <div className="relative flex flex-col lg:flex-row justify-end items-center w-full lg:w-auto z-[0]">
                  <div className="grid grid-cols-2 lg:grid-rows-2 md:grid-rows-1 lg:w-1/4 lg:my-auto sm:w-full flex-1 relative">
                    <Image
                      className="h-full w-full object-cover lg-image-mask image-mask"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/graduation/grad2.jpg"
                      alt="Graduation Picture 2"
                      width={1440}
                      height={2160}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAUBBgIDBP/EAB0QAAICAgMBAAAAAAAAAAAAAAABAgMEERMxQSH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCiyxt+HPbh78HcIJmUqU10GVYlg/egLDLHW+gCpqsRu5VoUxuaJ55BDJ2LYCznkAV//9k="
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover image-mask"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/graduation/grad5.jpg"
                      alt="Graduation Picture 5"
                      width={1440}
                      height={2160}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAQDBQECB//EACAQAAEEAgEFAAAAAAAAAAAAAAABAgMRBDEUISMyQWH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgMB/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAESAv/aAAwDAQACEQMRAD8A6A7Jv2Y5H0qGT2brKLe2ThbpldNgUi5FLsA2ME4H2hM91NFcfRNL4kZVLSsktOUBWZ3cUBdF0//Z"
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover lg-image-mask"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/graduation/grad19.jpg"
                      alt="Graduation Picture 19"
                      width={1440}
                      height={2160}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAQGBQMH/8QAIBAAAgICAgIDAAAAAAAAAAAAAAECAwQRBSESIzFBUf/EABYBAQEBAAAAAAAAAAAAAAAAAAMEAf/EABsRAAICAwEAAAAAAAAAAAAAAAACAQMREhMi/9oADAMBAAIRAxEAPwD3bLa0yZ5V9M3Mq9NPsn+Rl5JlazqA3ol8mXtYHS+vdjATuFxKSzOUvsUtt8zCjlyf6N0XOXyZcuDKX2GJVbe9AMV9xQEEsXRB/9k="
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/graduation/grad32.jpg"
                      alt="Graduation Picture 32"
                      width={2160}
                      height={1440}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAwT/xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIDBBESMUH/xAAWAQEBAQAAAAAAAAAAAAAAAAAEAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARL/2gAMAwEAAhEDEQA/AGjgVW078NqSJ4Jhcn2ks8TcugHaqiwKyzf/2Q=="
                      quality={75}
                    />
                  </div>
                  <div className="lg:w-1/4 w-full lg:my-auto h-full flex-1 relative">
                    <Image
                      className="h-full w-full object-cover"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/graduation/grad1.jpg"
                      alt="Graduation Picture 1"
                      width={1440}
                      height={2160}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAABgADBAcF/8QAHhAAAgEEAwEAAAAAAAAAAAAAAAEEAwURIQISIjH/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQB/8QAGhEBAQACAwAAAAAAAAAAAAAAAAEREhMhMf/aAAwDAQACEQMRAD8A5LbouWtCq3Q/mjRtUdPGhhbIqwtG2JeTtjpQvC0QlpRV0WiBwZu57auK8jG2pJIHWx4wJ4VVpIYivpPT5ceiI8lSmkQGT5H/2Q=="
                      quality={75}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Portraits */}
          <TabsContent value="portraits" className="flex z-[-1]">
            <Card className="flex flex-col lg:flex-row z-[-1]">
              <div className="flex flex-col lg:flex-row w-full bg-gradient-to-r from-transparent to-purple-900">
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle className="font-thin text-6xl">Portraits</CardTitle>
                    <CardDescription className="italic font-thin text-lg justify-end">
                      Starting at $180
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 pt-2">
                      <li>3 Edited Photos</li>
                      <li>1 Hour</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="italic font-thin">
                    *Outfit Changes Available
                  </CardFooter>
                </div>
                <div className="relative flex flex-col lg:flex-row justify-end items-center w-full lg:w-auto">
                  <div className="grid grid-cols-2 lg:grid-rows-2 md:grid-rows-1 lg:w-1/4 lg:my-auto sm:w-full flex-1 relative">
                    <Image
                      className="h-full w-full object-cover lg-image-mask image-mask"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/portraits/port20.jpg"
                      alt="Portrait Picture 20"
                      width={1440}
                      height={2160}
                      priority={true}
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAQBAgMFB//EAB4QAAICAgIDAAAAAAAAAAAAAAACAyEBEQQSEyJB/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAEDBP/EABgRAQADAQAAAAAAAAAAAAAAAAABERIT/9oADAMBAAIRAxEAPwDmCtRDvQpHNvBLyUU2nzWaSwE3f2Aey5lIeRv6MeXeDSQSZHUkzoi0RBhnsDB2ALFP/9k="
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover image-mask"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/portraits/port3.jpg"
                      alt="Portrait Picture 3"
                      width={1440}
                      height={2160}
                      priority={true}
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUGBP/EAB4QAAIBBQEBAQAAAAAAAAAAAAAEAQIDESExEkFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAZEQACAwEAAAAAAAAAAAAAAAAAAgEREhP/2gAMAwEAAhEDEQA/AL1JzGNjlZ7UbIhdiYwM1mZ1sB2KESywh3XQJ+hifPQJ+hRyJq3YqieG5e1VmBrCVP4aLCdOfgrQEk0ZLdqfMAO7atPmOABgfZ//2Q=="
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover lg-image-mask"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/portraits/port18.jpg"
                      alt="Portrait Picture 18"
                      width={1440}
                      height={2160}
                      priority={true}
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAQFAwIG/8QAHRAAAgICAwEAAAAAAAAAAAAAAAIBEQMhBBIiQf/EABcBAQADAAAAAAAAAAAAAAAAAAMAAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A8BLdjN0szwP2G1i4Dwl5Iti2A7KRYEH5TOE90Vcc6I3B+FVZpS6e12zbAXd/QGNFr//Z"
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/portraits/port58.jpg"
                      alt="Portrait Picture 58"
                      width={1440}
                      height={2160}
                      priority={true}
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAUDBgIEB//EAB8QAAIBBQEAAwAAAAAAAAAAAAABAwIEESExIhJBYf/EABgBAAMBAQAAAAAAAAAAAAAAAAEEBQID/8QAGhEBAAIDAQAAAAAAAAAAAAAAAAERAhMhEv/aAAwDAQACEQMRAD8A6+5/0FMn9iSq730ziusvotSzp4dqrKA0qLjytgBz1qfXc76Sw3W+iWqR5JIpHk3SljEeVmjuvK2AnolfxABeY6//2Q=="
                      quality={75}
                    />
                  </div>
                  <div className="lg:w-1/4 w-full lg:my-auto h-full flex-1 relative">
                    <Image
                      className="h-full w-full object-cover"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/portraits/port14.jpg"
                      alt="Portrait Picture 14"
                      width={1728}
                      height={2160}
                      priority={true}
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAZABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAIDBAEFB//EABsQAAMAAwEBAAAAAAAAAAAAAAABAhEhMQME/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AOP/ACaSNjFaKPhOC3Lwi46IaugK2A1aihDt4QTwxfGJlKR3sCGugA1//9k="
                      quality={75}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Headshots */}
          <TabsContent value="headshots" className="flex z-[-1]">
            <Card className="flex flex-col lg:flex-row z-[-1]">
              <div className="flex flex-col lg:flex-row w-full bg-gradient-to-r from-transparent to-purple-900">
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle className="font-thin text-6xl">Professional Headshots</CardTitle>
                    <CardDescription className="italic font-thin text-lg justify-end">
                      Starting at $70
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 pt-2">
                      <li>3 Edited Photos</li>
                      <li>30 Minutes</li>
                      <li>1 Outfit</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="italic font-thin">
                    *Outfit Changes Available
                  </CardFooter>
                </div>
                <div className="relative flex flex-col lg:flex-row justify-end items-center w-full lg:w-auto">
                  <div className="grid grid-cols-2 lg:grid-rows-2 md:grid-rows-1 lg:w-1/4 lg:my-auto sm:w-full flex-1 relative">
                    <Image
                      className="h-full w-full object-cover lg-image-mask image-mask"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/headshots/head4.jpg"
                      alt="Professional Headshot Picture 4"
                      width={1728}
                      height={2160}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAZABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFBAb/xAAfEAACAQMFAQAAAAAAAAAAAAAAAQQCAzERFCFBYVH/xAAWAQEBAQAAAAAAAAAAAAAAAAAEAwX/xAAYEQEBAQEBAAAAAAAAAAAAAAAAASEREv/aAAwDAQACEQMRAD8A4C3Fb6NFEV/C1ahcYNFMLw0PQHnENReMAX9p4BXqXFizFWi4H7VLofZwh/QOXTLMT3HQGurIF5R7H//Z"
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover image-mask"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/headshots/head12.jpg"
                      alt="Professional Headshot Picture 12"
                      width={2160}
                      height={2160}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwb/xAAYEAEBAQEBAAAAAAAAAAAAAAABAAIhEf/EABYBAQEBAAAAAAAAAAAAAAAAAAMEAv/EABsRAQABBQEAAAAAAAAAAAAAAAABAgMSITET/9oADAMBAAIRAxEAPwDzQUc1Gq103Nji3pyc9lpey36MYMC1VkoquraeMK+ySSBy/9k="
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover lg-image-mask"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/headshots/head9.jpg"
                      alt="Professional Headshot Picture 9"
                      width={1728}
                      height={2160}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAZABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAUCBAMGB//EAB4QAAIBBQEBAQAAAAAAAAAAAAABAwIEESExMiIz/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgEDBP/EABcRAQEBAQAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/AOQx2+Vwm7fC4Nre2ylozV2uuGcjota5VDvgDSWDFb0BcHT2ziTSLUsHyQsfKLkvgcg9UhniSkegLE/6MC4L/9k="
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/headshots/head5.jpg"
                      alt="Professional Headshot Picture 5"
                      width={1728}
                      height={2160}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAZABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMCBAUG/8QAHxAAAgIBBAMAAAAAAAAAAAAAAAMBAhEEEiExIjJh/8QAFwEAAwEAAAAAAAAAAAAAAAAAAwQFBv/EABwRAAICAwEBAAAAAAAAAAAAAAABAgMREiETFP/aAAwDAQACEQMRAD8A4GifhaSjOOB1VlpC+Rr26D+fKyRppvHoDUWuNsAGVgu6emVgemcSIGK7gkOT2NDGtaGou0bYAUv0gB1PhOlFZP/Z"
                      quality={75}
                    />
                  </div>
                  <div className="lg:w-1/4 w-full lg:my-auto h-full flex-1 relative">
                    <Image
                      className="h-full w-full object-cover"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/headshots/head2.jpg"
                      alt="Professional Headshot Picture 2"
                      width={1728}
                      height={2160}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAZABQDASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAAMEBQIGB//EAB0QAAEFAQADAAAAAAAAAAAAAAABAgMhMQQREiL/xAAWAQEBAQAAAAAAAAAAAAAAAAAEAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARICEf/aAAwDAQACEQMRAD8A5Z5QdGqEFZbGxS2PvYU4WTUoBLJU9dA1tnDXFnvTOPovSAoxmg/S5Fszo+dAgtwC6TMf/9k="
                      quality={75}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Events */}
          <TabsContent value="events" className="flex z-[-1]">
            <Card className="flex flex-col lg:flex-row z-[-1]">
              <div className="flex flex-col lg:flex-row w-full bg-gradient-to-r from-transparent to-purple-900">
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle className="font-thin text-6xl">Events</CardTitle>
                    <CardDescription className="italic font-thin text-lg justify-end mx-auto lg:pt-32">
                      Please Contact For Pricing
                    </CardDescription>
                  </CardHeader>
                </div>
                <div className="relative flex flex-col lg:flex-row justify-end items-center w-full lg:w-auto">
                  <div className="grid grid-cols-2 lg:grid-rows-2 md:grid-rows-1 lg:w-1/4 lg:my-auto sm:w-full flex-1 relative">
                    <Image
                      className="h-full w-full object-cover lg-image-mask image-mask"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/event/event32.jpg"
                      alt="Event Picture 32"
                      width={2048}
                      height={1365}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAwb/xAAcEAABBQADAAAAAAAAAAAAAAAAAQIDBBESE0H/xAAWAQEBAQAAAAAAAAAAAAAAAAAFAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAARES/9oADAMBAAIRAxEAPwDPRVc8H68XEZ62oRmB1hAxGuNAoRygZ5XX/9k="
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover image-mask"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/event/event85.jpg"
                      alt="Event Picture 85"
                      width={2160}
                      height={1440}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAI/8QAHRAAAgEEAwAAAAAAAAAAAAAAAAECAwQRMRITQf/EABUBAQEAAAAAAAAAAAAAAAAAAAMA/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERAhL/2gAMAwEAAhEDEQA/AM7WsdDFq+OAq38EKbaSC0qMkLQr4jsgvskQfBQ//9k="
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover lg-image-mask"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/event/event88.jpg"
                      alt="Event Picture 88"
                      width={2160}
                      height={1440}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgj/xAAaEAACAwEBAAAAAAAAAAAAAAAAAgERIQMy/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AM+o2B0nBKNNEu00OkQ/oCrToFWP/9k="
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/event/event72.jpg"
                      alt="Event Picture 72"
                      width={2048}
                      height={1365}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAQf/xAAeEAABBAEFAAAAAAAAAAAAAAAAAQIDEQQSEyExYf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBBP/EABcRAQEBAQAAAAAAAAAAAAAAAAARAQL/2gAMAwEAAhEDEQA/AOLQRWNtg46MxUtEKDGpQY2ZyQ2PAKOhABFj/9k="
                      quality={75}
                    />
                  </div>
                  <div className="lg:w-1/4 w-full lg:my-auto h-full flex-1 relative">
                    <Image
                      className="h-full w-full object-cover"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/event/event4.jpg"
                      alt="Event Picture 4"
                      width={2048}
                      height={1365}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYDBAUH/8QAHRAAAQQCAwAAAAAAAAAAAAAAAAECBBEDQRIVUf/EABcBAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAZEQEAAgMAAAAAAAAAAAAAAAAAARICESH/2gAMAwEAAhEDEQA/AOd48XLRO2ErtFiAxHVZuxY7FqzNxiq6elzrl8Acmw8dAOsDT//Z"
                      quality={75}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Landscape & Architecture */}
          <TabsContent value="landscape" className="flex z-[-1]">
            <Card className="flex flex-col lg:flex-row z-[-1]">
              <div className="flex flex-col lg:flex-row w-full bg-gradient-to-r from-transparent to-purple-900">
                <div className="flex-1">
                  <CardHeader>
                    <CardTitle className="font-thin text-5xl">Landscape & Architecture</CardTitle>
                    <CardDescription className="italic font-thin text-lg justify-end mx-auto lg:pt-32">
                      Please Contact For Pricing
                    </CardDescription>
                  </CardHeader>
                </div>
                <div className="relative flex flex-col lg:flex-row justify-end items-center w-full lg:w-auto">
                  <div className="grid grid-cols-2 lg:grid-rows-2 md:grid-rows-1 lg:w-1/4 lg:my-auto sm:w-full flex-1 relative">
                    <Image
                      className="h-full w-full object-cover lg-image-mask image-mask"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/landscape/land5.jpg"
                      alt="Landscape & Architecture 5"
                      width={2160}
                      height={1440}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMFBgf/xAAbEAABBQEBAAAAAAAAAAAAAAAAAQIDITEEFP/EABYBAQEBAAAAAAAAAAAAAAAAAAADBP/EABcRAQEBAQAAAAAAAAAAAAAAAAATARL/2gAMAwEAAhEDEQA/AOURdVaN9daZ6OZw1JnGq+pzWHdV6BFWZwC+nD//2Q=="
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/landscape/land8.jpg"
                      alt="Landscape & Architecture 8"
                      width={2160}
                      height={1440}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAG/8QAHhAAAgICAgMAAAAAAAAAAAAAAAECBAMRBRMhIjH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQP/xAAYEQEAAwEAAAAAAAAAAAAAAAAAAQMSE//aAAwDAQACEQMRAD8A0s7ml9D7d9JPyF5LM9BN+zPTLNjLmQzcnqb9iMbnt5OxkNmH/9k="
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover lg-image-mask"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/landscape/land15.jpg"
                      alt="Landscape & Architecture 15"
                      width={2160}
                      height={1440}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABwAFBv/EAB4QAAIBBAMBAAAAAAAAAAAAAAABAgMEBRESEyEj/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwA0w09OIg4Kvrj6GWJm00dzhqslxJSEm2ufivSMW3rS6kQa1//Z"
                      quality={75}
                    />
                    <Image
                      className="h-full w-full object-cover"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/landscape/land21.jpg"
                      alt="Landscape & Architecture 21"
                      width={2160}
                      height={1440}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBf/EABsQAAMAAgMAAAAAAAAAAAAAAAACAwEhERIi/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQX/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEhET/9oADAMBAAIRAxEAPwDKi+h3fRHJsjUfPBGjVKi0f0BLR89gHkLf/9k="
                      quality={75}
                    />
                  </div>
                  <div className="lg:w-1/4 w-full lg:my-auto h-full flex-1 relative">
                    <Image
                      className="h-full w-full object-cover"
                      src="https://cdn.statically.io/gh/OODemi52/photogImages/main/landscape/land2.jpg"
                      alt="Landscape & Architecture Picture 2"
                      width={2160}
                      height={1440}
                      loading="eager"
                      style={{ objectFit: 'cover', transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUGB//EAB0QAAICAwADAAAAAAAAAAAAAAABAgQDESEFEiL/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAT/xAAXEQADAQAAAAAAAAAAAAAAAAAAAhED/9oADAMBAAIRAxEAPwB7QuJ66UNO0tLpnfjLE3op6OeWkGz0kzhYQtfK6Ajhnl6oATTD/9k="
                      quality={75}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
