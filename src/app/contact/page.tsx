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
import React from "react"

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  number: z.string().min(10, {
    message: "Number must be at least 10 characters.",
  }),
  interest: z.string().min(3, {
    message: "Interest must be at least 3 characters.",
  }),
  date: z.date().min(new Date("1900-01-01"), {
    message: "Date must be at least 3 characters.",
  }),
  message: z.string().min(3, {
    message: "Message must be at least 3 characters.",
  }),
})

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      interest: "",
      date: new Date(Date.now()),
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <main className="flex flex-col md:flex-row w-full md:h-screen mb-16">
      <section className="md:w-1/2 w-full h-1/2 md:h-full overflow-hidden md:object-top">
        <Image
          src="https://raw.githubusercontent.com/OODemi52/photogImages/main/portraits/port9.jpg"
          alt="Portrait 1"
          className="h-full w-full rounded-lg shadow-lg"
          width={500}
          height={750}
          style={{ objectFit: 'contain' }}
        />
      </section>
      <section className="md:w-1/2 w-full flex items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 px-8 py-4 w-full"
          >
            <h1 className="text-4xl lg:text-6xl md:text-4xl font-thin" style={{ textShadow: 'black 1px 0 10px' }}>Shoot Us A Message!</h1>
            <p className="md:text-base font-thin">Subtitle to compliment what is said in the hook.</p>
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
                    value={field.value}
                    onChange={field.onChange}
                  >
                    {/*(inputProps: ReactNode) => <Input {...inputProps} />*/}
                  </InputMask>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="interest" render={({ field }) => (
              <FormItem>
                <FormLabel>Service of Interest</FormLabel>
                <FormControl>
                  <RadioGroup className="flex flex-wrap items-center space-x-2">
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
                        date > new Date() || date < new Date("1900-01-01")
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
                  <Textarea {...field} placeholder="Please provide any additional information you think would be useful, or that you really want us to know..."/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button variant={"secondary"} type="submit">Submit</Button>
          </form>
        </Form>
      </section>
    </main>
  )
}

