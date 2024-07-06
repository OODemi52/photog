"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"
import InputMask from "react-input-mask"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import React, { useState } from "react"
import { Metadata } from "next"
import { Icons } from "@/components/icons"

const metadata: Metadata = {
    title: `D-Labs Photography - Contact Us`,
    openGraph: {
      url: "https://dlabs.photo/contact",
      images: [
        {
          width: 512,
          height: 512,
          url: "https://cdn.statically.io/gh/OODemi52/photog/main/public/favicons/android-chrome-512x512.png",
        },
      ],
    },
};

const formSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    number: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, {
        message: "Please enter a valid phone number.",
    }),
    interest: z.enum(["graduation", "portrait", "headshot", "event", "landscape"]).refine((value) => value !== undefined, {
        message: "Please choose one of the services.",
    }),
    date: z.date().refine((value) => value >= new Date(new Date().setDate(new Date().getDate() + 1)), {
        message: "Please pick a date.",
    }),
    message: z.string().optional(),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        name: "",
        email: "",
        number: "",
        interest: undefined,
        date: new Date(new Date().setDate(new Date().getDate() + 1)),
        message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
        const response = await fetch('/api/sendContactForm', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        toast({
          title: "Your message has been sent!",
          description: "We will get back to you as soon as possible.",
          variant: "success",
        });
    } catch (error) {
        console.error(error)
        toast({
            title: "Something went wrong!",
            description: "Please try again.",
            variant: "destructive",
          })
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <main className="flex flex-col md:flex-row w-full md:h-screen">
      <section className="md:w-1/2 w-full h-1/2 md:h-full overflow-hidden md:object-top">
        <Image
          src="https://cdn.statically.io/gh/OODemi52/photogImages/main/portraits/port10.jpg"
          alt="Portrait 1"
          className="h-full w-full rounded-lg shadow-lg"
          width={1728}
          height={2160}
          priority={true}
          style={{ objectFit: 'contain', transform: "translate3d(0, 0, 0)" }}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAZABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwj/xAAYEAEBAAMAAAAAAAAAAAAAAAAAAQIRMf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOY05RUpVGmVgVegDlFqYYDYIA//2Q=="
        />
      </section>
      <section className="md:w-1/2 w-full flex items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 px-8 py-4 w-full"
          >
            <h1 className="text-4xl lg:text-6xl md:text-4xl font-thin" style={{ textShadow: 'black 1px 0 10px' }}>Shoot Us A Message!</h1>
            <p className="md:text-base font-thin">Let Us Know How We Can Best Cater To Your Needs.</p>
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="number" render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <InputMask
                    mask="999-999-9999"
                    maskChar=" "
                    value={field.value}
                    onChange={field.onChange}
                    className="input w-full bg-transparent border-b"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="interest" render={({ field }) => (
              <FormItem>
                <FormLabel>Service of Interest</FormLabel>
                <FormControl>
                  <RadioGroup
                    className="flex flex-wrap items-center space-x-2"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="flex gap-1 items-center">
                      <RadioGroupItem value="graduation" id="graduation" />
                      <Label htmlFor="graduation">Graduation</Label>
                    </div>
                    <div className="flex gap-1 items-center">
                      <RadioGroupItem value="portrait" id="portrait" />
                      <Label htmlFor="portrait">Portraits</Label>
                    </div>
                    <div className="flex gap-1 items-center">
                      <RadioGroupItem value="headshot" id="headshot" />
                      <Label htmlFor="headshot">Professional Headshots</Label>
                    </div>
                    <div className="flex gap-1 items-center">
                      <RadioGroupItem value="event" id="event" />
                      <Label htmlFor="event">Events</Label>
                    </div>
                    <div className="flex gap-1 items-center">
                      <RadioGroupItem value="landscape" id="landscape" />
                      <Label htmlFor="landscape">Landscape & Architecture</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="date" render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of Shoot/Event</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date(new Date().setDate(new Date().getDate() + 1))
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                    If not certain, please provide an estimate.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="message" render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Textarea value={field.value} onChange={field.onChange} placeholder="Please provide any additional information you think would be useful, or that you really want us to know..."/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button variant={"secondary"} type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting && <Icons.spinner className="mr-2 animate-spin" />} Submit
            </Button>
          </form>
        </Form>
      </section>
    </main>
  )
}
