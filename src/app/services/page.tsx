import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
 

export default function FAQPage() {
return (
    <main className="h-screen bg-faq-pattern">
        <section className="w-4/5 h-1/6 bg-gradient-to-r border-b pt-10 px-8 mx-auto">
            <h1 className="text-5xl sm:text-6xl font-thin text-center">Services</h1>
        </section>
        <section className="w-4/5 h-1/6 bg-gradient-to-r pt-10 px-8 mb-20 sm:mb-0 mx-auto">
            <p className="font-thin text-center">
                We offer a variety of photography services to meet your needs. Whether you&apos;re looking for graduation photos, professional headshots, or event photography, we&apos;ve got you covered. Additional Edited Images, Locations, and Outfit Changes are available for an additional fee. <Link href="/contact" className="hover:underline text-purple-500 whitespace-nowrap">Contact us</Link> today to book your session!
            </p>
        </section>
        <section className="flex justify-center items-center h-full">
            <Tabs defaultValue="graduation" className="w-4/5 h-full">

                {/* Tab List */}
                <TabsList className="w-full justify-center items-center flex my-16 mt-32 md:my-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                        <TabsTrigger value="graduation" className="py-2 px-3">Graduation</TabsTrigger>
                        <TabsTrigger value="portraits" className="py-2 px-3">Portraits</TabsTrigger>
                        <TabsTrigger value="headshots" className="py-2 px-3">Professional Headshots</TabsTrigger>
                        <TabsTrigger value="events" className="py-2 px-3">Events</TabsTrigger>
                        <TabsTrigger value="landscape" className="py-2 px-3">Landscape & Architecture</TabsTrigger>
                    </div>
                </TabsList>
                
                {/* Graduation */}
                <TabsContent value="graduation">
                    <Card className="flex flex-col lg:flex-row z-50">
                        <div className="flex flex-col lg:flex-row w-full bg-gradient-to-r from-transparent to-purple-900">
                            <div className="flex-1">
                            <CardHeader>
                                <CardTitle className="font-thin text-6xl">Graduation</CardTitle>
                                <CardDescription className="italic font-thin text-lg justify-end">
                                Starting at <s>$200</s> $150
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
                            <div className="relative flex flex-col lg:flex-row justify-end items-center w-full lg:w-auto">
                            <div className="grid grid-cols-2 lg:grid-rows-2 md:grid-rows-1 lg:w-1/4 lg:my-auto sm:w-full flex-1 relative">
                            <Image
                                className="h-full w-full object-cover lg-image-mask image-mask"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad2.jpg"
                                alt="Graduation Picture 2"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover image-mask"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad5.jpg"
                                alt="Graduation Picture 5"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover lg-image-mask"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad19.jpg"
                                alt="Graduation Picture 19"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad32.jpg"
                                alt="Graduation Picture 32"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            </div>
                            <div className="lg:w-1/4 w-full lg:my-auto h-full flex-1 relative">
                            <Image
                                className="h-full w-full object-cover"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad1.jpg"
                                alt="Graduation Picture 1"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            </div>
                            </div>
                        </div>
                    </Card>
                </TabsContent>

                {/* Portraits */}
                <TabsContent value="portraits">
                   <Card className="flex flex-col lg:flex-row z-50">
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
                                <li>1 Hours</li>
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
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/portraits/port19.jpg"
                                alt="Portrait Picture 19"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover image-mask"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/portraits/port3.jpg"
                                alt="Portrait Picture 3"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover lg-image-mask"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/portraits/port17.jpg"
                                alt="Portrait Picture 17"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/portraits/port57.jpg"
                                alt="Portrait Picture 57"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            </div>
                            <div className="lg:w-1/4 w-full lg:my-auto h-full flex-1 relative">
                            <Image
                                className="h-full w-full object-cover"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/portraits/port13.jpg"
                                alt="Portrait Picture 13"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            </div>
                            </div>
                        </div>
                    </Card>
                </TabsContent>

                {/* Headshots */}
                <TabsContent value="headshots">
                   <Card className="flex flex-col lg:flex-row z-50">
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
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/headshots/head4.jpg"
                                alt="Professional Headshot Picture 19"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover image-mask"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/headshots/head12.jpg"
                                alt="Professional Headshot Picture 3"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover lg-image-mask"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/headshots/head9.jpg"
                                alt="Professional Headshot Picture 17"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/headshots/head5.jpg"
                                alt="Professional Headshot Picture 57"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            </div>
                            <div className="lg:w-1/4 w-full lg:my-auto h-full flex-1 relative">
                            <Image
                                className="h-full w-full object-cover"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/headshots/head2.jpg"
                                alt="Professional Headshot Picture 13"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            </div>
                            </div>
                        </div>
                    </Card>
                </TabsContent>

                {/* Events */}
                <TabsContent value="events">
                    <Card className="flex flex-col lg:flex-row z-50">
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
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/event/event32.jpg"
                                alt="Event Picture 32"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover image-mask"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/event/event85.jpg"
                                alt="Event Picture 85"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover lg-image-mask"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/event/event88.jpg"
                                alt="Event Picture 88"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/event/event72.jpg"
                                alt="Event Picture 72"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            </div>
                            <div className="lg:w-1/4 w-full lg:my-auto h-full flex-1 relative">
                            <Image
                                className="h-full w-full object-cover"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/event/event4.jpg"
                                alt="Event Picture 4"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            </div>
                            </div>
                        </div>
                    </Card>
                </TabsContent>

                {/* Landscape & Architecture */}
                <TabsContent value="landscape">
                    <Card className="flex flex-col lg:flex-row z-50">
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
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/landscape/land5.jpg"
                                alt="Landscape & Architecture 5"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/landscape/land8.jpg"
                                alt="Landscape & Architecture 8"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover lg-image-mask"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/landscape/land15.jpg"
                                alt="Landscape & Architecture 15"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/landscape/land21.jpg"
                                alt="Landscape & Architecture 21"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            </div>
                            <div className="lg:w-1/4 w-full lg:my-auto h-full flex-1 relative">
                            <Image
                                className="h-full w-full object-cover"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/landscape/land2.jpg"
                                alt="Landscape & Architecture Picture 2"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
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