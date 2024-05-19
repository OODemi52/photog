import grad1 from "../../../public/img/graduation/grad1.jpg"
import grad2 from "../../../public/img/graduation/grad2.jpg"
import grad3 from "../../../public/img/graduation/grad3.jpg"
import grad4 from "../../../public/img/graduation/grad4.jpg"
import grad5 from "../../../public/img/graduation/grad5.jpg"
import bg1 from "../../../public/bg/bg1.jpg"

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
                                className="h-full w-full object-cover lg-image-mask image-mask"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad4.jpg"
                                alt="Graduation Picture 4"
                                width={500}
                                height={750}
                                style={{ objectFit: 'cover' }}
                            />
                            <Image
                                className="h-full w-full object-cover"
                                src="https://raw.githubusercontent.com/OODemi52/photogImages/main/graduation/grad3.jpg"
                                alt="Graduation Picture 3"
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
                <TabsContent className="h-4/5" value="portraits">
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
                                <Image className="h-full w-full object-cover lg-image-mask image-mask" src={grad2} alt="Graduation Picture 2" layout="responsive" />
                                <Image className="h-full w-full object-cover image-mask" src={grad5} alt="Graduation Picture 3" layout="responsive" />
                                <Image className="h-full w-full object-cover lg-image-mask" src={grad4} alt="Graduation Picture 4" layout="responsive" />
                                <Image className="h-full w-full object-cover" src={grad3} alt="Graduation Picture 5" layout="responsive" />
                            </div>
                            <div className="lg:w-1/4 w-full lg:my-auto h-full flex-1 relative">
                                <Image className="h-full w-full object-cover" src={grad1} alt="Graduation Picture 1" layout="responsive" />
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
                                <Image className="h-full w-full object-cover lg-image-mask image-mask" src={grad2} alt="Graduation Picture 2" layout="responsive" />
                                <Image className="h-full w-full object-cover image-mask" src={grad5} alt="Graduation Picture 3" layout="responsive" />
                                <Image className="h-full w-full object-cover lg-image-mask" src={grad4} alt="Graduation Picture 4" layout="responsive" />
                                <Image className="h-full w-full object-cover" src={grad3} alt="Graduation Picture 5" layout="responsive" />
                            </div>
                            <div className="lg:w-1/4 w-full lg:my-auto h-full flex-1 relative">
                                <Image className="h-full w-full object-cover" src={grad1} alt="Graduation Picture 1" layout="responsive" />
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
                                <Image className="h-full w-full object-cover lg-image-mask image-mask" src={grad2} alt="Graduation Picture 2" layout="responsive" />
                                <Image className="h-full w-full object-cover image-mask" src={grad5} alt="Graduation Picture 3" layout="responsive" />
                                <Image className="h-full w-full object-cover lg-image-mask" src={grad4} alt="Graduation Picture 4" layout="responsive" />
                                <Image className="h-full w-full object-cover" src={grad3} alt="Graduation Picture 5" layout="responsive" />
                            </div>
                            <div className="lg:w-1/4 w-full lg:my-auto h-full flex-1 relative">
                                <Image className="h-full w-full object-cover" src={grad1} alt="Graduation Picture 1" layout="responsive" />
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
                                <CardTitle className="font-thin text-6xl">Landscape & Architecture</CardTitle>
                                <CardDescription className="italic font-thin text-lg justify-end mx-auto lg:pt-32">
                                Please Contact For Pricing
                                </CardDescription>
                            </CardHeader>
                            </div>
                            <div className="relative flex flex-col lg:flex-row justify-end items-center w-full lg:w-auto">
                            <div className="grid grid-cols-2 lg:grid-rows-2 md:grid-rows-1 lg:w-1/4 lg:my-auto sm:w-full flex-1 relative">
                                <Image className="h-full w-full object-cover lg-image-mask image-mask" src={grad2} alt="Graduation Picture 2" layout="responsive" />
                                <Image className="h-full w-full object-cover image-mask" src={grad5} alt="Graduation Picture 3" layout="responsive" />
                                <Image className="h-full w-full object-cover lg-image-mask" src={grad4} alt="Graduation Picture 4" layout="responsive" />
                                <Image className="h-full w-full object-cover" src={grad3} alt="Graduation Picture 5" layout="responsive" />
                            </div>
                            <div className="lg:w-1/4 w-full lg:my-auto h-full flex-1 relative">
                                <Image className="h-full w-full object-cover" src={grad1} alt="Graduation Picture 1" layout="responsive" />
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